import React from "react";
import FooterCard from "./FooterCard";

function Footer() {
  return (
    <div className="container mx-auto">
      <div>
        <div className=" mt-[5rem] p-4 flex justify-around mb-[3rem] ">
          <FooterCard
            topic="About Us"
            content1="Editorial Standards & Integrity"
            content2=" Workplace Harassment Policy"
            content3="Privacy Policy"
            content4="About the post"
          />

          <FooterCard
            topic="Read Us"
            content1=" Home Delivery"
            content2="  ePaper"
          />

          <FooterCard
            topic="Contact Us"
            content1="Writers for the post"
            content2="Advertise in the Post"
            content3="Work for the Post"
            content4="Send us a tip"
          />

          <FooterCard
            topic="Interact with us"
            content1="Twitter"
            content2=" Instagram"
            content3="Facebook"
          />
        </div>
        <div className="text-center mb-[15px] ">
          © 2022 www.sandeshkhabar.com
        </div>
      </div>
    </div>
  );
}

export default Footer;
