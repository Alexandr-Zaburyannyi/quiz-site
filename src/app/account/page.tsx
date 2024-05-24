"use client";
import { useEffect, useState } from "react";

const Account = () => {
  const [quizes, setQuizes] = useState([]);
  useEffect(() => {
    const quizes = localStorage.getItem("quizes");
    setQuizes(JSON.parse(quizes || "[]"));
  }, []);

  return (
    <div className='h-full mt-40'>
      <h1 className='text-center text-3xl text-bold'>Your Quizes: </h1>
      <ul className='flex flex-col items-center'>
        {quizes.map((quiz: any, index: number) => {
          const key = Object.keys(quiz);
          const value = Object.values(quiz);
          return (
            <li
              key={index}
              className='text-white p-4 m-3 flex border-2 border-white rounded-lg'
            >
              <p className='mr-3'>Quiz Name:{key} </p>
              <p> Number of Questions:{value.length}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Account;
