import React from "react";

function PostArticle() {
  return (
    <div className="container mx-auto mt-[2rem] box-content flex flex-col items-center w-[50%] mb-[5rem]">
      <h1 className="mb-4 text-2xl font-bold text-center">Post Article</h1>
      <div className="text-lg ">
        Here you can post your thoughts and opinions about everyday
        happenings.!!
      </div>
      <div>
        <div className="p-6">
          <input
            className="p-4 text-center bg-transparent border-2 border-[#6d4c41] rounded-2xl"
            placeholder="Name"
          />
        </div>
        <div className="p-6">
          <input
            className="p-4 text-center bg-transparent border-2 border-[#6d4c41] rounded-2xl"
            placeholder="Email Address"
          />
        </div>
        <div className="p-6">
          <input
            className="p-4 text-center bg-transparent border-2 border-[#6d4c41] rounded-2xl"
            placeholder="Phone number"
          />
        </div>
        <div className="p-6">
          <input
            className="p-4 text-center bg-transparent border-2 border-[#6d4c41] rounded-2xl"
            placeholder="Topic of your News"
          />
        </div>
        <div className="p-6">
          <input
            className="p-4 text-center bg-transparent border-2 border-[#6d4c41] rounded-2xl"
            placeholder="Write your article here"
          />
        </div>

        <button className="p-4 text-lg text-white border-4 border-solid rounded-2xl bg-[#6d4c41] border-transparent ml-[3rem] mt-[2rem]">
          Submit article
        </button>
      </div>
    </div>
  );
}

export default PostArticle;
