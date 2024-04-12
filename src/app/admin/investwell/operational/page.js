'use client';

import React, { useEffect } from "react";
import { partnerLogin } from "@/app/api/login/route";

const InvestwellCustomer = () => {   

    return(
        <div className='container mx-auto mt-2' style={{width: '95%'}}>
            <iframe class="w-full h-[calc(100vh-150px)]" frameborder="0" allowfullscreen src="https://analytics.zoho.in/open-view/333577000000122709/b14f7cf895df19a4c7a2659d3a0f6178"></iframe>
        </div>
    )
}

export default InvestwellCustomer;
