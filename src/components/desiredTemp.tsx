import React, { ChangeEvent } from "react";

interface Props {
    dTemp: number,
    setDTemp: Function
}

export const DesiredTemp = (props: Props) => {
   
    const handleDTempChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setDTemp(event.target.value as unknown as number);
    }

    const handleRoom2Click = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setDTemp(20);
    }

    const handleHotClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setDTemp(60);
    }

    const handleDTempIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setDTemp(props.dTemp+5);
    }

    const handleDTempDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setDTemp(props.dTemp-5);
    }


    return (
        <div className="InputGroup">
            <h3>Desired Temperature (°C)</h3>
            <div className="ValueSetter">
                <input onChange={handleDTempChange} value={props.dTemp} type="number" min="0" step="5"/>
                <button className="PMButton" onClick={handleDTempIncrease}>
                    <img src="_Plus.svg" alt="err" />
                </button>
                <button className="PMButton" onClick={handleDTempDecrease}>
                    <img src="_Minus.svg" alt="err" />
                </button>
            </div>
            <div className="QuickClick">
                <button onClick={handleRoom2Click}>
                    <img src="_RoomTemp.svg" alt="err" />
                </button>
                <button onClick={handleHotClick}>
                    <img src="_Hot.svg" alt="err" />
                </button>
            </div>
        </div>
    )
}