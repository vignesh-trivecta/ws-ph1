"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { Spinner } from "flowbite-react";
import { clientConfirmsBasket, postAxisOrders } from "@/app/api/client/route";
import { HiCheck } from "react-icons/hi";
import { clientLogin } from "@/app/api/login/route";
import { segreagatorWoComma } from "@/utils/formatter/segregatorWoComma";

const PlaceOrder = () => {
  
  // url search params
  const searchParams = useSearchParams();
  const ssoId = searchParams.get("ssoId");
  
  // local state
  const [status, setStatus] = useState(false); // show the spinner or order placed page
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  
  // redux
  const basketData = useSelector((state) => state.client.basketData);
  const customerId = basketData.customerId;
  const basketName = basketData.basketName;
  const customerName = basketData.customerName;

  // IIFL order placement function
  const placeIiflOrders = async () => {
    // const res = await clientLogin(customerId);
    // if (res) {
      const { status, data } = await clientConfirmsBasket(basketData);
      if(status === 200){
        setData(data);
        setStatus(true);
      }
      else {
        setError(data?.messages);
        setSpinner(false);
        setStatus(false);
      }
    // }
  }

  // AXIS order placement function using SSO ID
  const placeAxisOrders = async () => {
    const { status, data } = await postAxisOrders(
      customerId,
      ssoId,
      basketName,
      customerName,
      basketData.rows
    );
    if (status === 200) {
      setData(data);
      setStatus(true);
    }
    else {
      setError(data?.messages);
      setSpinner(false);
      setStatus(false);
    }
  };
    
  useEffect(() => {
    if (basketData.customerBroker === "AXIS") {
      placeAxisOrders();
    
    }
    else if (basketData.customerBroker === "IIFL") {
      placeIiflOrders();
    }
  }, []);

  return (
    <div className="w-auto flex justify-center h-screen overflow-y-scroll ">
      {status ? ( // show the spinner or order placed page
        // - order placed page
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2 p-4 my-12">
          <div className="flex items-center justify-center space-x-2">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <p>{data?.message}</p>
          </div>
          <div className="flex justify-between space-x-8 text-xs md:text-sm">
            <div className="flex flex-col space-y-2">
              <div className="font-semibold">Basket</div>
              <div>{data?.basketName}</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-semibold">Status</div>
              <div>{data?.basketStatus}</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-semibold">{data?.scriptStatus}</div>
              <div className="text-sm border border-green-200 h-1/2 rounded-md bg-green-200"></div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <table className="table-fixed border p-2 w-full ">
              <thead className="border-b text-xs md:text-sm bg-gray-50">
                <tr>
                  <th className="p-2">S.No</th>
                  <th className="p-2">Scripts</th>
                  <th className="p-2">Price&nbsp;&#8377;</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total&nbsp;&#8377;</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm">
                {data?.details?.map((record, index) => {
                  return (
                    <tr className="border-b hover:bg-gray-100" key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td className="p-2 break-words">
                        {record?.tradingSymbol}
                      </td>
                      <td className="text-right sm:pr-4">
                        {segreagatorWoComma(record?.price)}
                      </td>
                      <td className="text-right pr-4 sm:pr-8">
                        {record?.quantity}
                      </td>
                      <td className="text-right pr-2 sm:pr-4">
                        {segreagatorWoComma(record?.price * record?.quantity)}
                      </td>
                      <td className="text-left pl-2">
                        {record?.orderStatus}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        spinner 
        ? 
          // - spinner loading page
          <div className="flex flex-col justify-center items-center h-screen">
            <Spinner aria-label="Extra large spinner example" size="xl" />
            <p>Your request is being processed.</p>
            <p> Don't leave or close this page.</p>
          </div>
        : 
          // - order placement failed page
          <div className="flex flex-col items-center justify-center h-screen">
              <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <p className="text-lg text-center text-red-700">An error occured!</p>
              <p className="text-lg text-center text-red-700">{error}.</p>
              <p className="text-lg text-center">Please try after some time...</p>
          </div>
      )}
    </div>
  );
};

export default PlaceOrder;
