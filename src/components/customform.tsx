"use client"
import React, { useRef, useEffect, use, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import LogoutButton from './LogoutButton';
import { motion, useScroll } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCircleExclamation, faDroplet, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';
import { Scrollbar } from '@radix-ui/react-scroll-area';

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


interface Question {
    questionId?: string;
    question: string;
    subQuestions?: string[];
    options: string[];
    inputtype: string;
    value: string;
    setValue: (value: string) => void;
    heading?: string;
    subheading?: string;
    subParts?: Array<
        {
            s_question: string;
            s_answer: string;
            s_setanswer: (value: string) => void;
        }
    >;
    restriction?: boolean;
    restrictiontext?: string;
    info?: Array<string>;

}

interface CustomFormProps {
    questions: Question[];
    handleSubmit: () => void;
    buttontitle: String;
    formtitle: String;
    loading: boolean;
    tabs?: React.ReactNode;
    updates?: { questionId: string; updates: any[] }[],
    alertRequired?: boolean
}

const CustomForm: React.FC<CustomFormProps> = ({ questions, handleSubmit, buttontitle, formtitle, loading, tabs , updates, alertRequired }) => {
    const [task, setTask] = useState("")
    useEffect(() => {
        const storedtask = localStorage.getItem("task");
        if (storedtask) {
            setTask(storedtask);
        }
    }, []);
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null);
    return (


        <div className='flex flex-col justify-start items-center h-full w-full  grow  '>
            <LogoutButton />
            <div className='text-2xl font-bold text-green-5 my-5 text-center max-w-[90%]  mx-0 '>{formtitle}</div>
            <div className='w-[90%] h-[80%] flex flex-col justify-center bg-white/30 items-center mt-7 py-4 px-2'>
                <ScrollArea ref={scrollRef} className='w-full h-full md:px-6' style={{ scrollbarColor: "#d9d9d9 #f0f0f0" }}>
                    <div className='w-full  flex flex-col justify-center items-center mb-10'>

                        {tabs ? <>{tabs}</> : <></>}
                    </div>

                    {questions.map((question, index) => (
                        <div>

                            {question.heading ? <div className='text-xl font-bold text-green-5 text-center mt-[60px] mb-4'>{question.heading}</div> : <></>}
                            {question.subheading ? <div className='text-lg font-bold text-green-5 text-center mb-10'>{question.subheading}</div> : <></>}
                            {question.info && (

                                <div className='list-disc ml-4'>
                                    <b className='mb-10 mt-[60px]'>Points to be noted:</b>

                                    {question.info.map((information: string, infoIndex) => (
                                        information !== "" ? (
                                            <p key={infoIndex} className='text-sm text-green-5'>
                                                {information}
                                            </p>
                                        ) : <p className='mt-5'></p>
                                    ))}
                                </div>

                            )}
                            <div key={index} className='flex flex-row mt-5'>
                                <div className='text-sm md:text-lg font-bold me-3'>{index + 1}.</div>
                                <div className='flex flex-col w-full justify-start items-start'>
                                    <div className='text-sm md:text-lg font-bold '>{question.question}</div>

                                    {question.subQuestions && (
                                        <ul className='list-disc ml-4'>
                                            {question.subQuestions.map((subQuestion, subIndex) => (
                                                <li key={subIndex} className='text-sm'>
                                                    {subQuestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {/* <div>{question.value}</div> */}
                                    {question.inputtype === "dropdown" ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className='w-fit p-2 border rounded-lg m-2'>
                                                <Button
                                                    className={cn(
                                                        "w-fit p-2 border rounded-lg",
                                                        (question.value === "" && task === "update") ? "bg-red-300" : "text-white bg-green-5 hover:bg-green-4 hover:text-green-5"
                                                    )}
                                                    onClick={() => question.setValue("")}
                                                    variant="outline"
                                                >
                                                    {question.value === "" ? `Choose Option` :<div className=' max-w-[300px] overflow-hidden'>{question.value}</div> } <FontAwesomeIcon className='ml-2' icon={faCaretDown} />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent>
                                                <ScrollArea className='max-h-[300px] max-w-[300px] overflow-auto'>
                                                    <DropdownMenuLabel>Choose Option</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    {question.options.map((option, optIndex) => (
                                                        <DropdownMenuItem className='hover:bg-green-200' key={optIndex} onClick={() => question.setValue(option)}>
                                                            {option}
                                                        </DropdownMenuItem>
                                                    ))}
                                                    <Scrollbar orientation='vertical' />
                                                </ScrollArea>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : null}


                                    {question.inputtype === "text" ? (
                                        <div className='flex flex-col  '>

                                            <input
                                                type="text"
                                                className={cn('w-[75%] md:w-[300px] py-2 ps-2 border border-green-5 bg-green-4 rounded-lg m-2 ', (question.value === "" && task === "update") ? "bg-red-300 placeholder:text-black" : "")}
                                                value={question.value}
                                                onChange={(e) => question.setValue(e.target.value)}
                                                placeholder='Answer here'
                                            />
                                            {/* {question.restriction && <div className='text-red-500 ps-2'>{<FontAwesomeIcon icon={faCircleExclamation} className='me-2'/>}{question.restrictiontext}</div>} */}
                                        </div>

                                    ) : (
                                        <></>
                                    )}

                                    {question.inputtype === "multitext" ? (

                                        <div className='flex flex-col lg:flex-row w-[80%] gap-2'>
                                            {question.subParts!.map((subPart, subPartIndex) => (
                                                <div key={subPartIndex} className='flex-grow'>
                                                    <input
                                                        type="text"
                                                        className={`w-full py-2 ps-2 border border-green-5 bg-green-4 rounded-lg m-2 ${question.value === "" && task === "update"
                                                            ? "bg-red-300 placeholder:text-black"
                                                            : ""
                                                            }`}
                                                        value={subPart.s_answer}
                                                        onChange={(e) => subPart.s_setanswer(e.target.value)}
                                                        placeholder={subPart.s_question}
                                                    />
                                                </div>
                                            ))}
                                        </div>



                                    ) : (
                                        <></>
                                    )}

                                    {question.inputtype === "disabled" ? (
                                        <input
                                            type="text"
                                            className='w-[75%] md:w-[300px] py-2 ps-2 border border-green-5 bg-green-2/30 rounded-lg m-2 '
                                            value={question.value}
                                            onChange={(e) => question.setValue(e.target.value)}
                                            placeholder='Answer here'
                                            disabled
                                        />
                                    ) : (
                                        <></>
                                    )}


                                    {question.inputtype === "date" ? (
                                        <input
                                            type="date"
                                            className={cn('w-[75%] md:w-[200px] p-2 border border-green-5 bg-green-4 rounded-lg m-2 ', (question.value === "" && task === "update") ? "bg-red-300 " : "")}
                                            value={question.value}
                                            onChange={(e) => question.setValue(e.target.value)}
                                            placeholder='dd-MM-yyyy'
                                        />

                                    ) : (
                                        <></>
                                    )}


                                    {question.inputtype === "textarea" ? (
                                        <textarea
                                            className={cn('w-[75%] md:w-[300px] min-h-[200px] p-2 border border-green-5 bg-green-4 rounded-lg m-2 ', (question.value === "" && task === "update") ? "bg-red-300 placeholder:text-black" : "")}
                                            value={question.value}
                                            onChange={(e) => question.setValue(e.target.value)}
                                            placeholder='Answer here'
                                        />
                                    ) : (
                                        <></>
                                    )}
                                    {updates && updates.map((update, updateIndex) => (
                                        update.questionId === question.questionId ? (
                                            <Dialog>
                            <DialogTrigger>
                              <div className="font-normal text-purple-600 cursor-pointer hover:text-fuchsia-400 text-md mb-8 ms-4">
                                See Updates
                              </div>
                            </DialogTrigger>
                            <DialogContent className="w-full md:w-[60%] h-[60%] p-4">
                              <DialogHeader className=" flex justify-center items-center">
                                <DialogTitle><b>Question</b> : {question.question}</DialogTitle>
                              </DialogHeader>

                              <ScrollArea className="w-full h-full rounded-lg overflow-auto bg-gray-200 ">
                                <div className="flex flex-col h-full w-full justify-center items-center mt-5 px-3">
                                  <Table>
                                    {/* <TableCaption>{patient.patient_trial_number}</TableCaption> */}
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Value</TableHead>
                                        <TableHead>Updated By</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {update.updates.map((update: any) => (
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

                                           
                                        ) : <></>
                                    ))}
                                    {question.restriction && <div className='text-red-500 ps-2'>{<FontAwesomeIcon icon={faCircleExclamation} className='me-2' />}{question.restrictiontext}</div>}

                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='w-full flex justify-center'>
                        <Button onClick={
                            () => {
                                if (alertRequired === true) {
                                    // Show confirmation dialog if alert is required
                                    if (window.confirm("Are you sure you want to submit?")) {
                                        handleSubmit() // Call handleSubmit only if confirmed
                                    }
                                } else {
                                    // Call handleSubmit directly if no alert is required
                                    handleSubmit()
                                }
                            }
                            
                            } className='bg-green-5 mt-5 text-white hover:bg-green-4 hover:text-green-5 text-sm' variant="outline">
                            {buttontitle}


                            {loading ? <div className='ms-2 w-[25px] h-[25px] animate-spin rounded-full border-2 border-t-2 border-t-transparent border-white'></div>
                                : <></>}
                        </Button>
                    </div>

                </ScrollArea>
            </div>
        </div>

    );
};

export default CustomForm;
