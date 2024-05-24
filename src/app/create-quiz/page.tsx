"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import PlusButton from "@/components/UI/PlusButton";
import Modal from "@/components/Modal";
import { Question } from "@/types/question";
const CreateQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [settingsOpened, setSettingsOpened] = useState(false);

  const onSubmit = (data: Question) => {
    setQuestions((prev) => [...prev, { ...data }]);
    setIsOpen(false);
  };
  console.log(questions);
  return (
    <main className='container w-full mt-40 mx-auto my-8 px-4 md:px-6 lg:px-8'>
      <div className='h-full w-full flex items-center justify-center flex-col'>
        <h1 className='text-3xl font-bold'>New Quiz</h1>

        {questions.length > 0 &&
          questions.map((question, i) => {
            const key = Object.keys(question);
            const value = Object.values(question);
            console.log(value);
            return (
              <div
                key={i}
                className='my-4 w-full flex justify-around border-s-white border-2 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-white shadow-white'
              >
                <h2 className='text-2xl font-bold mb-4 text-center capitalize'>
                  {key}
                </h2>
                <div className='w-5/12 grid grid-cols-6 gap-4  justify-self-center'>
                  {value[0] !== "write" ? (
                    value.flat(2).map((answer, i) => (
                      <div
                        className='relative bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 transition-colors text-black capitalize text-center pt-3'
                        key={i}
                      >
                        {answer.answer}
                        {answer.isTrue && (
                          <div className='absolute top-0 right-0 -mt-2 -mr-2 h-5 w-5 rounded-full bg-green-500' />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className='w-48 h-25 m-auto bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 transition-colors text-black capitalize text-center pt-3'>
                      write a short answer
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        <PlusButton onClick={() => setIsOpen(true)} classes='w-full' />
        <div className='my-4 w-full flex flex-col justify-around border-s-white border-2 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-white shadow-white '>
          <button
            className='m-auto whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 flex items-center justify-between w-full text-center'
            type='button'
            id='radix-:R3lafnnja:'
            aria-haspopup='menu'
            aria-expanded='false'
            data-state='closed'
            onClick={() => setSettingsOpened((prev) => !prev)}
          >
            <h3 className='hover:bg-grey-200 m-auto'>Additional settings</h3>
          </button>
          {settingsOpened && (
            <div className='mx-auto max-w-md space-y-6'>
              <div className='space-y-4'>
                <div className='grid gap-2'>
                  <label htmlFor='total-points'>Total Points</label>
                  <input
                    id='total-points'
                    placeholder='100'
                    type='number'
                    className='rounded-md border-s-white border-2 p-2'
                  />
                </div>
                <div className='flex flex-col'>
                  <div className='grid gap-2'>
                    <label htmlFor='time-limit-minutes'>
                      Time Limit (minutes)
                    </label>
                    <input
                      id='time-limit-minutes'
                      placeholder='30'
                      type='number'
                      className='rounded-md border-s-white border-2 p-2'
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label htmlFor='time-limit-seconds'>
                      Time Limit (seconds)
                    </label>
                    <input
                      id='time-limit-seconds'
                      placeholder='00'
                      type='number'
                      className='rounded-md border-s-white border-2 p-2'
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-end gap-2'>
                <button>Save</button>
              </div>
            </div>
          )}
        </div>

        <button
          type='button'
          disabled={questions.length === 0}
          className={`text-2xl font-bold mb-4 text-center capitalize flex w-full items-center justify-center px-4 py-2 mt-4 rounded-md border-solid border-2 border-white  bg-gray-950 text-gray-50 shadow-md   shadow-white disabled:blur-md`}
        >
          Create Quiz
        </button>
      </div>
      <Modal
        onSubmit={onSubmit}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </main>
  );
};
export default CreateQuiz;
