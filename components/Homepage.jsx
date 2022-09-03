import React from "react";
import { Navbar } from "./Navbar/Navbar";
import Image from "next/image";
import { HowToUse } from "./HowToUse/HowToUse";
import { AboutUs } from "./AboutUs/AboutUs";
import { Footer } from "./Footer/Footer";
const Homepage = () => {
    return (
        <div className="width-full">
            <Navbar />
            <Image src="/assets/img/brain.jpg" width={1600} height={670} />
            <HowToUse />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Homepage;
