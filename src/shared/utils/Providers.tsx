"use client";

import {NextUIProvider} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({children}: ProviderProps) {
    const pathname = usePathname();

    return (
        <NextUIProvider>
            {pathname !== "/dashboard/new-email" && pathname !== "/" && pathname !== "sign-up" && pathname !== "subscribe" && pathname !== "sign-in" ? (
                <div className="w-full flex">

                </div>
            ): (
                <>{children}</>
            )}
        </NextUIProvider>
    )
}