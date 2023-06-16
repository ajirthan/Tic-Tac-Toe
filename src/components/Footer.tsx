import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-start items-center w-full h-20">
            <div className="flex justify-center items-center h-full w-[30rem]">
                <div className="flex justify-start items-center h-full w-1/3">
                    <div className="flex justify-start items-center w-36 h-16 ml-2">
                        <div
                            className="bg-blue-400 hover:bg-blue-500 text-slate-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center justify-center w-full h-full">
                            P1: 0
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full w-1/3">
                    <div className="flex justify-start items-center w-36 h-16 ml-2">
                        <div
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-2xl inline-flex items-center justify-center w-full h-full">
                            Ties: 0
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center h-full w-1/3">
                    <div className="flex justify-start items-center w-36 h-16 mr-2">
                        <div
                            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-2 px-4 rounded-2xl inline-flex items-center justify-center w-full h-full">
                            P2: 0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
