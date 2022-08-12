import React, { ChangeEvent } from "react";
import { preProcessFile } from "typescript";

interface Props {
    weight: number,
    setWeight: Function,
}

export const Weight = (props: Props) => {

    const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setWeight((event.target.value as unknown as number));
    }

    const handleCupPress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWeight(200);
    }

    const handlePortionPress = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setWeight(500);
    }

    const handlePortionIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setWeight(props.weight+50);
    }

    const handlePortionDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setWeight(props.weight-50);
    }

    return (
        <div className="InputGroup">
            <h3>Weight (g) </h3>
            <div className="ValueSetter">
                <input onChange={handleWeightChange} value={props.weight} type="number" min="0" max="500" step="50"/>
                <button className="PMButton" onClick={handlePortionIncrease}>+</button>
                <button className="PMButton" onClick={handlePortionDecrease}>-</button>
            </div>
            <div className="QuickClick">
                <button onClick={handleCupPress}>
                    <img src="cup.png" alt="err" />
                </button>
                <button onClick={handlePortionPress}>
                    <img src="portion.png" alt="err" />
                </button>
            </div>
        </div>
    )
}