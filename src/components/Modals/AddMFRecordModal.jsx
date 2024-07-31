import React from "react";
import { Button, Label, Modal, TextInput, Tooltip } from "flowbite-react";

const AddMFRecordModal = ({ openModal, setOpenModal }) => {
  return (
    <div>
      <Modal
        show={openModal}
        size={"md"}
        popup
        onClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <div>
            <p className="font-medium">Enter details of Purchase Order</p>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <label className="text-sm font-medium">
                    Scheme Master Data
                  </label>
                  <select className="w-44 border border-gray-200 rounded-md text-sm">
                    <option>Aditya Birla Banking</option>
                    <option>PSU Debt Fund</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Dividend option</label>
                  <select className="w-44 border border-gray-200 rounded-md text-sm">
                    <option>Reinvest</option>
                    <option>Payout</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Weightage %</label>
                  <input
                    type="text"
                    className="border border-gray-200 rounded-lg w-24 md:w-44 text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">
                    Transaction Amount
                  </label>
                  <input
                    type="text"
                    className="border border-gray-200 rounded-lg w-24 md:w-44 text-sm"
                  />
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex justify-center space-x-2">
              <Button>Add</Button>
              <Button
                color="gray"
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddMFRecordModal;
