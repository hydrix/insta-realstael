import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const Signup = () => {
  return (
    <div className="bg-black w-full h-screen">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col pt-10 border  border-[#303030]">
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
              <p className="text-gray-400 font-bold text-center">
                People who use our service may have uploaded your contact
                information to Instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
