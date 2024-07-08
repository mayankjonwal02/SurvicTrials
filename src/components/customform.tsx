"use client"
import React from 'react';
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

interface Question {
    question: string;
    subQuestions?: string[];
    options: string[];
    inputtype: string;
    value: string;
    setValue: (value: string) => void;
}

interface CustomFormProps {
    questions: Question[];
    handleSubmit: () => void;
    buttontitle: String;
    formtitle: String;
    loading: boolean;
}

const CustomForm: React.FC<CustomFormProps> = ({ questions, handleSubmit, buttontitle, formtitle, loading }) => {
    return (
        <div className='flex flex-col justify-start items-center h-screen w-screen p-5'>
            <LogoutButton />
            <div className='text-4xl font-bold text-green-5 my-5'>{formtitle}</div>
            <div className='w-[90%] h-[80%] flex flex-col justify-center bg-white/30 items-center mt-7 p-4'>
                <ScrollArea className='w-full h-full px-6' style={{ scrollbarColor: "#d9d9d9 #f0f0f0" }}>
                    {questions.map((question, index) => (
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
                                {question.inputtype === "dropdown" ? <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button className='bg-green-600 m-2 text-white hover:bg-green-4 hover:text-green-5 text-sm' variant="outline">
                                            {question.value === "" ? "Choose Option" : question.value}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>Choose Option</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        {question.options.map((option, optIndex) => (
                                            <DropdownMenuItem key={optIndex} onClick={() => question.setValue(option)}>
                                                {option}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu> : <></>}

                                {question.inputtype === "text" ? (
                                    <input
                                        type="text"
                                        className='w-[200px] p-2 border border-green-5 bg-green-4 rounded-lg m-2 '
                                        value={question.value}
                                        onChange={(e) => question.setValue(e.target.value)}
                                        placeholder='Answer here'
                                    />
                                ) : (
                                    <></>
                                )}

                                
                                {question.inputtype === "date" ? (
                                    <input
                                        type="date"
                                        className='w-[200px] p-2 border border-green-5 bg-green-4 rounded-lg m-2 '
                                        value={question.value}
                                        onChange={(e) => question.setValue(e.target.value)}
                                    />
                                ) : (
                                    <></>
                                )}


                                {question.inputtype ===  "textarea" ? (
                                    <textarea
                                        className='w-[200px] p-2 border border-green-5 bg-green-4 rounded-lg m-2 '
                                        value={question.value}
                                        onChange={(e) => question.setValue(e.target.value)}
                                        placeholder='Answer here'
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className='w-full flex justify-center'>
                        <Button onClick={handleSubmit} className='bg-red-600 mt-5 text-white hover:bg-green-4 hover:text-green-5 text-sm' variant="outline">
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
