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

interface Question {
    question: string;
    subQuestions?: string[];
    options: string[];
    value: string;
    setValue: (value: string) => void;
}

interface CustomFormProps {
    questions: Question[];
    handleSubmit: () => void;
    buttontitle : String;
    formtitle : String;
}

const CustomForm: React.FC<CustomFormProps> = ({ questions, handleSubmit , buttontitle , formtitle }) => {
    return (
        <div className='flex flex-col justify-start items-center h-screen w-full p-5'>
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
                                <DropdownMenu>
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
                                </DropdownMenu>
                            </div>
                        </div>
                    ))}
                    <div className='w-full flex justify-center'>
                        <Button onClick={handleSubmit} className='bg-red-600 mt-5 text-white hover:bg-green-4 hover:text-green-5 text-sm' variant="outline">
                            {buttontitle}
                        </Button>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default CustomForm;
