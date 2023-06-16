import React from "react";
import { ReactComponent as XOutlineIcon } from "../assets/icon-x-outline.svg";

const Board = () => {
    return (
        <div className="h-[30rem] w-[30rem] aspect-square flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-full w-full p-2">
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">
                    <XOutlineIcon className="h-16 w-16"/>
                </div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">2</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">3</div>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full p-2">
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">4</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">5</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">6</div>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full p-2">
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">7</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">8</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2 cursor-pointer">9</div>
            </div>
        </div>
    );
};

export default Board;
