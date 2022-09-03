import React from "react";
import Image from "next/image";

export const AboutUs = () => {
    const members = [
        {
            name: "Aman",
            discord: "knight_lens#3836",
            image: "profile.jpg",
        },
        {
            name: "Aniq",
            discord: "Aniq Javed#4687",
            image: "profile.jpg",
        },
        {
            name: "Pushpendra",
            discord: "Pushpendra#8299",
            image: "profile.jpg",
        },
        {
            name: "Shivansh",
            discord: "Shivansh Arora#5994",
            image: "profile.jpg",
        },
    ];
    return (
        <div className="pt-10">
            <div className="text-center text-3xl font-bold text-[#1B0044]">
                About Us
                <hr className="w-20 h-1 bg-[#1B0044] mx-auto mt-2" />
                <div className="flex flex-row justify-around text-xl font-normal mx-40 my-10 p-4 border-2 rounded bg-[#F4EDFF] border-[#D6C5F0]">
                    {members.map(member => {
                        return (
                            <div className="border rounded border-[#D6C5F0] bg-[#ffffff] p-4">
                                <Image
                                    className="border rounded-full"
                                    src={`/assets/img/${member.image}`}
                                    width={150}
                                    height={150}
                                />
                                <p className="font-semibold">{member.name}</p>
                                <p className="text-base">{member.discord}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
