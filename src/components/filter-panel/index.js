import React from "react";
import "./filter-panel.scss";

const FilterPanel = ({filter, onFilter}) => {

    const buttons = [
        {name:"all", label: "All cars"},
        {name:"chosen", label: "Chosen cars"}
    ]

    const createButtons = buttons.map(({name, label}) => {
        const clazz = filter === name ? "btn active" : "btn";

        return(
            <button className={clazz} onClick={()=> onFilter(name)} key={name}>{label}</button>
        );
    });

    return(
        <div className="filter-panel">
            {createButtons}
        </div>
    );
};

export default FilterPanel;