import React from 'react'
import LabelInput from './LabelInput'
import CANSearchModal from './Modals/CANSearchModal'
import Button from './Button'
import { useDispatch } from 'react-redux'

const CANCustomer = ({openModal, setOpenModal}) => {

  const dispatch = useDispatch();
  
  return (
    <div>
        <div className="border p-2 py-4 rounded-md space-y-4">
          <Button
            btnTitle={"CAN Search"}
            btnClass={
              "border border-gray-300 bg-cyan-700 hover:bg-cyan-600 p-1 text-white text-sm rounded-md"
            }
            btnOnClick={() => dispatch(setOpenModal(true))}
          />
          {openModal && (
            <CANSearchModal
              openModal={openModal}
              setOpenModal={() => dispatch(setOpenModal())}
            />
          )}
          <div className="flex justify-around">
            <LabelInput
              compClass={"flex items-center space-x-4 text-sm"}
              labelTitle={"Name"}
              ipClassName={"w-44 border border-gray-300 rounded-md p-1"}
              ipDisabled={true}
            />
            <LabelInput
              compClass={"flex items-center space-x-4 text-sm"}
              labelTitle={"CAN Number"}
              ipClassName={"w-44 border border-gray-300 rounded-md p-1"}
              ipDisabled={true}
            />
            <LabelInput
              compClass={"flex items-center space-x-4 text-sm"}
              labelTitle={"CAN Staus"}
              ipClassName={"w-44 border border-gray-300 rounded-md p-1"}
              ipDisabled={true}
            />
          </div>
        </div>
    </div>
  )
}

export default CANCustomer