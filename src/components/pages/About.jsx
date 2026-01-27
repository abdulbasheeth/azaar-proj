import React from "react";
import { CheckCircle2 } from "lucide-react";
import Counter from "../Ui/Counter";


const About = () => {
    return (
        <div className="pl-10 pr-10 bg-[#F0F2F4] pb-20" id="About">
            <div className="flex items-start gap-[10px]">

                {/* LEFT CONTENT */}
                 <div className="mt-25 flex-auto">
                    <p className="inline p-2 rounded-2xl text-[#1484F4] px-5 bg-[#D8E1EA]">
                        About Us
                    </p>

                    <h1 className="mt-10 text-black text-4xl font-serif font-bold">
                        Your Trusted Partner <br />
                        <span>in </span>
                        <span className="text-[#0E7CE9]">Industrial</span> <br />
                        <span className="text-[#0E7CE9]">Manufacturing</span>
                    </h1>

                    <p className="mt-5 text-gray-500 max-w-xl">
                        THE MECHATRON is a leading industrial manufacturing company based in Chennai, India. We specialize in precision metal fabrication, offering comprehensive solutions from laser cutting to complete assembly.
                    </p>

                    <p className="text-gray-500 my-5 max-w-xl">
                        With over 15 years of experience and ISO 9001:2015 certification, we deliver high-quality products that meet international standards.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-60 ">
                            <p className="flex items-center gap-2 mt-3">
                                <CheckCircle2 size={25} className="text-[#0E7CE9]" />
                                State-of-the-art CNC machinery </p>
                            <p className="mt-2 flex items-center gap-2">
                                <CheckCircle2 size={25} className="text-[#0E7CE9]" />
                                Experienced technical team</p>
                            <p className="mt-5 flex items-center gap-2">
                                <CheckCircle2 size={25} className="text-[#0E7CE9]" />
                                Competitive pricing</p>
                        </div>
                        <div className="w-60 text-sm">
                            <p className="mt-3 flex items-center gap-2">
                                <CheckCircle2 size={25} className="text-[#0E7CE9]" />
                                ISO 9001:2015 certified processes</p>
                            <p className="mt-5 flex items-center gap-2">
                                <CheckCircle2 size={25} className="text-[#0E7CE9]" />
                                On-time delivery commitment</p>
                            <p className="mt-5 flex items-center gap-4">
                                <CheckCircle2 size={25} className="text-[#0E7CE9]" />
                                Custom solutions for every need</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COUNTERS */}
          <div className="pt-65 flex-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <Counter end={15} label="Years Experience" />
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <Counter end={500} label="Projects Completed" />
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <Counter end={100} label="Happy Clients" />
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <Counter end={50} label="Team Members" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
