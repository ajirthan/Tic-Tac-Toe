import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-center items-center w-full h-20">
            <div className="flex justify-start items-center h-full w-1/3 bg-orange-500">P1 Score</div>
            <div className="flex justify-center items-center h-full w-1/3 bg-blue-500">Ties:</div>
            <div className="flex justify-end items-center h-full w-1/3 bg-orange-500">P2 Score</div>
        </div>
    );
};

export default Footer;
