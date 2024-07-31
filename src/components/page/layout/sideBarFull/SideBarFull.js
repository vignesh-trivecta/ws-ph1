import React from "react";
import SBItem from "./SBItem";
import Collapse from "./Collapse";
import MultiCollapse from "./MultiCollapse";
import {
  HiChartPie,
  HiOutlineIdentification,
} from "react-icons/hi";
import { LiaCalendarCheckSolid, LiaSitemapSolid } from "react-icons/lia";
import {
  AiFillSetting,
  AiOutlineStock,
} from "react-icons/ai";
import {
  BsArrowLeftRight,
  BsCashStack,
} from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

import { LuMessageCircle } from "react-icons/lu";
import { IoPeopleCircleOutline } from "react-icons/io5";
import {
  MdOutlineDocumentScanner,
  MdOutlineMedicalInformation,//
} from "react-icons/md";
import useTheme from "@/utils/hooks/useTheme";
import { useSelector } from "react-redux";

/**
 *
 * @description creates a Sidebar component
 */

const SideBarFull = () => {
  
  const {bgColorClass} = useTheme();
  const themeColor = useSelector((state) => state.event.themeColor);

  return (
    <div className={`w-56 ${bgColorClass} text-white z-50`}>
      <ul className={`p-4 space-y-4 overflow-y-auto h-[90vh] border-r-2`}>
        <SBItem
          title={"dashboard"}
          Icon={HiChartPie}
          unChanged={false}
          nav={"/admin/dashboard"}
        />
        {/* <Collapse
          title={"Equity"}
          TitleIcon={BsCashStack}
          unChanged={false}
          items={[
            { name: "basket"},
            { name: "map" },
          ]}
          nav={""}
        /> */}
        <MultiCollapse
          title={"equity"}
          Icon={AiOutlineStock}
          unChanged={false}
          items={{
            'Baskets': {
              item: [
                { name: "create" },
                { name: "view" },
              ],
              isCollapsible: true,
            },
            map: {
              item: [
                { name: "customer mapping" },
                { name: "basket mapping" },
              ],
              isCollapsible: true,
              icon: LiaSitemapSolid,
            },
          }}
        />
        <MultiCollapse
          title={"mutual fund"}
          Icon={AiOutlineStock}
          unChanged={false}
          items={{
            'MF Baskets': {
              item: [
                // { name: "nrew purchase" },
              ],
              isCollapsible: false,
            },
            transactions: {
              item: [
                { name: "new purchase" },
                { name: "additional purchase" },
                { name: "switch order" },
                { name: "redeem order" },
              ],
              isCollapsible: true,
              icon: LiaSitemapSolid,
            },
          }}
        />
        {/* <Collapse
          title={"mutual fund"}
          TitleIcon={AiOutlineStock}
          unChanged={false}
          items={[
            { name: "new", icon: BiCartAdd },
            { name: "baskets", icon: BsFillBasket3Fill },
          ]}
          nav={""}
        /> */}
        <Collapse
          title={"reports"}
          unChanged={false}
          TitleIcon={TbReportAnalytics}
          items={[
            { name: "equity", icon: BsCashStack },
            { name: "mutual funds", icon: AiOutlineStock },
          ]}
        />
        <SBItem
          title={"communication"}
          Icon={LuMessageCircle}
          unChanged={false}
          nav={"/admin/communication"}
        />
        <SBItem
          title={"BOD-EOD"}
          Icon={LiaCalendarCheckSolid}
          unChanged={true}
          nav={"/admin/bod-eod"}
        />
        <Collapse
          title={"others"}
          TitleIcon={AiFillSetting}
          unChanged={true}
          items={[
            { name: "eCAN registration", icon: HiOutlineIdentification },
            { name: "PayEezz registration", icon: BsArrowLeftRight },
            { name: "PayEezz status", icon: MdOutlineMedicalInformation },
            { name: "KYC", icon: MdOutlineDocumentScanner },
            { name: "Customers", icon: IoPeopleCircleOutline },
          ]}
        />
      </ul>
    </div>
  );
};

export default SideBarFull;
