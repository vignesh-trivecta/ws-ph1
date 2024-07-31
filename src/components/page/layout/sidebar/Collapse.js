"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { titleSplitter } from "@/utils/titleSplitter";
import { capitalize } from "@/utils/capitalize";
import { IoIosArrowDown } from "react-icons/io";
import { pathSplitter } from "@/utils/pathSplitter";

/**
 * 
 * @prop {string} title
 * @prop {Icon} TitleIcon
 * @prop {array} items
 * @prop {string} nav
 * @description creates a collapsable menu of items
 */

const Collapse = ({ title, TitleIcon, items, nav }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const arr = pathSplitter(path);

  return (
    <li onClick={() => setIsVisible(!isVisible)} className="">
      {/** Title */}
      <div className="flex justify-between items-center space-x-2 hover:cursor-pointer hover:bg-gray-200 p-1 rounded-md">
        <div className="flex items-center space-x-2">
          <TitleIcon />
          <span className="text-md">{capitalize(title)}</span>
        </div>
        <IoIosArrowDown />
      </div>
      {/** ul list of li items */}
      <ul className={`${isVisible ? "border rounded-md" : "border-none"}`}>
        {items.map((item, index) => {
          const ItemIcon = item.icon;
          const bgHighlight = arr[arr.length - 1] === item.name;
          {/** li item */}
          return (
            <li
            className={`ml-2 hover:cursor-pointer my-2 hover:bg-gray-200 p-1 rounded-md ${
              isVisible ? "block" : "hidden"
              } ${bgHighlight ? "bg-gray-200" : "bg-none"}`}
              onClick={(e) => {
                router.push(
                  `/admin/${nav ? nav : "/"}${titleSplitter(title)}/${
                    item.name
                    }`
                    );
                    e.stopPropagation();
                    }}
              key={index}
            >
              <div className="flex items-center space-x-2 hover:cursor-pointer">
                <ItemIcon />
                <span className="text-md">{capitalize(item.name)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Collapse;
