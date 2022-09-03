import React from "react";
import Image from "next/image";

export const HowToUse = () => {
    return (
        <div className="pt-10 bg-[#F4EDFF]">
            <div className="text-center text-3xl font-bold text-[#1B0044]">
                How To Use
                <hr className="w-20 h-1 bg-[#1B0044] mx-auto mt-2" />
                <div className="flex flex-row justify-around text-xl font-normal px-20 py-10">
                    <div className="text-left flex flex-col gap-4 pt-20 pl-10">
                        <p>
                            1. Click on{" "}
                            <a className="underline text-[#5727A3]">
                                Get Started
                            </a>
                        </p>
                        <p>
                            2. You will then be asked to Fill in Details about
                            your daily schedule.
                        </p>
                        <p>3. After Clicking the Submit Button.</p>
                        <p>
                            We will Optimize Your daily schedule to maximize
                            your productivity while minimizing your stress and
                            keeping in mind Your mental health.🙂
                        </p>
                        <p>
                            We also provide various resources for your well
                            being of mental Health.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/img/workillustration.png"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
