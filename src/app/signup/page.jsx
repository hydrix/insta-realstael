import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import "../globals.css";

export default function Signup() {
  return (
    <div>
      <div className="bg-black w-full h-screen">
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex relative ">
            <Image
              src="/foodball-2boy.png"
              width={210}
              height={1624}
              alt="a"
              className="border-2 border-fuchsia-500 rounded-3xl absolute right-40 bottom-10 -rotate-6"
            />
            <Image
              src="/note-insta.png"
              width={210}
              height={1624}
              alt="a"
              className="border-2 border-fuchsia-500 rounded-3xl rotate-6"
            />
          </div>
          <div className="flex-col gap-3 ml-10">
            <div className="flex-col">
              <Image src="/insta-word.png" width={200} height={200} alt="a" />
            </div>
            <div className="flex-col flex gap-2 mt-12 mb-5 ">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="bg-black w-72 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Password"
                className="bg-black w-72 border p-2 rounded"
              />
              <button className="bg-[#0066ff] w-72 h-8 text-white rounded-md">
                Log in
              </button>
            </div>

            <div className="flex">
              <div className="border-t w-[115px] mt-3">o</div>
              <p className="text-white px-5">OR</p>
              <div className="border-t w-[111px] mt-3">o</div>
            </div>
            <div className="flex text-[#0066ff] items-center justify-center gap-3">
              <FaFacebook color="#0066ff" />
              <p>Log in with Facebook</p>
            </div>
            <div className="text-white flex flex-col justify-items-center">
              <p>Forget password?</p>
              <div className="flex text-white">
                <p>Don`t have an account?</p>
                <p className="text-[#0066ff]">Sign up</p>
              </div>
              <p>Get the app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}