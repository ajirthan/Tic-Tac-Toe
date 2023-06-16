import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";


function App() {
    return (
        <div className="h-screen w-full bg-slate-800 flex items-center justify-center py-12">
            <div className="flex flex-col justify-center items-center w-[48rem] h-[40rem]">
                <Header/>
                <div className="flex items-center justify-center w-full h-[30rem]">
                    <Board/>
                    <div className="bg-red-400 h-[40rem] w-72 aspect-square flex items-start justify-center">Move History</div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
