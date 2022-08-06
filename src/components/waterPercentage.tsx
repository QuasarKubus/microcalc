import React, { ChangeEvent } from "react";

interface Props {
    waterPercentage: number,
    setWaterPercentage: Function
}

export const WaterPercentage = (props: Props) => {

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
        <div className="InputGroup">
            <h3>Water Ratio (%)</h3>
            <input onChange={handleWaterPercentageChange} value={props.waterPercentage} type="number" min="0" max="100" step="5" list="ratio"/>
            <div className="QuickClick">
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