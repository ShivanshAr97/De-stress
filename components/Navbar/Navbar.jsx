import React, { useEffect } from "react";
import { useState } from "react";

export const Navbar = () => {
    const tabs = ["Home", "Get Started", "How it works", "About Us"];
    const [dropdown, setDropdown] = useState(false);
    const [windowsWidth, setWindowsWidth] = useState(1500);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowsWidth(window.innerWidth);
        });
    });
    return (
        <>
            <div className="flex flex-row justify-between py-4 px-20 bg-[#1B0044]">
                <div className="flex flex-row gap-4">
                    <img
                        src="/assets/brain.svg"
                        alt=""
                        height={30}
                        width={30}
                    />
                    <a className="text-2xl text-white font-semibold pt-1">
                        DE-STRESS
                    </a>
                </div>
                {windowsWidth > 1024 ? (
                    <>
                        <div className="flex flex-row gap-4">
                            {tabs.map(tab => {
                                return (
                                    <button
                                        className="text-[#ffffff] py-2 rounded-full px-4 font-semibold hover:text-[#ffffff] hover:bg-[#5727A3]"
                                        key={tab}
                                    >
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                if (dropdown) {
                                    setDropdown(false);
                                } else {
                                    setDropdown(true);
                                }
                            }}
                        >
                            {dropdown ? (
                                <img
                                    src="/assets/close.svg"
                                    height={25}
                                    width={25}
                                />
                            ) : (
                                <img
                                    src="/assets/hamburger.svg"
                                    height={30}
                                    width={30}
                                />
                            )}
                        </button>
                    </>
                )}
            </div>
            {dropdown && (
                <div className="bg-[#5727A3] flex flex-col text-lg">
                    {tabs.map(tab => {
                        return (
                            <button
                                className="text-[#ffffff] py-2 text-left px-10 font-semibold hover:text-[#ffffff] hover:bg-[#9153F4]"
                                key={tab}
                            >
                                {tab}
                            </button>
                        );
                    })}
                    <hr />
                </div>
            )}
        </>
    );
};
