'use client';

import React, { useEffect } from "react";
import { partnerLogin } from "@/app/api/login/route";

const InvestwellCustomer = () => {   

    return(
        <div className='container mx-auto mt-2' style={{width: '95%'}}>
            <iframe class="w-full h-[calc(100vh-150px)]" frameborder="0" allowfullscreen src="https://analytics.zoho.in/open-view/333577000000076549/e9c7aaff7539454f6c4583cd11c74c4f"></iframe>
        </div>
    )
}

export default InvestwellCustomer;
