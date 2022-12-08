import react from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/24/solid";
function SideBar() {
  return (
    <div className="p-4 w-[13%]">
      <ul className="box-border flex items-center w-40 h-32 p-4 text-base text-left bg-white border-2 rounded-lg color-white">
        <li>
          <UserCircleIcon className="w-20 h-20 text-black-500" />
        </li>
        <li>
          <CogIcon className="h-8 m-1 w-18 text-black-500" />
        </li>
      </ul>

      <ul className="items-center p-4 mt-2 bg-white border-2 rounded-lg color-white">
        <li className="font-bold ">Categories</li>
        <li className="p-1 ">
          <a href=""> Entertainment</a>
        </li>
        <li className="p-1 ">
          <a href="">International</a>
        </li>
        <li className="p-1 ">
          <a href=""> Politics</a>
        </li>
        <li className="p-1 ">
          <a href=""> Business</a>
        </li>
        <li className="p-1 ">
          <a href="">Health</a>
        </li>
        <li className="p-1 ">
          <a href=""> LifeStyle</a>
        </li>
        <li className="p-1 ">
          <a href="">Sports</a>
        </li>
        <li className="p-1 ">
          <a href="">Travel/Tourism</a>
        </li>
        <li className="p-1 ">
          <a href="">Food</a>
        </li>
        <li className="p-1 ">
          <a href="">Stock Market</a>
        </li>
        <li className="">
          <a href="">Travel/Tourism</a>
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
