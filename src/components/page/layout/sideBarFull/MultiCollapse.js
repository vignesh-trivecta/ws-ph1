"use client";

import React, { useState } from "react";
import Collapse from "./Collapse";
import { capitalize } from "@/utils/capitalize";
import { IoIosArrowDown } from "react-icons/io";
import useTheme from "@/utils/hooks/useTheme";

/**
 *
 * @prop {string} title
 * @prop {Icon} TitleIcon
 * @prop {array} items
 * @description creates a multi collapsable menu of items
 * and nests the collapse component inside it
 */

const MultiCollapse = ({ title, Icon, items={} }) => {
  // local state
  const [isVisible, setIsVisible] = useState(false);
  const { hoverClass } = useTheme();
  // function to prevent event propagation of parent to child
  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li onClick={() => setIsVisible(!isVisible)}>
      {/** title */}
      <div className={`flex justify-between items-center space-x-2 hover:cursor-pointer hover:bg-white ${hoverClass} p-1 rounded-md`}>
        <div className="flex items-center space-x-2">
          <Icon />
          <span className="text-sm">{capitalize(title)}</span>
        </div>
        <IoIosArrowDown
          className={`${
            isVisible
              ? "rotate-180 transition-all duration-300"
              : "rotate-0 transition-all duration-300"
          }`}
        />
      </div>
      {/** ul list of li items */}
      <ul
        className={`ml-2 mt-1 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 ${
          isVisible ? "block rounded-md p-1" : "hidden"
        }`}
      >
        {Object?.entries(items)?.map(([key, value]) => {
          // const TitleIcon = value.icon;
          console.log(value.item, key)
          {
            /** Collapse component */
          }
          return (
            <div key={key} onClick={(e) => handleChildClick(e)} className="mt-1">
              <Collapse
                title={key}
                // TitleIcon={TitleIcon}
                items={value.item}
                nav={`${title}/`}
                isCollapsible={value.isCollapsible}
              />
            </div>
          );
        })}
      </ul>
    </li>
  );
};

export default MultiCollapse;
