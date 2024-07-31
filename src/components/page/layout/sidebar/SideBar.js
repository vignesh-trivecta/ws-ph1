import React from "react";
import SBItem from "./SBItem";
import Collapse from "./Collapse";
import MultiCollapse from "./MultiCollapse";
import { HiChartPie, HiPencilAlt, HiShoppingBag } from "react-icons/hi";
import { LiaCalendarCheckSolid, LiaSitemapSolid } from "react-icons/lia";
import {
  AiFillSetting,
  AiOutlineStock,
  AiOutlineFolderView,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsCashStack, BsFillBasket3Fill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { BiCartAdd } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { LuMessageCircle } from "react-icons/lu";

/**
 * 
 * @description creates a Sidebar component
 */

const SideBar = () => {
  return (
    <div className="w-60 h-[90vh] overflow-y-scroll">
      <ul className="p-4 space-y-4 h-[100vh]">
        <SBItem
          title={"dashboard"}
          Icon={HiChartPie}
          nav={"/admin/dashboard"}
        />
        <MultiCollapse
          title={"equity"}
          Icon={BsCashStack}
          items={{
            basket: {
              item: [
                { name: "create", icon: HiPencilAlt },
                { name: "view", icon: AiOutlineFolderView },
              ],
              icon: HiShoppingBag,
            },
            map: {
              item: [
                { name: "customer mapping", icon: AiOutlineUserAdd },
                { name: "basket mapping", icon: SlBasket },
              ],
              icon: LiaSitemapSolid,
            },
          }}
        />
        <Collapse
          title={"mutual fund"}
          TitleIcon={AiOutlineStock}
          items={[
            { name: "new", icon: BiCartAdd },
            { name: "baskets", icon: BsFillBasket3Fill },
          ]}
          nav={""}
        />
        <Collapse
          title={"reports"}
          TitleIcon={TbReportAnalytics}
          items={[
            { name: "equity", icon: BsCashStack },
            { name: "mutual funds", icon: AiOutlineStock },
          ]}
        />
        <SBItem
          title={"communication"}
          Icon={LuMessageCircle}
          nav={"/admin/communication"}
        />
        <SBItem
          title={"bod-eod"}
          Icon={LiaCalendarCheckSolid}
          nav={"/admin/bod-eod"}
        />
        <SBItem 
          title={"others"} 
          Icon={AiFillSetting} 
          nav={"/admin/others"} 
        />
      </ul>
    </div>
  );
};

export default SideBar;
