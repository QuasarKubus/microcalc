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

    const handleWaterIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setWaterPercentage(props.waterPercentage+5);
    }

    const handleWaterDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setWaterPercentage(props.waterPercentage-5);
    }

    return (          
        <div className="InputGroup">
            <h3>Water Ratio (%)</h3>
            <div className="ValueSetter">
                <input onChange={handleWaterPercentageChange} value={props.waterPercentage} type="number" min="0" max="100" step="5" list="ratio"/>
                <button className="PMButton" onClick={handleWaterIncrease}>
                    <img src="_Plus.svg" alt="err" />
                </button>
                <button className="PMButton" onClick={handleWaterDecrease}>
                    <img src="_Minus.svg" alt="err" />
                    </button>
            </div>
            <div>
                <div className="QuickClick">
                    <button onClick={handleVeggiePress}>
                        <img src="_Vegetable.svg" alt="err" />
                    </button>
                    <button onClick={handleMeatPress}>
                        <img src="_Meat.svg" alt="err" />
                    </button>
                </div>
                <div className="QuickClick">
                    <button onClick={handlePastaPress}>
                        <img src="_Pasta.svg" alt="err" />
                    </button>
                    <button onClick={handleSoupPress}>
                        <img src="_Soup.svg" alt="err" />
                    </button>
                </div>
            </div>
        </div>
    )
}