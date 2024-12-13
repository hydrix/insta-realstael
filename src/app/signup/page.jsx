"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Signup = () => {

  const handleSubmit = () => {
    axios
      .post(`http://localhost:3333/signup`, {
        credential,
        password,
        fullName,
        username,
      })
      .then((res) => {
        toast.success("Та амжилттай бүртгүүллээ!");
        router.push("/signin"); // Redirect to signin page
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response?.data?.message || "Бүртгэл амжилтгүй боллоо.");
      });
  };
  return (
    <>
      <div className="bg-black w-full h-full">
        <div className="flex justify-center items-center flex-col ">
          <div className="flex flex-col pt-10 border w-[340px] mt-10 border-[#303030]">
            <div className="p-10 flex flex-col">
              <Image
                src="/insta-word.png"
                width={200}
                height={200}
                alt="a"
                className="ml-10"
              />
              <p className="text-gray-400 font-bold text-center">
                Sign up to see photos and videos <br /> from your friends.
              </p>
              <button className="bg-[#0099ff] hover:bg-[#0066ff] w-64 h-8 text-white rounded-md my-4">
                Log in with Facebook
              </button>
              <div className="flex flex-col">
                <div className="flex flex-row pb-2">
                  <div className="border-t w-[115px] mt-3"></div>
                  <p className="text-white px-5">OR</p>
                  <div className="border-t w-[111px] mt-3"></div>
                </div>
                <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const credential = e.target.credential.value;
                      const password = e.target.password.value;
                      const fullname = e.target.fullname.value;
                      const username = e.target.username.value;

                      axios
                        .post(`${process.env.NEXT_PUBLIC_API}/signup`, {
                          credential,
                          password,
                          fullname,
                          username,
                        })
                        .then((res) => {
                          toast.success("Та амжилттай бүртгүүллээ!");
                          router.push("/signin");
                        })
                        .catch((err) => {
                          console.error(err);
                          toast.error(err.response.data.message);
                        });
                    }}
                    className="flex flex-col gap-4"
                  >
                    <label>
                      <input
                        type="text"
                        name="credential"
                        placeholder="Mobile number or Email"
                        className="border-[#303030] border rounded-sm p-2 pr-24 bg-[#121212] font-normal text-sm text-white focus:outline-none"
                      />
                    </label>
                    <label>
                      <input
                        type="password" // Updated to use password type
                        placeholder="Password"
                        className="border-[#303030] border rounded-sm p-2 pr-24 bg-[#121212] font-normal text-sm text-white focus:outline-none"
                        name="password"
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Full name"
                        className="border-[#303030] border rounded-sm p-2 pr-24 bg-[#121212] font-normal text-sm text-white focus:outline-none"
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="border-[#303030] border rounded-sm p-2 pr-24 bg-[#121212] font-normal text-sm text-white focus:outline-none"
                      />
                    </label>
                  </form>
                </div>
                <div className="text-gray-400 font-normal text-xs text-center flex flex-col gap-4 pt-4">
                  <p>
                    People who use our service may have uploaded your contact
                    information to Instagram.
                  </p>
                  <p>
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy .
                  </p>
                </div>
                <button
                  // Trigger form submission
                  className="bg-[#0099ff] hover:bg-[#0066ff] w-64 h-8 text-white rounded-md my-4"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <div className="flex border w-[340px] mt-10 border-[#303030] py-10 justify-center">
            <p className="text-white">Have an account?</p>
            <Link href="/signin" className="text-[#0099ff] font-semibold pl-2">
              Log in
            </Link>
          </div>
          <p className="text-white mt-4">Get the app.</p>
          <div className="flex gap-2 mt-4 mb-10">
            <Link href="https://apps.apple.com/us/app/instagram/id389801252">
              <Image
                src="/applestore.png"
                width={160}
                height={50}
                alt="a"
                className=" h-[45px]"
              />
            </Link>
            <Link href="https://play.google.com/store/search?q=instagram&c=apps&hl=en">
              <Image
                src="/playstore.png"
                width={160}
                height={50}
                alt="a"
                className="h-[45px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
