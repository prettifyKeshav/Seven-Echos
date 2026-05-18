"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const HeaderFixed = createContext();

export const HeaderFixedProvider = ({ children }) => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false)
    const [isWhiteHeader, setIsWhiteHeader] = useState(false);

    const pathName = usePathname();

    useEffect(() => {
        setIsHeaderFixed(false);
        setIsWhiteHeader(false);
    }, [pathName])

    return (
        <HeaderFixed.Provider value={{ isHeaderFixed, setIsHeaderFixed, isWhiteHeader, setIsWhiteHeader }}>
            {children}
        </HeaderFixed.Provider>
    );
};

export const useHeaderFixed = () => useContext(HeaderFixed);