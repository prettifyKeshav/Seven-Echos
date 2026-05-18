"use client"

import { useHeaderFixed } from "@/context/useHeaderContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {

    const { setIsHeaderFixed } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])

    return (
        <>
            <section>
                <div className="not-found-banner">
                    <div className="content text-center">
                        <div className="logo">
                            <div className="">
                                <Image src="/assets/logo.svg" width={108} height={108} alt="ico"></Image>
                            </div>
                        </div>
                        <h1>PAGE NOT FOUND!</h1>
                        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                        <Link className="btn primary-btn" href="/">Back to Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;


// import Button from "../components/atoms/Button";
// import Image from "next/image";
// import Header from "../components/organisms/LandingHeader";
// import Footer from "../components/organisms/Footer";

// const NotFound = () => {
//     return (
//         <>
//             <Header />
//             <section>
//                 <div className="not-found-banner">
//                     <div className="content text-center">
//                         <div className="logo">
//                             <div className="">
//                                 <Image src="/assets/images/donify-ico.svg" width={108} height={108} alt="donify ico"></Image>
//                             </div>
//                         </div>
//                         <h1>PAGE NOT FOUND!</h1>
//                         <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
//                         <Button className="btn primary-btn" href="/">Back to Home</Button>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// };

// export default NotFound;
