import React, { ChangeEvent } from "react";

interface Props {
    cTemp: number,
    setCTemp: Function,
}

export const CurrentTemp = (props: Props) => {

    const handleCTempChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setCTemp(event.target.value as unknown as number);
    }

    const handleColdClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setCTemp(7);
    }

    const handleRoom1Click = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setCTemp(20);
    }

    const handleCTempIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setCTemp(props.cTemp+5);
    }

    const handleCTempDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setCTemp(props.cTemp-5);
    }

    return (
        <div className="InputGroup">
            <h3>Current Temperature (°C)</h3>
            <div className="ValueSetter">
                <input onChange={handleCTempChange} value={props.cTemp} type="number" min="0" />
                <button className="PMButton" onClick={handleCTempIncrease}>+</button>
                <button className="PMButton" onClick={handleCTempDecrease}>-</button>
            </div>
            <div className="QuickClick">
                <button onClick={handleColdClick}>
                    <img src="cold.png" alt="err" />
                </button>
                <button onClick={handleRoom1Click}>
                    <img src="roomtmp.png" alt="err" />
                </button>
            </div>
        </div>
    )
}