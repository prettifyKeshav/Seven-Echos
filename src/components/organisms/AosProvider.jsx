"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosProvider = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });

        AOS.refresh();
    }, []);

    return children;
};

export default AosProvider;