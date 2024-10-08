"use client";
import React, { useEffect, useState } from "react";
import LogoutButton from "@/components/LogoutButton";
import AllQuestions from "@/constants/QuestionList";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Parser } from "json2csv";
import { saveAs } from 'file-saver';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Adjust the import path as needed
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import * as XLSX from 'xlsx';


const Institutebaseddata = () => {
  const [user, setUser] = useState<any>({});
  const [userid, setUserId] = useState("");
  const [citycode, setCitycode] = useState("");
  const [patientsdata, setPatientsdata] = useState<any>([]);
  const [patient, setPatient] = useState<any>({});
  const [AllQ, setAllQ] = useState(AllQuestions);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const login = localStorage.getItem("login");

    if (login !== "true") {
      router.push('/')
    }

  }, []);
  useEffect(() => {
    setLoading(true);
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
    setUserId(storedUser.unique_id);
    setCitycode(storedUser.citycode);
    console.log(citycode);
    if (citycode !== '') {
      fetch(`/api/getallpatients/${citycode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data && data.data.length > 0) {
            setPatientsdata(data.data);
            setPatient(data.data[0]);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching patients:", error);

        });
    }
  }, [citycode]);

  useEffect(() => {
    if (patient.data) {
      const updatedAllQ = JSON.parse(JSON.stringify(AllQ));

      Object.keys(updatedAllQ).forEach((category: string) => {
        const questionList = updatedAllQ[category];

        questionList.forEach((question: any) => {
          const matchingQuestion = patient.data.find(
            (pd: any) => pd.questionId === question.questionId
          );
          if (matchingQuestion) {
            question.value = matchingQuestion.answer;
            question.updates = matchingQuestion.updates;
          } else {
            question.value = "Not Answered";
          }
        });
      });

      setAllQ(updatedAllQ);
    }
  }, [patientsdata, patient]);

  const exportPatientsToCSV = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Create the "Master Data" sheet with all questions and answers
    const masterData = Object.keys(AllQuestions).flatMap(category =>
        AllQuestions[category].map(question => ({
            questionId: question.questionId,
            question: question.question,
        }))
    );

    // Create a mapping of questionId to question text for easy reference
    const questionIdToText = masterData.reduce((acc, { questionId, question }) => {
        acc[questionId] = question;
        return acc;
    }, {} as Record<string, string>);

    // Create master sheet data including answers
    const masterSheetData = [
        ["Patient Trial Number", "Question ID", "Question Text", "Answer"],
        ...patientsdata.flatMap((patient: { data: any[]; patient_trial_number: any; }) => {
            return masterData.map(({ questionId, question }) => {
                const matchingQuestion = patient.data.find((q: any) => q.questionId === questionId);
                return [patient.patient_trial_number, questionId, question, matchingQuestion ? matchingQuestion.answer : "Not Answered"];
            });
        })
    ];

    const masterSheet = XLSX.utils.aoa_to_sheet(masterSheetData);
    XLSX.utils.book_append_sheet(workbook, masterSheet, "Master Data");

    // Create sheets for each category
    Object.keys(AllQuestions).forEach(category => {
        const headers = AllQuestions[category].map(question => ({
            questionId: question.questionId,
            question: question.question,
        }));

        const data = patientsdata.map((patient: any) => {
            const patientData: any = { patient_trial_number: patient.patient_trial_number };

            headers.forEach(({ questionId }) => {
                const matchingQuestion = patient.data.find((q: any) => q.questionId === questionId);
                patientData[questionId] = matchingQuestion ? matchingQuestion.answer : "Not Answered";
            });

            return patientData;
        });

        const sheetData = [
            ["Patient Trial Number", ...headers.map(header => header.question)],
            ...data.map((row: { [x: string]: any; patient_trial_number: any; }) => [
                row.patient_trial_number,
                ...headers.map(header => row[header.questionId] || "Not Answered")
            ])
        ];

        const sheet = XLSX.utils.aoa_to_sheet(sheetData);
        XLSX.utils.book_append_sheet(workbook, sheet, category);
    });

    // Generate and download the Excel file
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    XLSX.writeFile(workbook, `patients_data_${timestamp}.xlsx`);
};
  

const exportUpdatesToCSV = () => {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Create the "Master Data" sheet with all questions and updates
  const masterData = Object.keys(AllQuestions).flatMap(category =>
      AllQuestions[category].map(question => ({
          questionId: question.questionId,
          question: question.question,
      }))
  );

  const masterSheetData = [
      ["Patient Trial Number", "Question ID", "Question Text", "Update Date", "Answer"],
      ...patientsdata.flatMap((patient: { data: any[]; patient_trial_number: any; }) => {
          return masterData.flatMap(({ questionId, question }) => {
              const matchingQuestion = patient.data.find((q: any) => q.questionId === questionId);
              return matchingQuestion
                  ? matchingQuestion.updates.map((update: any) => [
                      patient.patient_trial_number,
                      questionId,
                      question,
                      update.updatedOn,
                      update.answer || "Not Answered"
                  ])
                  : [
                      [patient.patient_trial_number, questionId, question, "No Updates", "Not Answered"]
                  ];
          });
      })
  ];

  const masterSheet = XLSX.utils.aoa_to_sheet(masterSheetData);
  XLSX.utils.book_append_sheet(workbook, masterSheet, "Master Data");

  // Create sheets for each category
  Object.keys(AllQuestions).forEach(category => {
      const headers = AllQuestions[category].map(question => ({
          questionId: question.questionId,
          question: question.question,
      }));

      const data = patientsdata.map((patient: any) => {
          const patientData: any = { patient_trial_number: patient.patient_trial_number };

          headers.forEach(({ questionId }) => {
              const matchingQuestion = patient.data.find((q: any) => q.questionId === questionId);
              if (matchingQuestion) {
                  let info = "";
                  matchingQuestion.updates.forEach((update: any) => {
                      if (update.answer !== "") {
                          info += `${update.updatedOn} : ${update.answer} | `;
                      }
                  });
                  patientData[questionId] = info !== "" ? info : "Not Answered";
              } else {
                  patientData[questionId] = "Not Answered";
              }
          });

          return patientData;
      });

      const sheetData = [
          ["Patient Trial Number", ...headers.map(header => header.question)],
          ...data.map((row: { [x: string]: any; patient_trial_number: any; }) => [
              row.patient_trial_number,
              ...headers.map(header => row[header.questionId] || "Not Answered")
          ])
      ];

      const sheet = XLSX.utils.aoa_to_sheet(sheetData);
      XLSX.utils.book_append_sheet(workbook, sheet, category);
  });

  // Generate and download the Excel file
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  XLSX.writeFile(workbook, `updates_data_${timestamp}.xlsx`);
};
  

  const exportQuestionsToCSV = () => {
    const data = Object.keys(AllQ).flatMap(category =>
      AllQuestions[category].map(question => ({
        question: question.question,
        questionId: question.questionId,
      }))
    );

    const fields = ['question', 'questionId'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'questions_data.csv');
  };
  if (loading) {
    return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
              <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
              </div> 
            </div>;
  }
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center overflow-hidden">
      <LogoutButton />

      <div className="font-bold text-2xl md:text-3xl text-green-5 mt-2">Patient's Data - {citycode}</div>
      <div className="font-bold text-xl my-4">{patient.patient_trial_number}</div>
      <div className="flex flex-col md:flex-row w-full h-fit justify-around items-center mb-4">

        <button onClick={exportPatientsToCSV} className="animate-pulse mb-4 p-2 bg-green-1 text-green-5 font-bold border border-2 border-green-5  rounded text-xs">
          Export All Responses to CSV
        </button>
        <button onClick={exportUpdatesToCSV} className="animate-pulse mb-4 p-2 bg-green-1 text-green-5 font-bold border border-2 border-green-5  rounded text-xs">
          Export All Updates to CSV
        </button>
        <button onClick={exportQuestionsToCSV} className="animate-pulse mb-4 p-2 bg-green-1  text-green-5 font-bold border border-2 border-green-5  rounded text-xs">
          Export Questions to CSV
        </button>
      </div>
      <div className="flex flex-row w-full h-full justify-start items-start overflow-hidden ">
        <Sheet>
          <SheetTrigger>
            <FontAwesomeIcon className="absolute top-7 left-5 text-green-5 text-2xl flex md:hidden " icon={faBars} />
          </SheetTrigger>
          <SheetContent side={"left"} className="rounded-3xl bg-green-2 border border-transparent w-[300px] h-screen flex flex-col justify-center items-center">
            <SheetHeader><div className="text-xl font-bold text-green-5">Trial No : {patient.patient_trial_number}</div></SheetHeader>
            <SheetClose asChild>

              <ScrollArea className="w-full h-[80%]   rounded-lg overflow-auto  ">
                <div className="flex flex-col h-full justify-center items-center mt-5 px-3">
                  {patientsdata.map((data: any) => (
                    <div
                      key={data.patient_trial_number}
                      className={cn("w-full text-center font-bold text-xl bg-white/40 rounded-lg my-3 py-2 cursor-pointer ", patient.patient_trial_number === data.patient_trial_number ? "bg-green-500 text-white" : "hover:bg-white/70")}
                      onClick={() => setPatient(data)}
                    >
                      {data.patient_trial_number}
                    </div>
                  ))}
                </div>
              </ScrollArea>

            </SheetClose>

          </SheetContent>
        </Sheet>

        <ScrollArea className="w-[300px] h-[98%] bg-white/30 border rounded-lg ms-3 overflow-auto hidden md:flex">
          <div className="text-center font-bold text-xl my-3">Choose Trial ID</div>
          <div className="flex flex-col h-full justify-center items-center mt-5 px-3">
            {patientsdata.map((data: any) => (
              <div
                key={data.patient_trial_number}
                className={cn("w-full text-center font-bold text-xl bg-white/40 rounded-lg my-3 py-2 cursor-pointer ", patient.patient_trial_number === data.patient_trial_number ? "bg-green-5 text-white" : "hover:bg-white/70")}
                onClick={() => setPatient(data)}
              >
                {data.patient_trial_number}
              </div>
            ))}
          </div>
        </ScrollArea>
        <ScrollArea className="flex-1 h-[98%] me-5 bg-white/30 border rounded-lg ms-3  overflow-auto">
          {/* <div className="text-center font-bold text-2xl my-3">View Data</div> */}

          <div className="flex flex-col h-full justify-center items-center mt-5 px-3">
            <Accordion type="single" collapsible className="w-full">
              {Object.keys(AllQ).map((category: string) => (
                <AccordionItem key={category} value={category} className="mb-4">
                  <AccordionTrigger className="text-md md:text-xl font-bold text-green-700 bg-white/40 p-2 rounded-lg">
                    {category}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white/20 border rounded-lg">
                    {AllQ[category].map((question) => (
                      <div className="flex flex-col">
                        <div className="flex flex-row justify-start items-center ">
                          <div className="font-bold text-black text-md md:text-xl mb-3 border border-4 rounded-full border-green-3 bg-green-3 text-green-5 p-1 me-3">{question.questionId}</div>
                          <div key={question.questionId} className="font-bold text-black text-md md:text-xl mb-2">

                            Question : {question.question}
                          </div>
                        </div>
                        <div key={question.questionId} className="font-bold text-green-3 text-md md:text-lg mb-1 ms-3">
                          Answer : {question.value}
                        </div>
                        <div>

                          <Dialog>
                            <DialogTrigger>
                              <div className="font-normal text-purple-600 cursor-pointer hover:text-fuchsia-400 text-md mb-8 ms-4">
                                See Updates
                              </div>
                            </DialogTrigger>
                            <DialogContent className="w-full md:w-[60%] h-[60%] p-4">
                              <DialogHeader className=" flex justify-center items-center">
                                <DialogTitle>Updates of QuestionID: {question.questionId}</DialogTitle>
                              </DialogHeader>

                              <ScrollArea className="w-full h-full rounded-lg overflow-auto bg-gray-200 ">
                                <div className="flex flex-col h-full w-full justify-center items-center mt-5 px-3">
                                  <Table>
                                    <TableCaption>{patient.patient_trial_number}</TableCaption>
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Value</TableHead>
                                        <TableHead>Updated By</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {question.updates.map((update: any) => (
                                        update.answer !== "" ? (
                                          <TableRow key={update.date}>
                                            <TableCell className="font-medium">{update.updatedOn}</TableCell>
                                            <TableCell>{update.answer}</TableCell>
                                            <TableCell>{update.updatedBy}</TableCell>
                                          </TableRow>
                                        ) : null
                                      ))}


                                    </TableBody>
                                  </Table>
                                </div>
                              </ScrollArea>
                            </DialogContent>
                          </Dialog>




                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Institutebaseddata;
