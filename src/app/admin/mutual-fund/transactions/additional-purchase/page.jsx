"use client"

import CANCustomer from '@/components/CANCustomer'
import MapWeblink from '@/components/MapWeblink';
import { setOpenModal } from "@/store/newMFPurchaseSlice";
import React from "react";
import { useSelector } from "react-redux";

const AdditionalPurchase = () => {

  const openModal = useSelector((state) => state.newMFPurchase.openModal);

  return (
    <div className="container mx-auto px-8">
    <h1 className="font-bold">Additional Purchase</h1>
    <div className="my-4 space-y-4">        
      <CANCustomer
        openModal={openModal} 
        setOpenModal={setOpenModal} 
      />
    </div>
    <MapWeblink />
    </div>
  )
}

export default AdditionalPurchase