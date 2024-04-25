"use client"

import { modifyOrder } from "@/app/api/reports/route";
import { setNewBasketName, setUpdatedPrice } from "@/store/modifyOrderSlice";
import { setMessage, setStatus } from "@/store/reportSlice";
import { Button, Label, Modal, TextInput, Tooltip } from "flowbite-react";
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
    const newBasketName = useSelector((state) => state.modifyOrder.newBasketName);

    const dispatch = useDispatch();

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
            <div className="space-y-4">
                <p><span className="font-bold underline">Order ID:</span> {orderId}</p>
                <div className="flex gap-4">
                    <div>
                        <Label className="font-semibold">Script:</Label>
                        <Tooltip content={script}>
                            <TextInput 
                                value={script}
                                className="font-bold"
                                disabled
                                />
                        </Tooltip>
                    </div>
                    <div>
                        <Label className="font-semibold">Exchange:</Label>
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
                            className="font-bold"
                            disabled
                            />
                    </div>
                    <div>
                        <Label className="font-semibold">Old Price:</Label>
                        <TextInput 
                            value={price}
                            className="font-bold"
                            disabled
                        />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <Label className="font-semibold">New Basket Name:</Label>
                        <input 
                            onChange={(e) => {
                                dispatch(setNewBasketName(e.target.value));
                            }}
                            className="w-44 h-10 border border-gray-300 rounded-lg focus:outline-blue-700 p-2"
                            maxLength={20}
                            autoFocus
                        /> 
                        <p>{''}</p>
                    </div>
                    <div> 
                        <Label className="font-semibold">New Price:</Label>
                        <input 
                            type="number"
                            onChange={(e) => {dispatch(setUpdatedPrice(e.target.value))}}
                            className="w-44 h-10 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button 
                        onClick={async () => {
                            const response = await modifyOrder(customerId, broker, orderId, exchangeOrderId, exchange, transType, script, updatedPrice, newBasketName);
                            onCloseModal();
                            dispatch(setMessage(response?.data?.messages));
                            dispatch(setStatus(response?.status !== 200 ? false: true));
                            dispatch(setNewBasketName(""));
                            dispatch(setUpdatedPrice(null));
                        }}
                        >Modify & Send</Button>
                    <Button color='gray' onClick={() => {
                        onCloseModal();
                        dispatch(setNewBasketName(""));
                        dispatch(setUpdatedPrice(null));
                    }}>Cancel</Button>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
