import React from "react";

function CommunitySection() {
  return (
    <div className="container mx-auto mt-[5rem]">
      <div className="text-2xl font-bold text-center mb-[3rem]">
        Community Section
      </div>
      <div className="box-content flex flex-col items-center">
        <ul className="p-10 bg-white border-2 border-transparent rounded-lg mt-[20px] align-center w-[50%] box-content flex-col flex items-center   ">
          <li className="text-2xl font-bold text-center">Discussion</li>
          <li className="m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </li>

          <li className="p-4 ">
            <button className="p-2 text-lg text-white border-4 border-solid rounded-2xl bg-[#6d4c41] border-transparent">
              Join Now
            </button>
          </li>
        </ul>

        <ul className="p-10 bg-white border-2 border-transparent rounded-lg mt-[20px] align-center w-[50%] box-content flex-col flex items-center   ">
          <li className="text-2xl font-bold text-center">Vote</li>
          <li className="m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </li>

          <li className="p-4 ">
            <button className="p-2 text-lg text-white border-4 border-solid rounded-2xl bg-[#6d4c41] border-transparent">
              View Question
            </button>
          </li>
        </ul>

        <ul className="p-10 bg-white border-2 border-transparent rounded-lg mt-[20px] align-center w-[50%] box-content flex-col flex items-center   ">
          <li className="text-2xl font-bold text-center">
            See what your mutuals have been sharing
          </li>
          <li className="m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </li>

          <li className="p-4 ">
            <button className="p-2 text-lg text-white border-4 border-solid rounded-2xl bg-[#6d4c41] border-transparent">
              Connect
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CommunitySection;
