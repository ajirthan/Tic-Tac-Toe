import React from "react";
import { ReactComponent as GameLogo } from "../assets/logo.svg";
import { ReactComponent as TurnX } from "../assets/turn-x.svg";
import { ReactComponent as RestartIcon } from "../assets/icon-restart.svg";

const Header = () => {
    return (
        <div className="flex justify-start items-center w-full h-20">
            <div className="flex justify-center items-center h-full w-[30rem]">
                <div className="flex justify-start items-center h-full w-1/3">
                    <GameLogo/>
                </div>
                <div className="flex justify-center items-center h-full w-1/3">
                    <div className="flex justify-center items-center w-36 h-12">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <span className="mr-2">Turn:</span>
                            <TurnX className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-end items-center h-full w-1/3">
                    <button
                        className="cursor-pointer border-none w-12 h-12 flex items-center justify-center bg-gray-300 rounded-2xl justify-self-end mr-2">
                        <RestartIcon className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
