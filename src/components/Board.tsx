import React from "react";

const Board = () => {
    return (
        <div className="h-[30rem] w-[30rem] aspect-square flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-full w-full p-2">
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">1</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">2</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">3</div>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full p-2">
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">4</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">5</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">6</div>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full p-2">
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">7</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">8</div>
                <div className="flex items-center justify-center w-full h-1/3 bg-slate-700 rounded-3xl m-2">9</div>
            </div>
        </div>
    );
};

export default Board;
