import React, { ChangeEvent, useState } from "react";

interface Props {
    setWeight: Function,
    setWaterPercentage: Function
}

export const WeightWater = (props: Props) => {

    const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setWeight((event.target.value as unknown as number) / 1000);
    }
    const handleWaterPercentageChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setWaterPercentage(event.target.value as unknown as number);
    }

    return (
        <div>
            <p>Weight (g) </p>
            <input onChange={handleWeightChange} type="number" min="0" max="500" step="50"/>
        
            <p>Water Ratio (%)</p>
            <input onChange={handleWaterPercentageChange} type="number" min="0" max="100" step="5"/>
        </div>
    )
}