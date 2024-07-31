import useTheme from "@/utils/hooks/useTheme";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillSetting, AiOutlineStock } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { HiChartPie } from "react-icons/hi";
import { LiaCalendarCheckSolid } from "react-icons/lia";
import { LuMessageCircle } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";

const SideBarIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { bgColorClass } = useTheme();
  const iconsList = [
    HiChartPie,
    AiOutlineStock,
    AiOutlineStock,
    LuMessageCircle,
    LiaCalendarCheckSolid,
    AiFillSetting,
  ];

  const itemList = [
    {title: "Dashboard", Icon: HiChartPie}, 
    {title: "Equity", Icon: BsCashStack, subItems: ['Basket', 'Map']},
    {title: "Mutual Fund", Icon: HiChartPie}, 
    {title: "Reports", Icon: AiOutlineStock}, 
    {title: "Communication", Icon: LuMessageCircle}, 
    {title: "BOD-EOD", Icon: LiaCalendarCheckSolid},
    {title: "Others", Icon: AiFillSetting}
  ];

  return (
    <div className="h-full">
      <ul className={`flex flex-col space-y-3 ${bgColorClass} h-[90vh] p-2`}>
        {itemList.map((item, index) => {
          const ItemIcon = item.Icon;
          return (
            <li key={index} className="text-white hover:cursor-pointer relative group" onClick={() => setIsVisible(!isVisible)}>
              <div className={`${isVisible ? 'block' : 'hidden'}`}>
                <ul>
                  {item?.subItems?.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
              <p className={`hidden group-hover:block ${bgColorClass} text-xs border rounded-md p-1 w-auto absolute left-10 `}>{item.title}</p>
              <IconContext.Provider
                value={{
                  color: "white",
                  style: { width: "30px", height: "30px" },
                }}
              >
                <ItemIcon />
              </IconContext.Provider>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default SideBarIcons;
