"use client";

import React, { useState } from "react";
import Collapse from "./Collapse";
import { capitalize } from "@/utils/capitalize";
import { IoIosArrowDown } from "react-icons/io";

/**
 * 
 * @prop {string} title
 * @prop {Icon} TitleIcon
 * @prop {array} items
 * @description creates a multi collapsable menu of items 
 * and nests the collapse component inside it
 */

const MultiCollapse = ({ title, Icon, items }) => {
  // local state 
  const [isVisible, setIsVisible] = useState(false);
  // function to prevent event propagation of parent to child
  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li onClick={() => setIsVisible(!isVisible)}>
      {/** title */}
      <div className="flex justify-between space-x-2 hover:cursor-pointer hover:bg-gray-200 p-1 rounded-md">
        <div className="flex items-center space-x-2">
          <Icon />
          <span className="text-md">{capitalize(title)}</span>
        </div>
        <IoIosArrowDown />
      </div>
      {/** ul list of li items */}
      <ul
        className={`ml-2 my-2 ${
          isVisible ? "block border rounded-md p-1" : "hidden"
          }`}
          >
        {Object.entries(items).map(([key, value]) => {
          const TitleIcon = value.icon;
          {/** Collapse component */}
          return (
            <div onClick={(e) => handleChildClick(e)}>
              <Collapse
                key={key}
                title={key}
                TitleIcon={TitleIcon}
                items={value.item}
                nav={`${title}/`}
              />
            </div>
          );
        })}
      </ul>
    </li>
  );
};

export default MultiCollapse;
