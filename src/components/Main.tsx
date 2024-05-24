"use client";
import { ChangeEvent, useState } from "react";

import FeatureCardsList from "./FeatureCardsList";

const Home = () => {
  const [formInput, setFormInput] = useState("");
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setFormInput("");
  };

  return (
    <main>
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center'>
        <div className='container px-4 md:px-6 max-w-4xl'>
          <div className='flex flex-col items-center space-y-6 text-center'>
            <div className='space-y-4'>
              <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
                Create Engaging Quizzes
              </h1>
              <p className=' md:text-xl'>
                Our powerful quiz builder helps you create interactive and
                customizable quizzes that engage your audience.
              </p>
            </div>
            <button>Get Started</button>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center'>
        <FeatureCardsList />
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 flex items-center justify-center'>
        <div className='container px-4 md:px-6 max-w-md space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Stay Ahead of the Curve
          </h2>
          <p>
            Subscribe to our newsletter to receive the latest updates, tips, and
            best practices for creating engaging quizzes.
          </p>
          <form className='flex space-x-2' onSubmit={submitHandler}>
            <input
              className='max-w-lg flex-1 rounded-md p-1 text-black'
              placeholder='Enter your email'
              type='email'
              value={formInput}
              onChange={changeHandler}
            />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
};
export default Home;
