import React, { ChangeEvent, useState } from "react";

interface Props {
    setPower: Function,
}

export const Power = (props: Props) => {

    const handlePowerChange = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setPower(event.target.value as unknown as number);
    }

    return (
        <div>
            <p>Power (W)</p>
            <input onChange={handlePowerChange} type="number" />
        </div>
    )
}