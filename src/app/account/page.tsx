"use client";
import { useEffect } from "react";

const Account = () => {
  useEffect(() => {
    const quizes = localStorage.getItem("quizes");
  }, []);

  return <div>Account</div>;
};

export default Account;
