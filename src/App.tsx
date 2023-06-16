import React from "react";
import "./App.css";
import Header from "./components/Header";


function App() {
    return (
        <div className="h-screen w-full bg-slate-800 flex items-center justify-center py-12">
            <div className="flex flex-col justify-center items-center w-[48rem] h-[40rem]">
                <Header/>
                <div className="flex items-center justify-center bg-blue-500 w-full h-[30rem]">
                    <div className="bg-green-400 h-[30rem] w-[30rem] aspect-square flex items-center justify-center">Board</div>
                    <div className="bg-red-400 h-[40rem] w-72 aspect-square flex items-start justify-center">Move History</div>
                </div>
                <div className="flex justify-start items-center w-full h-20">
                    <div className="flex justify-center items-center h-full w-[30rem] bg-red-600">
                        <div className="flex justify-start items-center h-full w-1/3 bg-orange-500">P1 Score</div>
                        <div className="flex justify-center items-center h-full w-1/3 bg-blue-500">Ties:</div>
                        <div className="flex justify-end items-center h-full w-1/3 bg-orange-500">P2 Score</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
