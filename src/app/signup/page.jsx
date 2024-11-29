import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const Signup = () => {
  return (
    <div className="bg-black w-full h-screen">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col pt-10">
          <Image
            src="/insta-word.png"
            width={200}
            height={200}
            alt="a"
            className="ml-10"
          />
          <p></p>
          <div className="flex">
            <div className="border-t w-[115px] mt-3">o</div>
            <p className="text-white px-5">OR</p>
            <div className="border-t w-[111px] mt-3">o</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
