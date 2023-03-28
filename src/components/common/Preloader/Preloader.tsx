import React from "react";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={"spinner"}/>
        </div>
    );
};

export default Preloader;