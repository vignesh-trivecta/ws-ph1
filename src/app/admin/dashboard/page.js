'use client';

import React, { useEffect } from "react";
import { partnerLogin } from "@/app/api/login/route";

const DashCards = () => {   

    // useEffect to login the partner to IIFL whenever the admin logs in
    useEffect(() => {
        const loginPartner = async () => {
            const response = await partnerLogin();
        }
        loginPartner();
    }, []);

    return(
        <div className='container mx-auto mt-2' style={{width: '95%'}}>
            <iframe class="w-full h-[calc(100vh-150px)]" frameborder="0" allowfullscreen src="https://analytics.zoho.in/open-view/333577000000175355/50f05197c6efd369474c87ad15c3cb98"></iframe>
            {/* <iframe class="w-full h-[calc(100vh-150px)]" src="https://analytics.zoho.in/open-view/298633000000325786/bea6e30a1d1bc77ab8bfcf877648dd97" frameborder="0" allowfullscreen></iframe> */}
        </div>
    )
}

export default DashCards;
