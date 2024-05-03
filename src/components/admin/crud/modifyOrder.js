"use client"

import { getRandomBasketName, modifyOrder } from "@/app/api/reports/route";
import { setNewBasketName, setUpdatedPrice, setUpdatedQuantity } from "@/store/modifyOrderSlice";
import { setMessage, setStatus } from "@/store/reportSlice";
import { segregate } from "@/utils/formatter/priceSegregator";
import { segreagatorWoComma } from "@/utils/formatter/segregatorWoComma";
import axios from "axios";
import { Button, Label, Modal, TextInput, Tooltip } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModifyOrder({onCloseModal}) {

    const customerId = useSelector((state) => state.report.customerId);
    const broker = useSelector((state) => state.report.broker);

    const openModal = useSelector((state) => state.modifyOrder.openModal);
    const orderId = useSelector((state) => state.modifyOrder.orderId);
    const exchangeOrderId = useSelector((state) => state.modifyOrder.exchangeOrderId);
    const exchange = useSelector((state) => state.modifyOrder.exchange);
    const transType = useSelector((state) => state.modifyOrder.transType); // buy or sell
    const script = useSelector((state) => state.modifyOrder.script);
    const quantity = useSelector((state) => state.modifyOrder.quantity);
    const price = useSelector((state) => state.modifyOrder.price);
    const updatedPrice = useSelector((state) => state.modifyOrder.updatedPrice);
    const updatedQuantity = useSelector((state) => state.modifyOrder.updatedQuantity);
    const newBasketName = useSelector((state) => state.modifyOrder.newBasketName);

    const dispatch = useDispatch();

    // loading state
    const [isLoading, setIsLoading] = useState(false);

    // fetch random basket name
    const fetchBasketName = async() => {
        const {status, data} = await getRandomBasketName();
        console.log(status, data);
        // dispatch(setNewBasketName(data))
    }

    useEffect(() => {
        
    }, [orderId])

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
            <div className="space-y-4">
                <p><span className="font-bold underline">Order ID:</span> {orderId}</p>
                <p><span className="font-bold underline">New basket name:</span> {orderId}</p>
                <div className="flex gap-4">
                    <div>
                        <Label className="font-semibold">Script:</Label>
                        <Tooltip content={script}>
                            <TextInput 
                                value={script}
                                className="font-bold w-24"
                                disabled
                                />
                        </Tooltip>
                    </div>
                    <div>
                        <Label className="font-semibold">Exch:</Label>
                        <TextInput 
                            value={exchange}
                            className="font-bold"
                            disabled
                            />
                    </div>
                    <div>
                        <Label className="font-semibold">Buy/ Sell:</Label>
                        <TextInput 
                            value={transType}
                            className="font-bold w-16"
                            disabled
                            />
                    </div>
                    <div>
                        <Label className="font-semibold">Old Price:</Label>
                        <TextInput 
                            value={segreagatorWoComma(price)}
                            className="font-bold"
                            disabled
                        />
                    </div>
                    <div>
                        <Label className="font-semibold">Qty:</Label>
                        <TextInput 
                            value={segregate(quantity)}
                            className="font-bold"
                            disabled
                        />
                    </div>
                </div>
                <div className="flex gap-3">
                    {/* <div>
                        <Label className="font-semibold">New Basket Name:</Label>
                        <input 
                            onChange={(e) => {
                                dispatch(setNewBasketName(e.target.value));
                            }}
                            className="w-40 h-10 border text-sm border-gray-300 rounded-lg focus:outline-blue-700 p-2"
                            maxLength={20}
                            autoFocus
                        /> 
                        <p>{''}</p>
                    </div> */}
                    <div className="flex flex-col"> 
                        <Label className="font-semibold">New Price:</Label>
                        <input 
                            type="number"
                            onChange={(e) => {dispatch(setUpdatedPrice(e.target.value))}}
                            className=" h-10 border text-sm border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col"> 
                        <Label className="font-semibold">Quantity:</Label>
                        <input 
                            type="number"
                            onChange={(e) => {dispatch(setUpdatedQuantity(e.target.value))}}
                            className="w-44 h-10 border text-sm border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button 
                        onClick={async () => {
                            setIsLoading(true);
                            const {status, data} = await modifyOrder(customerId, broker, orderId, exchangeOrderId, exchange, transType, script, updatedPrice, updatedQuantity, newBasketName);
                            onCloseModal();
                            setIsLoading(false);
                            dispatch(setMessage(data?.messages));
                            dispatch(setStatus(status !== 200 ? false: true));
                            dispatch(setNewBasketName(""));
                            dispatch(setUpdatedPrice(null));
                            dispatch(setUpdatedQuantity(null));
                        }}
                        isProcessing={isLoading}
                        disabled={isLoading}
                        >Modify & Send</Button>
                    <Button color='gray' 
                        onClick={() => {
                            onCloseModal();
                            dispatch(setNewBasketName(""));
                            dispatch(setUpdatedPrice(null));
                            dispatch(setUpdatedQuantity(null));
                        }}
                        disabled={isLoading}
                    >Cancel</Button>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
