"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { titleSplitter } from "@/utils/titleSplitter";
import { capitalize } from "@/utils/capitalize";
import { IoIosArrowDown } from "react-icons/io";
import { pathSplitter } from "@/utils/pathSplitter";
import useTheme from "@/utils/hooks/useTheme";
import itemSplitter from "@/utils/itemSplitter";

/**
 *
 * @prop {string} title
 * @prop {Icon} TitleIcon
 * @prop {array} items
 * @prop {string} nav
 * @description creates a collapsable menu of items
 */

const Collapse = ({
  title,
  TitleIcon,
  unChanged,
  items,
  nav,
  isCollapsible = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const arr = pathSplitter(path);
  const { hoverClass, textColorClass } = useTheme();
  const currentTitlePageChecker = arr[arr.length - 1].toLowerCase() ===
  itemSplitter(title).toLowerCase();

  return (
    <li onClick={() => setIsVisible(!isVisible)} className="">
      {/** Title */}
      <div
        className={`flex justify-between items-center space-x-2 hover:cursor-pointer ${isCollapsible ? "hover:bg-white p-1": currentTitlePageChecker ? `hover:bg-none` : `hover:bg-white p-1`} ${hoverClass} rounded-md`}
      >
        <div className="flex items-center space-x-2 w-full">
          {TitleIcon && <TitleIcon />}
          {/* 2 conditions of rendering collapsible menu titles */}
          {/* if isCollapsible is TRUE */}
          {isCollapsible && (
            <div className="text-sm w-full">{capitalize(title)}</div>
          )}
          {/* if isCollapsible is FALSE */}
          {!isCollapsible && (
            <div
            onClick={() => {
              router.push(
                `/admin/${titleSplitter(nav) + "/"}${titleSplitter(title)}`
              );
            }}
            className={`text-sm rounded-md w-full ${
              currentTitlePageChecker
              ? `bg-white ${textColorClass} p-1`
              : "bg-none"
            }`}
            >
              {capitalize(title)}
            </div>
          )}
        </div>
        {/* collpasible menu with arrow icon */}
        {isCollapsible && (
          <IoIosArrowDown
            className={`${
              isVisible
                ? "rotate-180 transition-all duration-300"
                : "rotate-0 transition-all duration-300"
            }`}
          />
        )}
      </div>
      {/** collapsible list items - if isCollapsible is true */}
      {isCollapsible && (
        <ul
          className={`ml-2 mt-1 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 ${
            isVisible ? " block rounded-md p-1" : "border-none"
          }`}
        >
          {items.map((item, index) => {
            // const ItemIcon = item.icon;
            const currItem = itemSplitter(item.name);
            const bgHighlight =
              arr[arr.length - 1].toLowerCase() == currItem?.toLowerCase();
            {
              /** li item */
            }
            return (
              <li
                className={`mt-1 hover:cursor-pointer hover:bg-white ${hoverClass} p-1 rounded-md ${
                  isVisible ? "block" : "hidden"
                } ${bgHighlight ? `bg-white ${textColorClass}` : "bg-none"}`}
                onClick={(e) => {
                  router.push(
                    `/admin/${nav ? titleSplitter(nav) : "/"}${titleSplitter(
                      title
                    )}/${titleSplitter(item.name)}`
                  );
                  e.stopPropagation();
                }}
                key={index}
              >
                <span className="text-sm ml-3">
                  {unChanged ? item.name : capitalize(item.name)}
                </span>
                {/* <div className="flex items-center space-x-2 hover:cursor-pointer">
                <ItemIcon />
              </div> */}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Collapse;
