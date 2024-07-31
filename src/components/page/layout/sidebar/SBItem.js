import React from "react";
import { capitalize } from "@/utils/capitalize";
import { pathSplitter } from "@/utils/pathSplitter";
import { usePathname, useRouter } from "next/navigation";

/**
 * 
 * @prop {string} title
 * @prop {Icon} Icon
 * @prop {string} nav
 * @description creates a single block item for sidebar
 */

const SBItem = ({ title, Icon, nav }) => {
  const router = useRouter();
  const path = usePathname();
  const arr = pathSplitter(path);
  const bgHighlight = arr.includes(title);
  {/** li item */}
  return (
    <li
      className={`flex items-center space-x-2 hover:cursor-pointer hover:bg-gray-200 p-1 rounded-md ${
        bgHighlight ? "bg-gray-200" : "bg-none"
      }`}
      onClick={() => router.push(nav)}
    >
      <Icon />
      <span className="text-md">{capitalize(title)}</span>
    </li>
  );
};

export default SBItem;
