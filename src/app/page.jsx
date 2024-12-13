import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { LiaFacebookMessenger } from "react-icons/lia";
import StoryTop from "./story-top";
const Home = () => {
  return (
    <div className="bg-black w-full h-screen">
      <div className="container px-72 ">
        <div className="flex pt-10 gap-2 justify-center items-center">
          <Image
            src="/insta-word.png"
            width={200}
            height={200}
            alt="a"
            className="mr-auto"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9513 21.0026C11.6913 21.0026 11.4313 20.9426 11.2113 20.7726C8.55131 18.8326 5.78131 16.6926 3.73131 13.7526C3.01131 12.7126 2.04131 11.1026 2.00131 9.06261C1.95131 6.61261 3.34131 4.36261 5.46131 3.44261C7.59131 2.52261 10.1213 3.06261 11.9113 4.82261L11.9913 4.90261C12.0713 4.82261 12.1513 4.74261 12.2313 4.67261C14.2313 2.85261 17.0213 2.49261 19.1513 3.77261C21.3613 5.10261 22.4413 7.84261 21.8013 10.4526C21.2313 12.7426 19.8313 14.4826 18.5313 15.8926C16.7513 17.8126 14.6713 19.4126 12.8713 20.7226C12.6513 20.8826 12.3013 21.0126 11.9413 21.0126L11.9513 21.0026ZM7.62131 5.00261C7.15131 5.00261 6.69131 5.09261 6.26131 5.28261C4.88131 5.88261 3.97131 7.38261 4.00131 9.02261C4.02131 10.1726 4.45131 11.2826 5.37131 12.6126C7.14131 15.1626 9.60131 17.1126 12.0013 18.8826C13.7213 17.6226 15.5113 16.2226 17.0713 14.5326C18.2513 13.2526 19.4113 11.8126 19.8713 9.97261C20.3113 8.21261 19.5913 6.37261 18.1313 5.49261C16.7413 4.65261 14.9513 4.91261 13.5813 6.16261C13.3913 6.33261 13.2113 6.53261 13.0413 6.72261L12.0513 7.76261L10.5113 6.26261C9.68131 5.45261 8.63131 5.01261 7.61131 5.01261L7.62131 5.00261Z"
              fill="#F7F9F9"
            />
          </svg>
          <LiaFacebookMessenger
            color="#ffffff"
            className="w-[23px] h-[23px] "
          />
        </div>
        <div className="flex w-auto ">
          <div className="relative">
            <Image
              src="/replace.png"
              width={68}
              height={68}
              alt="a"
              className="rounded-full p-0.5 border-[3px] border-[#00ff00]"
            />
            <div>
              <input type="text" placeholder="search"/>
            </div>
            <div className=" absolute top-10 right-0" >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5Z"
                  fill="#0098FD"
                />
                <path
                  d="M12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5Z"
                  stroke="#0C1014"
                  strokeWidth="3"
                />
                <path
                  d="M11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home