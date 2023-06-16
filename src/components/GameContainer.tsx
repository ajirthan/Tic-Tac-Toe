import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GameScreen from "./GameScreen";

const GameContainer = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[48rem] h-[40rem]">
            <Header/>
            <GameScreen/>
            <Footer/>
        </div>
    );
};

export default GameContainer;
