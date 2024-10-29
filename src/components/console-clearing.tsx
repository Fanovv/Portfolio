"use client";

import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import { useEffect } from "react";

const ConsoleClear = () => {
    const {isDevToolsOpen} = useDevToolsOpen();
    useEffect(() => {
        if(!isDevToolsOpen) return;
        if(typeof console !== "undefined"){
            console.clear();
            console.log(
                "%cNothing to see here, mate! 👽🤖",
                "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px"
            )
        }
    },[isDevToolsOpen]);
    return (
        <></>
    );
}

export default ConsoleClear;