"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import PlusButton from "@/components/UI/PlusButton";
import Modal from "@/components/Modal";

const CreateQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className='container w-full mt-40 mx-auto my-8 px-4 md:px-6 lg:px-8'>
      <div className='h-full w-full flex items-center justify-center flex-col'>
        <h1 className='text-3xl font-bold'>New Quiz</h1>
        <PlusButton onClick={() => setIsOpen(true)} />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </main>
  );
};
export default CreateQuiz;
