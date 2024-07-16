"use client"
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

  // useEffect(() => {
  //   const login = localStorage.getItem("login_admin");

  //   if (login !== "true") {
  //     router.push('/admin');
  //   }
  // }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
    setCitycode(storedUser.citycode);
    fetch(`/api/getallpatients/`, {
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
      .finally(() => setLoading(false));
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
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    saveAs(blob, `patients_data_${timestamp}.csv`);
  };


  const exportUpdatesToCSV = () => {
    const headers = Object.keys(AllQuestions).flatMap(category =>
      AllQuestions[category].map(question => question.questionId)
    );

    const data = patientsdata.map((patient: any) => {
      const patientData: any = { patient_trial_number: patient.patient_trial_number };

      headers.forEach(questionId => {
        const matchingQuestion = patient.data.find((q: any) => q.questionId === questionId);
        if (matchingQuestion) {
          let info = ""
          matchingQuestion.updates.map((update: any) => {
            if (update.answer !== "") { info = info + update.updatedOn + " : " + update.answer + " | " }
          })
          patientData[questionId] = info !== "" ? info : "Not Answered"

        }
        else {
          patientData[questionId] = "Not Answered";
        }

      });

      return patientData;
    });

    const fields = ['patient_trial_number', ...headers];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    saveAs(blob, `updates_data_${timestamp}.csv`);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full w-full text-3xl font-bold text-green-500">Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center overflow-hidden ">
      {/* <LogoutButton /> */}
      <div className="font-bold text-3xl text-green-700 my-4">All Patient Responses</div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full">

      <button onClick={exportPatientsToCSV} className="mb-1 md:mb-4 mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded transition duration-300">
        Export All Responses to CSV
      </button>
      <button onClick={exportUpdatesToCSV} className="mb-4 mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded transition duration-300">
          Export All Updates to CSV
        </button>
      </div>
      <div className="flex-grow flex w-full justify-center">
        <ScrollArea className="w-[90%] h-[90%] bg-green-100 border border-green-300 rounded-lg shadow-md overflow-auto">
          <div className="w-full h-full overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
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
          <ScrollBar orientation="horizontal" className="h-5 w-full bg-gray-500 " />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default AllResponses;
