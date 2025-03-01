"use client";

import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import stringFormatter from "@/utils/formatter/stringFormatter";
import TableShimmer from "@/components/page/layout/tableShimmer";
import ModifyOrder from "../crud/modifyOrder";
import { useDispatch } from "react-redux";
import { setExchange, setExchangeOrderId, setLimitPrice, setOpenModal, setOrderId, setOrderType, setPrice, setQuantity, setScript, setTransType } from "@/store/modifyOrderSlice";
import { segreagatorWoComma } from "@/utils/formatter/segregatorWoComma";

const OrderBookTable = ({ datas, tooltipData, shimmerLoading }) => {

  const dispatch = useDispatch();

  function onCloseModal() {
    dispatch(setOpenModal(false));
  }

  const renderTooltipContent = (index) => {
    return `Exchange Order Id: ${
      tooltipData && tooltipData[index]?.exchangeOrderId
    } <br /> Exchange Type: ${
      tooltipData && tooltipData[index]?.exchangeType
    }`;
  };

  console.log(datas)

  return (
    <div className="mt-4">
      <ModifyOrder
        onCloseModal={onCloseModal}
      />
      {shimmerLoading ? (
        <TableShimmer datas={datas} /> // Render your shimmer loading UI here
      ) : datas && datas?.length !== 0 ? (
        <div className="overflow-y-scroll border h-[calc(100vh-300px)]">
          <Table className="">
            <Thead className="bg-gray-50">
              <Tr 
              className=""
              >
                <Th className="p-2 font-medium text-sm">
                    S. No
                </Th>
                <Th className="p-2 font-medium text-sm">
                Remote Order ID
                </Th>
                <Th className="text-left p-2 font-medium text-sm">
                Exchange
                </Th>
                <Th className="p-2 font-medium text-sm">
                Buy/ Sell
                </Th>
                <Th className="p-2 font-medium text-sm">
                Exchange Order Time
                </Th>
                <Th className="pr-12 font-medium text-sm">
                Scripts
                </Th>
                <Th className="pr-12 font-medium text-sm">
                Quantity
                </Th>
                <Th className="pr-12 font-medium text-sm">
                Rate ₹
                </Th>
                <Th className="pr-12 font-medium text-sm">
                Order Status
                </Th>
                <Th className="pr-12 font-medium text-sm">
                Market/ Limit
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {datas &&
                datas?.map((data, index) => (
                  <Tr
                    className="border hover:bg-gray-100"
                    key={index}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-html={renderTooltipContent(index)}
                  > 
                    <Td className="text-center text-sm">
                        {index + 1}
                    </Td>
                    <Td className="p-2 pl-4 text-sm text-left ">
                        {
                          (data?.orderStatus?.toLowerCase() == "pending" || data?.orderStatus?.toLowerCase() == "rejected")
                          ? <button 
                              onClick={() => {
                                dispatch(setOrderId(data.remoteOrderId));
                                dispatch(setExchangeOrderId(data.exchangeOrderId));
                                dispatch(setExchange(data.exchange));
                                dispatch(setScript(data.scripName));
                                dispatch(setQuantity(data.quantity));
                                dispatch(setPrice(data.rate));
                                dispatch(setLimitPrice(data.rate));
                                dispatch(setOrderType(data.atMarket));
                                dispatch(setTransType(data.buyorsell));
                                dispatch(setOpenModal(true));
                              }} 
                              className="underline text-red-500"
                            >
                            {data.remoteOrderId}
                            </button> 
                          : data.remoteOrderId
                        }
                    </Td>
                    <Td className="pl-4 text-sm">
                        {data.exchange}
                    </Td>
                    <Td className="text-right pr-4 text-sm">
                        {data.buyorsell}
                    </Td>
                    <Td className="text-right pr-10 text-sm">
                        {stringFormatter(data.exchangeOrderTime)}
                    </Td>
                    <Td className="text-sm">
                        {data.scripName}
                    </Td>
                    <Td className="text-sm text-right pr-16">
                        {data.quantity}
                    </Td>
                    <Td className="text-sm text-right pr-14">
                        {segreagatorWoComma(data.rate)}
                    </Td>
                    <Td className="text-sm">
                        {data.orderStatus}
                    </Td>
                    <Td className="text-sm text-left pl-8">
                        {data.atMarket}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </div>
      ) : (
        <div className="mt-8">No data available!</div>
      )}
      <ReactTooltip id="my-tooltip" />
    </div>
  );
};

export default OrderBookTable;
