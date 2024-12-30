import React from 'react';
import { RiMessage3Fill } from "react-icons/ri";
import { FaFingerprint } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { IoBatteryCharging } from "react-icons/io5";
import { LuPlugZap } from "react-icons/lu";
import { MdVpnLock } from "react-icons/md";

const Features = () => {
  return (
    <div className="relative ml-0 overflow-hidden object-cover  mt-14 border-b w-screen border-neutral-800 min-h-[800px] bg-gray-300">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-6xl mt-10 lg:mt-20 tracking-wide font-bold">
          Easily build
          <span className="bg-gradient-to-r from-orange-600 to-orange-800 text-transparent bg-clip-text font-bold">
            {" "}your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ml-40">
          {/* Feature Items */}
          {[
            {
              Icon: RiMessage3Fill,
              title: "Drag-and-Drop Interface",
              description:
                "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
            },
            {
              Icon: FaFingerprint,
              title: "Multi-Platform Compatibility",
              description:
                "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
            },
            {
              Icon: FaShieldAlt,
              title: "Built-in Templates",
              description:
                "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
            },
            {
              Icon: IoBatteryCharging,
              title: "Real-Time Preview",
              description:
                "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
            },
            {
              Icon: LuPlugZap,
              title: "Collaboration Tools",
              description:
                "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
            },
            {
              Icon: MdVpnLock,
              title: "Analytics Dashboard",
              description:
                "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 p-6 rounded-lg text-black font-semibold"
            >
              <div className="flex-shrink-0">
                <feature.Icon className="h-9 w-9 text-orange-700 p-2 bg-neutral-800 rounded-full" />
              </div>
              <div>
                <h5 className="text-xl mt-1 mb-4">{feature.title}</h5>
                <p className="text-neutral-800 text-md ml-0 mr-20">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

