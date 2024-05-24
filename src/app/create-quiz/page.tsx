"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PlusButton from "@/components/UI/PlusButton";
import Modal from "@/components/Modal";
import { Question } from "@/types/question";
const CreateQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [quizName, setQuizName] = useState("New Quiz");
  const [questionToEdit, setQuestionToEdit] = useState<number>(0);
  const [openEditingModal, setOpenEditingModal] = useState(false);
  const router = useRouter();

  const onSubmit = (data: Question) => {
    setQuestions((prev) => [...prev, { ...data }]);
    setIsOpen(false);
  };

  const onEdit = (data: Question) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionToEdit] = { ...data };
    setQuestions(updatedQuestions);
    setOpenEditingModal(false);
  };

  const changeQuizNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizName(e.target.value);
  };

  const saveToLocalStorage = () => {
    const localeStorageData = localStorage.getItem("quizes");
    const data = JSON.parse(localeStorageData || "[]");
    const newQuiz = {
      [quizName]: questions,
    };
    const quizes = [...data, newQuiz];
    localStorage.setItem("quizes", JSON.stringify(quizes));
  };

  return (
    <main className='container w-full mt-40 mx-auto my-8 px-4 md:px-6 lg:px-8'>
      <div className='h-full w-full flex items-center justify-center flex-col'>
        <div className='w-full flex justify-evenly'>
          {!isEditing ? (
            <h1 className='text-3xl font-bold capitalize'>{quizName}</h1>
          ) : (
            <input
              className='text-xl font-bold capitalize rounded-lg text-black'
              value={quizName}
              onChange={changeQuizNameHandler}
            />
          )}
          <button
            className='text-black bg-white font-bold py-2 px-4 rounded-lg capitalize'
            onClick={() => setIsEditing((prev) => !prev)}
          >
            Edit Name
          </button>
        </div>

        {questions.length > 0 &&
          questions.map((question, i) => {
            const key = Object.keys(question);
            const value = Object.values(question);
            return (
              <div
                key={i}
                className='my-4 w-full flex justify-around border-s-white border-2 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-white shadow-white'
              >
                <h2 className='text-2xl font-bold mb-4 text-center capitalize mr-5'>
                  {key}
                </h2>
                <div className='w-5/6 grid grid-cols-6 gap-4 '>
                  {value[0] !== "write" ? (
                    value.flat(2).map((answer, i) => (
                      <div
                        className='relative bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 transition-colors text-black capitalize text-center pt-3 w-full'
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
                <button
                  className='text-black bg-white font-bold py-2 px-4 rounded-lg capitalize'
                  onClick={() => {
                    setOpenEditingModal(true);
                    setQuestionToEdit(i);
                  }}
                >
                  Edit
                </button>
                <Modal
                  isOpen={openEditingModal}
                  onClose={() => setOpenEditingModal(false)}
                  onSubmit={onEdit}
                  initialData={{
                    defaultValues: {
                      question: key,
                      ["is-true"]: value.flat(2).map((answer) => answer.isTrue),
                      answers: value.flat(2).map((answer) => answer.answer),
                      ["answer-type"]:
                        value[0] === "write" ? "write" : "defined",
                    },
                  }}
                />
              </div>
            );
          })}
        <PlusButton onClick={() => setIsOpen(true)} classes='w-full' />

        <button
          type='button'
          disabled={questions.length === 0}
          className={`text-2xl font-bold mb-4 text-center capitalize flex w-full items-center justify-center px-4 py-2 mt-4 rounded-md border-solid border-2 border-white  bg-gray-950 text-gray-50 shadow-md   shadow-white disabled:blur-md`}
          onClick={() => {
            saveToLocalStorage();
            router.push("/account");
          }}
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
