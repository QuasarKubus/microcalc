import React, { ChangeEvent, useState } from "react";

interface Props {
    cTemp: number,
    setCTemp: Function,
    dTemp: number,
    setDTemp: Function
}

export const Temperatures = (props: Props) => {

    const handleCTempChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setCTemp(event.target.value as unknown as number);
    }
    const handleDTempChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setDTemp(event.target.value as unknown as number);
    }

    const handleColdClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setCTemp(7);
    }

    const handleRoom1Click = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setCTemp(20);
    }

    const handleRoom2Click = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setDTemp(20);
    }

    const handleHotClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setDTemp(70);
    }


    return (
        <div>
            <p>Current Temperature (°C)</p>
            <input onChange={handleCTempChange} value={props.cTemp} type="number" min="0"/>
            <div>
                <button onClick={handleColdClick}>
                    <img src="cold.png" alt="err" />
                </button>
                <button onClick={handleRoom1Click}>
                    <img src="roomtmp.png" alt="err" />
                </button>
            </div>
        
            <p>Desired Temperature (°C)</p>
            <input onChange={handleDTempChange} value={props.dTemp} type="number" min="0"/>
            <div>
                <button onClick={handleRoom2Click}>
                    <img src="roomtmp.png" alt="err" />
                </button>
                <button onClick={handleHotClick}>
                    <img src="hot.png" alt="err" />
                </button>
            </div>
        </div>
    )
}