import React from "react";

function FooterCard(props) {
  return (
    <div>
      <div className=" mt-[5rem] p-4 flex justify-around mb-[3rem] ">
        <ul>
          <li className="text-xl font-bold">{props.topic}</li>
          <li className="mt-[10px] ">
            <a href="" target="_blank">
              {props.content1}
            </a>
          </li>
          <li className="mt-[5px]">
            <a href="" target="_blank">
              {props.content2}
            </a>
          </li>

          <li className="mt-[5px]">
            <a href="" target="_blank">
              {props.content3}
            </a>
          </li>

          <li className="mt-[5px]">
            <a href="" target="_blank">
              {props.content4}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterCard;
