"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IconMinus, IconX } from "@tabler/icons-react";
import PlusButton from "./UI/PlusButton";
import { Question } from "../types/question";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Question) => void;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [itemToRemove, setItemToRemove] = useState<number>();
  const [answerInputs, setAnswerInputs] = useState<object[]>([
    {
      answer: "",
      isTrue: false,
    },
    {
      answer: "",
      isTrue: false,
    },
  ]);
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      question: "",
      "is-true": [false, false],
      answers: ["", ""],
      "answer-type": "defined",
    },
  });
  const answerType = watch("answer-type");

  const submitHandler = (data: any) => {
    if (
      data.question.trim().length !== 0 &&
      data["is-true"].some((v: boolean) => v === true) &&
      data["is-true"].some((v: boolean) => v !== true) &&
      data.answers.every((v: string) => v.trim().length !== 0)
    ) {
      const formattedData = {
        [data.question]: data.answers.map((answer: string, i: number) => ({
          answer,
          isTrue: data["is-true"][i],
        })),
      };
      onSubmit(formattedData as unknown as Question);
      reset();
    }
    if (data.question.trim().length !== 0 && answerType === "write") {
      console.log(data["answer-type"]);
      const formattedData = {
        [data.question]: data["answer-type"],
      };
      onSubmit(formattedData as unknown as Question);
      reset();
    }
  };
  const removeItemHandler = (i: number) => {
    if (answerInputs.length > 2) {
      setItemToRemove(i);
      setAnswerInputs((prev) => prev.filter((_, i) => i !== itemToRemove));
    }
  };

  const addInputHandler = () => {
    setAnswerInputs((prev) => [
      ...prev,
      {
        answer: "",
        isTrue: false,
      },
    ]);
  };

  if (!isOpen) return null;
  return (
    <>
      <div
        className='fixed inset-0 z-10 bg-black opacity-30'
        onClick={onClose}
      />
      <div className='fixed z-10 inset-0 overflow-y-auto h-screen'>
        <div className='flex items-center justify-center min-h-screen h-screen'>
          <div className='bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto w-4/6 min-h-5/6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-bold text-black'>
                Enter your question
              </h2>
              <button
                className='text-gray-500 hover:text-gray-700'
                onClick={onClose}
              >
                <IconX className='text-black' />
              </button>
            </div>
            <div>
              <form action='' onSubmit={handleSubmit(submitHandler)}>
                <textarea
                  className='w-full p-2 border-solid border-2 border-grey-400 rounded-lg text-black'
                  placeholder='Enter the question here'
                  {...register("question")}
                />
                <fieldset className='w-full my-2'>
                  <label className='text-black mx-2' htmlFor='answer-type'>
                    Choose the answer type:
                  </label>
                  <select
                    className='w-full p-2 rounded-md border-solid border-2 border-grey-400 text-black my-2'
                    {...register("answer-type")}
                  >
                    <option value='defined'>
                      Choose from the defined answers
                    </option>
                    <option value='write'>Write a short answer</option>
                  </select>
                </fieldset>
                {answerType.includes("defined") && (
                  <div>
                    <p className='w-5/6 text-black font-bold mt-4'>
                      Enter answers and mark if it is right:
                    </p>
                    {answerInputs.map((_, i) => (
                      <fieldset
                        className='flex mr-4 justify-between w-full'
                        key={i}
                      >
                        <input
                          className='w-full p-2 mt-4 border-solid border-2 border-grey-400 rounded-lg text-black'
                          placeholder='Answer'
                          {...register(`answers.${i}`)}
                        />
                        <input
                          className='mt-4 mx-4'
                          type='checkbox'
                          id=''
                          {...register(`is-true.${i}`)}
                        />
                        <button
                          type='button'
                          onClick={() => removeItemHandler(i)}
                          className='flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium rounded-md border-solid border-2 border-white  bg-gray-950 text-gray-50 shadow-md hover:shadow-lg hover:shadow-white shadow-white'
                        >
                          <IconMinus className='h-6 w-6' />
                        </button>
                      </fieldset>
                    ))}
                    <PlusButton onClick={addInputHandler} classes='w-full' />
                  </div>
                )}
                <button
                  className='flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium rounded-md border-solid border-2 border-white  bg-gray-950 text-gray-50 shadow-md hover:shadow-lg hover:shadow-white shadow-white'
                  type='submit'
                >
                  Add question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
