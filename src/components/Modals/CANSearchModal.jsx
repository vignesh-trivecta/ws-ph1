"use client"

import { Modal } from 'flowbite-react'
import React, { useState } from 'react'
import LabelInput from '../LabelInput'
import Button from '../Button'
import Table from '../Table'

const CANSearchModal = ({openModal, setOpenModal}) => {

    const [rowData, setRowData] = useState([]);

    const getCANDetails = async () => {
        console.log('button clicked')
    }

  return (
    <div>
        <Modal
            show={openModal}
            size={'4xl'}
            popup
            onClose={() => {
                setOpenModal(!openModal)
            }}
        >
            <Modal.Header className='ml-4'>
                CAN Search
            </Modal.Header>
            <Modal.Body>
            <div className='relative border border-gray-300 p-4 rounded-md'>
                {/* <p className={`absolute -top-3 left-2 bg-${themeColor} text-white rounded-md p-1 text-sm`}>CAN SEARCH</p> */}
                <div className='flex justify-between items-center mt-4'>
                    <LabelInput compClass={'flex flex-col text-sm'} labelTitle={'Name'} ipPlaceHolder={'Customer Name'} ipClassName={'w-44 border border-gray-300 rounded-md p-1'} />
                    <LabelInput compClass={'flex flex-col text-sm'} labelTitle={'PAN/ PEKRN'} ipPlaceHolder={'Enter PAN'} ipClassName={'w-44 border border-gray-300 rounded-md p-1'} />
                    <Button btnTitle={'Search'} btnClass={'border border-gray-300 bg-cyan-700 hover:bg-cyan-600 rounded-md text-white p-1 h-10 mt-4'} btnOnClick={() => getCANDetails()} />
                </div>
            </div>
            {/* users table */}
            <div className='mt-2'>
                <Table 
                    rowData={[{name: "Kumar Singh", can: 5234239842, status: "Approved"}, {name: "Aditya Prasad", can: 234234329, status: "Approved"}]}
                    columnData={['S.No', 'Name', 'CAN number', 'CAN status']}
                    tableClass={'border text-sm'}
                    rowTrClass={'hover:cursor-pointer hover:bg-gray-300'}
                    tdClass={'border p-1 text-center'}
                    thClass={'font-semibold'}
                    numModify={false}
                    trClick={() => console.log('clicked')}
                />
            </div>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default CANSearchModal