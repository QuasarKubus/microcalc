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

    return (
        <div className="InputGroup">
            <h3>Power (W)</h3>
            <input onChange={handlePowerChange} value={props.power} type="number" min="0" step="50"/>
            <div className="QuickClick">
                <button onClick={handleEnergy1Click}>
                    <img src="energy1.png" alt="err" />
                </button>
                <button onClick={handleEnergy2Click}>
                    <img src="energy2.png" alt="err" />
                </button>
                <button onClick={handleEnergy3Click}>
                    <img src="energy3.png" alt="err" />
                </button>
            </div>
        </div>
    )
}