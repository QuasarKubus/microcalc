import React from 'react';

export const Info = () => {
    return (
        <div className='Info'>
            <h2>How Microwave Ovens work:</h2>
            <p>A microwave oven heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range. This induces water molecules in the food to rotate and produce thermal energy, which heats the food overall</p>
            <p>This means water-rich foods heat quicker than other food with less water.</p>
            <h2>Power:</h2>
            <p>Since food with more water content is heated quicker, you should choose a low power level (longer waiting time) in foods that have an uneven amount of water, because the heat needs time to spread to cooler parts.
            If you have a mostly even distribution of water, a high-power level is fine, and it will heat up faster. 
            </p>
            <h2>Weight:</h2>
            <p>Microwave ovens are with little portions more power efficient than a stove. Usually, a reference value of 250g is given, up to where the microwave works efficient.
            You should not heat more than 500g in a microwave oven.
            </p>
            <h2>Water ratio:</h2>
            <p>
            The average water ratio of the food. How much water is in it compared to its overall weight. 
            This determines as well how long you have to microwave your meal.
            For example (estimates):
            </p>
            <ul>
                <li>Meat: 60-70% water</li>
                <li>Fruits: 70-95% water</li>
                <li>Cooked rice: 60% water</li>
                <li>Cooked pasta: 55% water</li>
                <li>Soup: 95% water</li>
            </ul>
            <p>A rough estimate for a full meal would be 80%, but it depends.</p>
            <h2>Current Temperature:</h2>
            <p>The temperature your food has, when starting the microwave.</p>
            <h2>Desired Temperature:</h2>
            <p>How hot should your food be? 60°C is the standard serving temperature for any meal.</p>
        </div>
    );
}