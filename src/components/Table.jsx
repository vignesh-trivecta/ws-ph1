import { segreagatorWoComma } from "@/utils/formatter/segregatorWoComma";
import React from "react";

const Table = ({ columnData, rowData, tableClass, headTrClass, thClass, rowTrClass, tdClass, customColumn, numModify, trClick }) => {
  return (
    <table className={`${tableClass} table-fixed w-full`}>
      <thead className="border-b top-0 bg-gray-50">
        <tr className="">
          {columnData?.map((item, index) => (
            <th key={index} className={`${thClass} border-r`}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData?.map((row, index) => {
          const tableData = Object.values(row);
          return (
            <tr key={index} onClick={trClick} className={`${rowTrClass}`}>
                <td className="border-b text-center w-4">{index + 1}</td>
                {tableData?.map((item, itemIndex) => (
                    <td key={itemIndex} className={`${tdClass} ${typeof item == 'string' ? "text-left" : "text-right"}`}>
                      {typeof item === 'string' ? item : (numModify === true ? segreagatorWoComma(item) : item)}
                    </td>
                ))}
                {customColumn}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
