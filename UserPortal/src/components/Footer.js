import React from "react";
// import { FaBeer } from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

function Footer() {
  return (
    <div className="container mx-auto">
      <div className=" mt-[5rem] p-4 flex justify-around mb-[3rem] ">
        <ul>
          <li className="text-xl font-bold">About Us</li>
          <li className="mt-[10px] ">
            <a href="" target="_blank">
              About the post
            </a>
          </li>
          <li className="mt-[5px]">
            <a href="" target="_blank">
              Editorial Standards & Integrity
            </a>
          </li>

          <li className="mt-[5px]">
            <a href="" target="_blank">
              Workplace Harassment Policy
            </a>
          </li>

          <li className="mt-[5px]">
            <a href="" target="_blank">
              Privacy Policy
            </a>
          </li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Read Us</li>
          <li className="mt-[10px]">
            <a href="" target="_blank">
              Home Delivery
            </a>
          </li>
          <li className="mt-[5px]">
            <a href="" target="_blank">
              ePaper
            </a>
          </li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Contact Us </li>
          <li className="mt-[10px]">
            <a href="">Writers for the post</a>
          </li>
          <li className="mt-[5px]">
            <a href="">Advertise in the Post</a>
          </li>
          <li className="mt-[5px]">
            <a href="">Work for the Post</a>
          </li>
          <li className="mt-[5px]">
            <a href="">Send us a tip</a>
          </li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Interact with us</li>
          <li className="mt-[10px]">
            <a href="">Twitter</a>
          </li>
          <li className="mt-[5px]">
            <a href="">Instagram</a>
          </li>

          <li className="mt-[5px]">
            <a href="">Facebook</a>
          </li>
        </ul>
      </div>
      <div className="text-center mb-[15px] ">
        © 2022 www.sandeshkhabar.com
      </div>
    </div>
  );
}

export default Footer;
