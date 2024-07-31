import React from 'react'
import { GoArrowSwitch } from 'react-icons/go'
import { TbMessage } from 'react-icons/tb'
import Button from './Button'

const MapWeblink = () => {
  return (
    <div>
        <div className="border border-gray-300 rounded-md p-2 flex justify-evenly font-semibold">
          <div className="flex flex-col items-center space-y-2">
            <label>Map the bakset</label>
            <GoArrowSwitch className="hover:cursor-pointer hover:bg-cyan-600 hover:text-white w-10 h-6 border rounded-md" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <label>Send Weblink</label>
            <TbMessage className="hover:cursor-pointer hover:bg-cyan-600 hover:text-white w-10 h-6 border rounded-md" />
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          {/* <Button
            btnTitle={"Submit"}
            btnClass={
              "border rounded-md p-1 bg-cyan-700 hover:bg-cyan-600 text-white"
            }
          /> */}
          <Button
            btnTitle={"Reset"}
            btnClass={
              "border rounded-md p-1 bg-cyan-700 hover:bg-cyan-600 text-white"
            }
          />
        </div>
    </div>
  )
}

export default MapWeblink