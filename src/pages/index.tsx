import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          {/* <form></form> */}
          <input
            type="name"
            placeholder="Enter name"
            className="p-2 my-2 border border-black w-full rounded-md"
          />
          {/* email */}
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 my-2 border border-black w-full rounded-md"
          />
          {/* text */}
          <textarea
            placeholder="Enter msg"
            className="p-2 my-2 border border-black rounded-md"
            rows={5}
          />

          <button className="bg-blue-950 text-white font-semibold text-center w-full my-2 p-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
