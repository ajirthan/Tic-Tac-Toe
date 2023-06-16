import React from "react";

const GameScreen = () => {
    return (
        <div className="flex bg-blue-500 w-full h-[30rem]">
            <div className="bg-green-400 h-[30rem] w-[30rem] aspect-square flex items-center justify-center">Board</div>
            <div className="bg-red-400 h-[30rem] w-72 aspect-square flex items-start justify-center">Move History</div>
        </div>
    );
};

export default GameScreen;
