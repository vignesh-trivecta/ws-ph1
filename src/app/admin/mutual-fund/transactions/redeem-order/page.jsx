"use client"

import CANCustomer from '@/components/CANCustomer'
import MapWeblink from '@/components/MapWeblink'
import { setOpenModal } from '@/store/redeemOrderSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const RedeemOrder = () => {

  const openModal = useSelector((state) => state.redeemOrder.openModal);

  return (
    <div className="container mx-auto px-8">
      <h1 className="font-bold">Redeem Order</h1>
      <div className="my-4 space-y-4">        
        <CANCustomer 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
        />
        <CustomTable 
        />
        <MapWeblink />
      </div>
    </div>
  )
}

export const CustomTable = () => {
  const columnData = ['','Holdings', 'Balance Units', 'Purchase NAV', 'Current NAV', 'Purchase Value', 'Current Value', 'Gain', 'Holding Days', 'Transaction Units', 'Transaction Amount', 'All Units', '']
  const rowData = [
    {
      '': `<button type='checkbox'></button>`,
      holdings: "Scheme1",
      units: 1234.6,
      purchaseNav: 25.67,
      currentNav: 34.56,
      purchaseVal: 50000,
      currentVal: 67000,
      gain: 17000,
      holdingDays: 67,
      txUnits: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>U</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      txAmnt: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>A</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      allUnits: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>All</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      ip: `<input type='text' style='width: 5rem; border: 0.5px solid gray; border-radius: 0.375rem' />`
    },
    {
      '': `<button type='checkbox'></button>`,
      holdings: "Scheme1",
      units: 1234.6,
      purchaseNav: 25.67,
      currentNav: 34.56,
      purchaseVal: 50000,
      currentVal: 67000,
      gain: 17000,
      holdingDays: 67,
      txUnits: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>U</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      txAmnt: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>A</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      allUnits: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>All</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      ip: `<input type='text' style='width: 5rem; border: 0.5px solid gray; border-radius: 0.375rem' />`
    },
    {
      '': `<button type='checkbox'></button>`,
      holdings: "Scheme1",
      units: 1234.6,
      purchaseNav: 25.67,
      currentNav: 34.56,
      purchaseVal: 50000,
      currentVal: 67000,
      gain: 17000,
      holdingDays: 67,
      txUnits: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>U</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      txAmnt: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>A</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      allUnits: `<div style='display: flex; align-items: center;justify-content: space-center; '><label style='margin-left: 1.5em'>All</label><button type='radio' style='margin-left: 0.5em'></button></div>`,
      ip: `<input type='text' style='width: 5rem; border: 0.5px solid gray; border-radius: 0.375rem' />`
    },

  ]
  return (
    <div className='h-[calc(80vh-280px)] overflow-auto'>
      <table className='border'>
        <thead>
          <tr className=''>
            {
              columnData.map((item, index) => <th className='font-semibold text-sm p-1 border' key={index}>{item}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            rowData.map((item, index) => {
              return <tr key={index}>
                {Object.keys(item).map((key, index) => (
                  <td key={index} className='p-1 border text-sm' dangerouslySetInnerHTML={{ __html: item[key] }} />
                ))}
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default RedeemOrder