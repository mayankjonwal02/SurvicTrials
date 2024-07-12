"use client";
import React, { useEffect, useState } from "react";
import { Parser } from "json2csv";
import { saveAs } from "file-saver";
import AllQuestions from "@/constants/QuestionList";
import LogoutButton from "@/components/LogoutButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

const AllResponses = () => {
  const [user, setUser] = useState<any>({});
  const [citycode, setCitycode] = useState("");
  const [patientsdata, setPatientsdata] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [AllQ, setAllQ] = useState(AllQuestions);

  const router = useRouter();

  useEffect(() => {
    const login = localStorage.getItem("login");

    if (login !== "true") {
        router.push('/')
    }

}, []);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
    setCitycode(storedUser.citycode);
    if(citycode !==''){fetch(`/api/getallpatients/${citycode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setPatientsdata(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      })
      .finally(() => setLoading(false));}
  }, []);

  const exportPatientsToCSV = () => {
    const headers = Object.keys(AllQuestions).flatMap(category =>
      AllQuestions[category].map(question => question.questionId)
    );

    const data = patientsdata.map((patient: any) => {
      const patientData: any = { patient_trial_number: patient.patient_trial_number };

      headers.forEach(questionId => {
        const matchingQuestion = patient.data.find((q: any) => q.questionId === questionId);
        patientData[questionId] = matchingQuestion ? matchingQuestion.answer : "Not Answered";
      });

      return patientData;
    });

    const fields = ['patient_trial_number', ...headers];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'patients_data.csv');
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full w-full text-3xl font-bold text-green-5">Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden bg-green-70">
      <LogoutButton />
      <div className="font-bold text-3xl text-green-700 my-4">All Patient Responses</div>
      <button onClick={exportPatientsToCSV} className="mb-4 mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded transition duration-300">
        Export All Responses to CSV
      </button>
      <ScrollArea className="w-[90%] max-h-[70%] mt-6 bg-green-100 border border-green-300 rounded-lg ms-3 shadow-md">
        <div className="overflow-x-auto" style={{ width: "max-content", minWidth: "100%" }}>
          <table className="bg-white border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="border border-green-400 px-4 py-2 sticky left-0 z-10" style={{ minWidth: "200px" }}>Patient Trial Number</th>
                {Object.keys(AllQ).flatMap(category =>
                  AllQuestions[category].map(question => (
                    <TooltipProvider key={question.questionId}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <th className="border border-green-400 px-4 py-2 cursor-pointer whitespace-nowrap">
                            {question.questionId}
                          </th>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{question.question}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))
                )}
              </tr>
            </thead>
            <tbody>
              {patientsdata.map((patient: any, index: number) => (
                <tr key={patient.patient_trial_number} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                  <td className="border border-green-300 px-4 py-2 sticky left-0 z-10 font-semibold" style={{ minWidth: "200px" }}>{patient.patient_trial_number}</td>
                  {Object.keys(AllQ).flatMap(category =>
                    AllQuestions[category].map(question => (
                      <td className="border border-green-300 px-4 py-2 whitespace-nowrap" key={question.questionId}>
                        {patient.data.find((q: any) => q.questionId === question.questionId)?.answer || "Not Answered"}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ScrollBar orientation="horizontal" className="bg-green-200"/>
      </ScrollArea>
    </div>
  );
};

export default AllResponses;