import React from "react";
import { capitalize } from "@/utils/capitalize";
import { pathSplitter } from "@/utils/pathSplitter";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import useTheme from "@/utils/hooks/useTheme";

/**
 *
 * @prop {string} title
 * @prop {Icon} Icon
 * @prop {string} nav
 * @description creates a single block item for sidebar
 */

const SBItem = ({ title, Icon, unChanged, nav }) => {
  const router = useRouter();
  const path = usePathname();
  const arr = pathSplitter(path);
  const bgHighlight = arr.includes(title);
  const { hoverClass, textColorClass, bgColorClass } = useTheme();

  {
    /** li item */
  }
  return (
    <li
      className={`flex items-center space-x-2 hover:cursor-pointer hover:bg-white ${hoverClass} p-1 rounded-md ${
        bgHighlight ? `bg-white ${textColorClass}` : "bg-none"
      }`}
      onClick={() => router.push(nav)}
    >
      <Icon />
      <span className="text-sm">{unChanged ? title : capitalize(title)}</span>
    </li>
  );
};

export default SBItem;
