// import { PieChart } from "@/components/admin/piechart";
import React from "react";
import Pie from "@/../public/pie.jpeg";
import Pie2 from "@/../public/pie2.png";
import Bar from "@/../public/bar.jpeg";
import Line from "@/../public/line.png";
import Image from "next/image";

export const metadata = {
    title: 'Wealth Spring | Dashboard',
}

const DashCards = () => {
    return(
        <div className='container mx-auto mt-4' style={{width: '95%'}}>
            <h1 className="font-bold">Dashboard</h1>
            <div className="flex justify-center gap-4">
                <div className="border border-gray-50 mb-4">
                    <Image src={Line} width={500} />
                </div>
                <div className="border border-gray-50 mb-4">
                    <Image src={Pie2} width={500} />
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <div className="border border-gray-50">
                    <h1 className="text-center underline">Basket Types</h1>
                    <Image src={Pie} width={500} />
                </div>
                <div className="border border-gray-50">
                    <h1 className="text-center underline">Basket Total Value</h1>
                    <Image src={Bar} width={500}  />
                </div>
            </div>
            {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-20">
                <div className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-xl leading-none font-bold text-gray-900">2,340</span>
                            <h3 className="text-base font-normal text-gray-500">Transactions</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white  border border-gray-300 rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-xl leading-none font-bold text-gray-900">55</span>
                            <h3 className="text-base font-normal text-gray-500 break-words">Baskets executed</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white  border border-gray-300 rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-xl leading-none font-bold text-gray-900">50,00,000</span>
                            <h3 className="text-base font-normal text-gray-500">Value of orders</h3>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div>
                <PieChart />
            </div> */}
        </div>
    )
}

export default DashCards;