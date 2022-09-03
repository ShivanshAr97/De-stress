import React from "react";
import { BiSupport } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";

export const ChatOpen = () => {
  function close() {
    let post = document.getElementById("post");

    post.style.display = "none";
  }

  return (
    <>
      <div
        id="postopen"
        className="flex fixed bottom-12 h-96 right-4 border p-2 rounded w-1/5 bg-white z-10 drop-shadow-lg items-centerS"
      >
        <div className="fixed top-0 border shadow-md">
          <BiSupport className="fixed top-2" />
          <p className="fixed top-1 right-16">&nbsp; How may I help you?</p>
          <ImCancelCircle onClick={close} className="w-3 fixed top-0 right-2 cursor-pointer" />
        </div>
        <div className="bottom-0 fixed flex items-center">
        <input className="border p-2 -mx-2 rounded-lg" placeholder="Enter message" type="text" name="" id="" />
        <AiOutlineSend className="border rounded-full w-8 h-8 bg-blue-800 text-white p-1 mx-5" />
        </div>
      </div>
    </>
  );
};
