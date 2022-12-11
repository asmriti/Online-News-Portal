import react from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/24/solid";
import featuredphoto from "../images/professional.jpg";
function SideBar() {
  return (
    <div className="p-4 w-[25%]">
      <div className="bg-white border-2 rounded-lg color-white w-[100%]">
        <ul className="box-border flex justify-between items-center  h-[30%] p-4 text-base  ">
          <li>
            <img
              src={featuredphoto}
              alt="professional photo"
              className="rounded-full border-cyan-100 w-[40%] ml-[40px]"
            />
          </li>

          <li className="h-0">
            <CogIcon className="h-10 w-30 text-black-500" />
          </li>
        </ul>
        <div className="text-lg font-bold ml-[35px] mb-[20px]">
          Shreyaa Shrestha
        </div>
      </div>

      <ul className="items-center p-4 mt-2 bg-white border-2 rounded-lg color-white w-[100%]">
        <li className="text-xl font-bold">Categories</li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            {" "}
            Entertainment
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            International
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            {" "}
            Politics
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            {" "}
            Business
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            Health
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            {" "}
            LifeStyle
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            Sports
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            Travel/Tourism
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            Food
          </a>
        </li>
        <li className="p-1 ">
          <a href="" className="text-lg">
            Stock Market
          </a>
        </li>
        <li className="">
          <a href="" className="text-lg">
            Travel/Tourism
          </a>
        </li>
      </ul>

      {/* <ul className="box-border w-40 p-5 text-2xl font-bold text-left bg-white border-2 rounded-lg h-90 color-white">
        <li>
          Categories
          <div className="mt-6 text-base font-medium text-left text-gray-700 ">
            <li className="p-1 mb-1">
              <a href="#"> Entertainment</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#"> International</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#"> Politics</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#"> Business</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#"> Health</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#"> LifeStyle</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#"> Sports</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#">Travel/Tourism</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#">Food</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#">Stock Market</a>
            </li>
            <li className="p-1 mb-1">
              <a href="#">Travel/Tourism</a>
            </li>
          </div>
        </li>
      </ul> */}
    </div>
  );
}
export default SideBar;
