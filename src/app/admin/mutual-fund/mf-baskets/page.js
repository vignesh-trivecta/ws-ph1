"use client";

import Table from "@/components/Table";
import { MdOutlineRemoveRedEye, MdEditDocument } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import { IconContext } from "react-icons";

const MFCreateBaskets = () => {
  const router = useRouter();
  const columnData = [
    "S. No",
    "Basket Name",
    "Basket Category",
    "No of Schemes",
    "Basket Value",
    "Created By",
    "Created On",
    "Actions",
  ];
  const rowData = [
    {
      basketName: "Top 100",
      basketCategory: "growth",
      noOfSchemes: 3,
      basketValue: 343223,
      createdBy: "Admin12",
      createdOn: new Date().toISOString().slice(0, 10),
    },
    {
      basketName: "Top 200",
      basketCategory: "growth",
      noOfSchemes: 4,
      basketValue: 1456898,
      createdBy: "Admin13",
      createdOn: new Date().toISOString().slice(0, 10),
    },
    {
      basketName: "Top 300",
      basketCategory: "growth",
      noOfSchemes: 5,
      basketValue: 235876,
      createdBy: "Admin15",
      createdOn: new Date().toISOString().slice(0, 10),
    },
  ];
  const headTrClass = "";
  const thClass = "font-medium text-sm p-2 border-r";
  const rowTrClass = "";
  const tdClass = "text-center border p-1";
  const tableClass = "";
  const customColumn = (
    <td className="border-b pl-4 space-x-2">
      <button
        onClick={() => {
          console.log("View button clicked");
        }}
      >
        <MdOutlineRemoveRedEye />
      </button>
      <button>
        <MdEditDocument />
      </button>
      <button>
        <RiDeleteBin6Line />
      </button>
    </td>
  );

  return (
    <div className="container mx-auto mt-2" style={{ width: "95%" }}>
      <h3 className="font-bold inline-flex items-center">
        Mutual Fund Baskets
        <button
          onClick={() => {
            router.push("/admin/mutual-fund/create");
          }}
          // className="ml-4"
          className="ml-4 text-sm font-normal bg-cyan-800 hover:bg-cyan-700 rounded-md p-1 text-white"
        >
          Create new basket
          {/* <IconContext.Provider value={{ color: "green", className: "w-5 h-5" }}>
            <div>
              <IoMdAddCircleOutline fill="green" />
            </div>
          </IconContext.Provider> */}
        </button>
      </h3>
      <div className="h-[calc(100vh-250px)] flex mt-11">
        <div className={"overflow-y-scroll border"}>
          <Table
            columnData={columnData}
            rowData={rowData}
            tableClass
            headTrClass
            thClass={thClass}
            rowTrClass
            tdClass={tdClass}
            customColumn={customColumn}
          />
        </div>
      </div>
    </div>
  );
};

export default MFCreateBaskets;
