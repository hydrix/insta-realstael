import Image from "next/image";
import "./globals.css";
import Signup from "./signup/page";
import mongoose from "mongoose";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="container">
        <Signup />
      </div>
    </div>
  );
}
