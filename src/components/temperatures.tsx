import React, { ChangeEvent, useState } from "react";

interface Props {
    setCTemp: Function,
    setDTemp: Function
}

export const Temperatures = (props: Props) => {

    const handleCTempChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setCTemp(event.target.value as unknown as number);
    }
    const handleDTempChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setDTemp(event.target.value as unknown as number);
    }

    return (
        <div>
            <p>Current Temperature (°C)</p>
            <input onChange={handleCTempChange} type="number" />
        
            <p>Desired Temperature (°C)</p>
            <input onChange={handleDTempChange} type="number" />
        </div>
    )
}