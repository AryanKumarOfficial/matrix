import React, { useState } from "react";
import "../App.css"; // Make sure to add some basic styles

const Matrix = () => {
    const [colors, setColors] = useState(Array(9).fill("white"));
    const [clickOrder, setClickOrder] = useState([]);

    const handleClick = (index) => {
        const newColors = [...colors];
        newColors[index] = "green";
        setColors(newColors);

        const newClickOrder = [...clickOrder, index];
        setClickOrder(newClickOrder);

        if (index === 8) {
            setTimeout(() => {
                changeToOrange(newClickOrder);
            }, 100);
        }
    };

    const changeToOrange = (order) => {
        const newColors = [...colors];
        order.forEach((idx, i) => {
            setTimeout(() => {
                newColors[idx] = "orange";
                setColors([...newColors]);
            }, i * 500);
        });
    };

    return (
        <div className="matrix">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="box"
                    style={{ backgroundColor: color }}
                    onClick={() => handleClick(index)}
                ></div>
            ))}
        </div>
    );
};

export default Matrix;
