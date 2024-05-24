"use client";
import { useRef, useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import PlusButton from "./UI/PlusButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, onClose }) => {
  const addInputRef = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState<string>("defined");

  const addInputHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(addInputRef.current);

    if (!addInputRef.current) return;

    addInputRef.current.insertAdjacentHTML(
      "beforebegin",
      `<fieldset class='flex mr-4 justify-between w-full'>
    <input
      class='w-full p-2 mt-4 border-solid border-2 border-grey-400 rounded-lg'
      placeholder='Answer'
    />
    <input
      class='mt-4 mx-4'
      type='checkbox'
      name='is-true'
      id=''
    />
  </fieldset>`
    );
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
              <form action=''>
                <textarea
                  className='w-full p-2 border-solid border-2 border-grey-400 rounded-lg'
                  placeholder='Enter the question here'
                />
                <select
                  name='answer-type'
                  id=''
                  className='w-full p-2 rounded-md border-solid border-2 border-grey-400 text-black my-2'
                  onChange={(e) => setSelected(e.target.value)}
                >
                  <option value='defined'>
                    Choose from the defined answers
                  </option>
                  <option value='write'>Write a short answer</option>
                </select>
                {selected.includes("defined") ? (
                  <div>
                    <p className='w-5/6 text-black font-bold mt-4'>
                      Enter answers and mark if it is right:
                    </p>
                    <fieldset className='flex mr-4 justify-between w-full'>
                      <input
                        className='w-full p-2 mt-4 border-solid border-2 border-grey-400 rounded-lg'
                        placeholder='Answer'
                      />
                      <input
                        className='mt-4 mx-4'
                        type='checkbox'
                        name='is-true'
                        id=''
                      />
                    </fieldset>
                    <fieldset className='flex mr-4 justify-between w-full'>
                      <input
                        className='w-full p-2 mt-4 border-solid border-2 border-grey-400 rounded-lg'
                        placeholder='Answer'
                      />
                      <input
                        className='mt-4 mx-4'
                        type='checkbox'
                        name='is-true'
                        id=''
                      />
                    </fieldset>
                    <PlusButton
                      ref={addInputRef}
                      onClick={addInputHandler as () => void}
                      classes='w-full'
                    />
                  </div>
                ) : (
                  <textarea
                    className='w-full p-2 border-solid border-2 border-grey-400 rounded-lg'
                    placeholder='Write a short answer'
                  />
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
