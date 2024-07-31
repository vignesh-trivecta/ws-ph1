import React from "react";
import { Button, Modal } from "flowbite-react";

const SaveMFRecordModal = ({ openModal, setOpenModal }) => {
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
                    Model Basket
                  </label>
                  <select className="w-44 border border-gray-200 rounded-md text-sm">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Choose Basket Validity</label>
                  <select className="w-44 border border-gray-200 rounded-md text-sm">
                    <option>1 day</option>
                    <option>2 days</option>
                    <option>3 days</option>
                    <option>10 days</option>
                  </select>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex justify-center space-x-2">
              <Button>Save</Button>
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

export default SaveMFRecordModal;
