import React from 'react';
import "./cars-table.scss";

const CarsTable = ({displayedElements, sorted, revSorted, onSorted, onDeleted, onChoose}) => {

    const thTypes = [
        {type: "brand", label: "Brand"},
        {type: "model", label: "Model"},
        {type: "power", label: "Power, Hp"},
    ];

    const thCreate = thTypes.map(({type, label}) => {
        const isThisType = sorted === type;
        const clazz = isThisType ? revSorted ? "sort down" : "sort up" : "sort";

        return (<th key={label} className={clazz} onClick={() => onSorted(type)}>{label}</th>);
    });

    const allCars = displayedElements.map(item => {
        const {image, brand, model, power, chosen} = item;
        const trClazz = chosen ? " chosen" : "";

        return (
            <tr key={model} className={trClazz}>
                <td className="img-fit">
                    <img src={image} alt="cars"/>
                    <button className="delete" onClick={()=>onDeleted(model)}>Delete car</button>
                    <button className="choose" onClick={()=>onChoose(model)}>Choose car</button>
                </td>
                <td>{brand}</td>
                <td>{model}</td>
                <td>{power}</td>
            </tr>
        );
    });

    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    {thCreate}
                </tr>
                </thead>
                <tbody>
                {allCars}
                </tbody>
            </table>
        </div>
    );
};

export default CarsTable;