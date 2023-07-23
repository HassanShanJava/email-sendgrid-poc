import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    console.log("inside")
    try{
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sendgrid`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(values),
        // mode:"no-cors"
      })
    }catch(err){
      console.log({err},'err')
    }
  };

  const { name, email, message } = values;
  return (
    <>
      <Head>
        <title>Sendgrid Test</title>
      </Head>
      <div className="max-w-[500px] m-auto p-5">
        <h1 className="font-bold text-center text-2xl my-5">Sendgrid Test</h1>
        <div className="flex flex-col justify-start ">
          <p className="font-semibold">Contact form</p>
          {/* name */}
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Enter name"
              className="p-2 my-2 border border-black w-full rounded-md"
            />
            {/* email */}
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Enter email"
              className="p-2 my-2 border border-black w-full rounded-md"
            />
            {/* subject */}
            {/* <input
            type="text"
            placeholder="Subject"
            className="p-2 my-2 border border-black w-full rounded-md"
          /> */}
            {/* text */}
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Enter msg"
              className="p-2 my-2 border border-black rounded-md w-full"
              rows={5}
            />

            <button
              type="submit"
              className="bg-blue-950 text-white font-semibold text-center w-full my-2 p-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
