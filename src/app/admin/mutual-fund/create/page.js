"use client";

import Button from "@/components/Button";
import LabelInput from "@/components/LabelInput";
import Table from "@/components/Table";
import { setBasketName, setBasketValue, setInvestmentAmount } from "@/store/mfBasketCreateSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddMFRecordModal from "@/components/Modals/AddMFRecordModal";
import { setOpenAddModal, setOpenSaveModal } from "../../../../store/mfBasketCreateSlice";
import SaveMFRecordModal from "@/components/Modals/SaveMFRecordModal";
import Breadcrumbs from "@/components/page/breadcrumb";

const CreateMFBasket = () => {

  const dispatch = useDispatch();

  const addModal = useSelector((state) => state.mfBasketCreate.openAddModal);
  const saveModal = useSelector((state) => state.mfBasketCreate.openSaveModal);

  const columnData = ["Scheme No", "Scheme Name", "Weightage %", "Transaction Amount", "Dividend Option"];

  const ids = [
    { "Mutual Fund Baskets": "/admin/mutual-fund/mf-baskets" },
    { "New Basket Creation": "" },
  ];

  function handleOnChange(e) {
    const value = e?.target?.value;
    const id = e?.target?.id;

    if (id === 'basketName') {
      dispatch(setBasketName(value))
    } else if (id === "investmentAmount") {
      dispatch(setInvestmentAmount(value))
    } else if (id === "basketValue") {
      dispatch(setBasketValue(value))
    }
  }

  function openModal(val) {
    if (val === 'add') {
      dispatch(setOpenAddModal(!addModal));
    } else if (val === 'save') {
      dispatch(setOpenSaveModal(!saveModal));
    }
  }

  return (
    <div className="container mx-auto" style={{ width: "95%" }}>
      <div>
        <Breadcrumbs len={ids.length} ids={ids}  />
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex flex-col">
          <LabelInput
            labelTitle={"Enter Basket Name"}
            labelClass={"text-sm"}
            ipId={'basketName'}
            ipClassName={
              "border border-gray-200 rounded-lg w-24 h-10 md:w-44 text-sm p-2"
            }
            ipCallback={handleOnChange}
            />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Basket Type</label>
          <select className="border-gray-200 rounded-md text-sm h-10">
            <option>Purchase</option>
            <option>Redeem</option>
            <option>Switch</option>
          </select>
        </div>
        <div className="flex flex-col">
          <LabelInput
            labelTitle={"Investment Amount"}
            labelClass={"text-sm"}
            ipId={'investmentAmount'}
            ipClassName={
              "border border-gray-200 rounded-lg w-24 h-10 md:w-44 text-sm p-2"
            }
            ipCallback={handleOnChange}
            />
        </div>
        <div className="flex flex-col">
          <LabelInput
            labelTitle={"Basket Value"}
            labelClass={"text-sm"}
            ipId={'basketValue'}
            ipClassName={
              "border border-gray-200 rounded-lg w-24 h-10 md:w-44 text-sm p-2"
            }
            ipCallback={handleOnChange}
            />
        </div>
      </div>
      <div className="flex mt-6">
        <div className={"overflow-y-scroll border border-b h-[calc(100vh-300px)]"}>
          <Table
          columnData={columnData}
          // rowData={rowData}
          // tableClass
          // headTrClass
          thClass={'font-medium p-2 text-sm'}
          // rowTrClass
          // tdClass={tdClass}
          // customColumn={customColumn}
          />
        </div>
      </div>
      {
        addModal && <AddMFRecordModal openModal={addModal} setOpenModal={() => dispatch(setOpenAddModal())} />
      }
      {
        saveModal && <SaveMFRecordModal openModal={saveModal} setOpenModal={() => dispatch(setOpenSaveModal())} />
      }
      <div className="flex justify-center mt-4 space-x-4">
        <Button btnTitle={'Add Record'} btnClass={'rounded-md bg-cyan-800 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-700 shadow-sm'} btnOnClick={() => openModal('add')} />
        <Button btnTitle={'Save'} btnClass={'rounded-md bg-cyan-800 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-700 shadow-sm'} btnOnClick={() => openModal('save')} />
        <Button btnTitle={'Reset'} btnClass={'border border-gray-300 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-semibold shadow-sm'} />
      </div>
    </div>
  );
};

export default CreateMFBasket;
