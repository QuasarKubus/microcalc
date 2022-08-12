import React, { ChangeEvent } from "react";

interface Props {
    power: number,
    setPower: Function,
}

export const Power = (props: Props) => {

    const handlePowerChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setPower(event.target.value as unknown as number);
    }

    const handleEnergy1Click = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setPower(200);
    }

    const handleEnergy2Click = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setPower(500);
    }

    const handleEnergy3Click = (event: React.MouseEvent<HTMLButtonElement>) =>{
        props.setPower(1000);
    }

    const handlePowerIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setPower(props.power+50);
    }

    const handlePowerDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setPower(props.power-50);
    }

    return (
        <div className="InputGroup">
            <h3>Power (W)</h3>
            <div className="ValueSetter">
                <input onChange={handlePowerChange} value={props.power} type="number" min="0" step="50"/>
                <button className="PMButton" onClick={handlePowerIncrease}>
                    <img src="_Plus.svg" alt="err" />
                </button>
                <button className="PMButton" onClick={handlePowerDecrease}>
                    <img src="_Minus.svg" alt="err" />
                </button>
            </div>
            <div className="QuickClick">
                <button onClick={handleEnergy1Click}>
                    <img src="_Power1.svg" alt="err" />
                </button>
                <button onClick={handleEnergy2Click}>
                    <img src="_Power2.svg" alt="err" />
                </button>
                <button onClick={handleEnergy3Click}>
                    <img src="_Power3.svg" alt="err" />
                </button>
            </div>
        </div>
    )
}