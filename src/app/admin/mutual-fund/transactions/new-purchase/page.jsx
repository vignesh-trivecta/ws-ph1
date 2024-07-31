"use client";

import LabelInput from "@/components/LabelInput";
import Table from "@/components/Table";
import { setOpenModal } from "@/store/newMFPurchaseSlice";
import React from "react";
import { useSelector } from "react-redux";
import CANCustomer from "@/components/CANCustomer";
import MapWeblink from "@/components/MapWeblink";

const NewPurchase = () => {
  // const themeColor = useSelector((state) => state.event.themeColor);
  const openModal = useSelector((state) => state.newMFPurchase.openModal);

  return (
    <div className="container mx-auto px-8">
      <h1 className="font-bold">Purchase Basket</h1>
      <div className="my-4 space-y-4">
        {/* CAN search */}
        <CANCustomer openModal={openModal} setOpenModal={setOpenModal} />
        {/* Basket and its items list */}
        <div className="border border-gray-300 rounded-md p-2 space-y-4">
          <div className="flex justify-around text-sm">
            <div className="space-x-4">
              <label>Choose the basket</label>
              <select className="text-sm border border-gray-300 rounded-md">
                <option>Basket Name 1</option>
                <option>Basket Name 2</option>
                <option>Basket Name 3</option>
              </select>
            </div>
            <LabelInput
              compClass={"flex items-center space-x-4 text-sm"}
              labelTitle={"Basket Type"}
              ipPlaceHolder={"Purchase"}
              ipClassName={"w-44 border border-gray-300 rounded-md p-1"}
              ipDisabled={true}
            />
            <LabelInput
              compClass={"flex items-center space-x-4 text-sm"}
              labelTitle={"Basket Value"}
              ipPlaceHolder={"300000"}
              ipClassName={"w-44 border border-gray-300 rounded-md p-1"}
              ipDisabled={true}
            />
          </div>
          <div className={"overflow-y-scroll border h-[calc(80vh-350px)]"}>
            <Table
                rowData={[
                  {
                    name: "Aditya Birla Balanced Advantage Fund",
                    weightage: 20,
                    txAmt: 100000,
                    dividend: "Re-invest",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                  {
                    name: "HDFC Balanced Advantage Fund",
                    weightage: 30,
                    txAmt: 200000,
                    dividend: "Growth",
                  },
                ]}
                columnData={[
                  "S. No",
                  "Scheme Name",
                  "Weightage %",
                  "Transaction Amount",
                  "Dividend Option",
                ]}
                tableClass={"sticky border mb-4"}
                thClass={"font-semibold text-sm p-1"}
                tdClass={"border text-sm text-center p-1"}
            />
          </div>
        </div>
        {/* Map and Weblink */}
        <MapWeblink />
      </div>
    </div>
  );
};

export default NewPurchase;
