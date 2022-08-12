import React, { ChangeEvent } from "react";

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
                <button className="PMButton" onClick={handlePortionIncrease}>
                    <img src="_Plus.svg" alt="err" />
                </button>
                <button className="PMButton" onClick={handlePortionDecrease}>
                    <img src="_Minus.svg" alt="err" />
                </button>
            </div>
            <div className="QuickClick">
                <button onClick={handleCupPress}>
                    <img src="_Cup.svg" alt="err" />
                </button>
                <button onClick={handlePortionPress}>
                    <img src="_Serving.svg" alt="err" />
                </button>
            </div>
        </div>
    )
}