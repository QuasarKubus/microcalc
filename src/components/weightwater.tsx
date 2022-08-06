import React, { ChangeEvent, useState } from "react";

interface Props {
    weight: number,
    setWeight: Function,
    waterPercentage: number,
    setWaterPercentage: Function
}

export const WeightWater = (props: Props) => {

    const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setWeight((event.target.value as unknown as number));
    }

    const handleCupPress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWeight(200);
    }

    const handlePortionPress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWeight(350);
    }

    const handleWaterPercentageChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setWaterPercentage(event.target.value as unknown as number);
    }

    const handleVeggiePress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWaterPercentage(85);
    }

    const handleMeatPress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWaterPercentage(65);
    }

    const handlePastaPress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWaterPercentage(60);
    }
    const handleSoupPress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWaterPercentage(95);
    }

    return (
        <div>
            <p>Weight (g) </p>
            <input onChange={handleWeightChange} value={props.weight} type="number" min="0" max="500" step="50"/>
            <div>
            <button onClick={handleCupPress}>
                    <img src="cup.png" alt="err" />
                </button>
                <button onClick={handlePortionPress}>
                    <img src="portion.png" alt="err" />
                </button>
            </div>


            <p>Water Ratio (%)</p>

            <input onChange={handleWaterPercentageChange} value={props.waterPercentage} type="number" min="0" max="100" step="5" list="ratio"/>
            <div>
                <button onClick={handleVeggiePress}>
                    <img src="veggie.png" alt="err" />
                </button>
                <button onClick={handleMeatPress}>
                    <img src="meat.png" alt="err" />
                </button>
                <button onClick={handlePastaPress}>
                    <img src="pasta.png" alt="err" />
                </button>
                <button onClick={handleSoupPress}>
                    <img src="soup.png" alt="err" />
                </button>
            </div>
        </div>
    )
}