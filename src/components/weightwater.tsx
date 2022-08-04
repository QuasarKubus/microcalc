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
            <input onChange={handleWeightChange} type="number" />
        
            <p>Water Ratio (%)</p>
            <input onChange={handleWaterPercentageChange} type="number" />
        </div>
    )
}