import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const CheckValue = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
    const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
    const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
}

const Signup = () => {
  return (
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
              <div className="flex flex-row">
                <div className="border-t w-[115px] mt-3">o</div>
                <p className="text-white px-5">OR</p>
                <div className="border-t w-[111px] mt-3">o</div>
              </div>
              <div className="flex flex-col gap-3 ">
                <input
                  type="text"
                  placeholder="Mobile number or Email"
                  className="border-[#303030] border rounded-sm p-2 bg-[#121212] font-normal text-sm"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="border-[#303030] border rounded-sm p-2 bg-[#121212] font-normal text-sm"

                />
                <input
                  type="text"
                  placeholder="Full name"
                  className="border-[#303030] border rounded-sm p-2 bg-[#121212] font-normal text-sm"

                />
                <input
                  type="text"
                  placeholder="Usename"
                  className="border-[#303030] border rounded-sm p-2 bg-[#121212] font-normal text-sm"
                />
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
              <button className="bg-[#0099ff] hover:bg-[#0066ff] w-64 h-8 text-white rounded-md my-4">
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
          <Image
            src="/applestore.png"
            width={160}
            height={50}
            alt="a"
            className=" h-[45px]"
          />
          <Image
            src="/playstore.png"
            width={160}
            height={50}
            alt="a"
            className="h-[45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
