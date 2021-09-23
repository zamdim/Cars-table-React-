import React, {Component} from 'react';
import "./add-car-panel.scss"

export default class AddCarPanel extends Component {

    state = {
        image: {value: '', hasError: false},
        brand: {value: '', hasError: false},
        model: {value: '', hasError: false},
        power: {value: '', hasError: false}
    };

    inputsAtr = [
        {dataType: "image", placeholder: "Enter URL of car image (png, jpg)"},
        {dataType: "brand", placeholder: "Enter brand"},
        {dataType: "model", placeholder: "Enter model"},
        {dataType: "power", placeholder: "Enter power, Hp"}
    ]

    onChangeInfo = (e) => {
        const dataType = e.target.dataset.type;
        const inputValue = e.target.value;
        let newState = {};
        newState[dataType] = {value: inputValue};
        this.setState(newState);
    };


    onAddCar = () => {
        const stateArr = Object.keys(this.state);
        let hasError = false;

        const addError = (item) => {
            hasError = true;
            const newState = {};
            newState[item] = {value: '', hasError: true};
            this.setState(newState);
        };

        stateArr.forEach((item) => {
            if (this.state[item].value === "") {
                addError(item);
            }
            if (item === "image" && !(/^(http|https):\/\/.+(\.png|\.jpg)$/gm).test(this.state[item].value)) {
                addError(item);
            }
            if (item === "power" && !(/\d/gm).test(this.state[item].value)) {
                addError(item);
            }
        });

        if (hasError) {
            return;
        } else {
            let car = {}
            stateArr.forEach(item => {
                car[item] = this.state[item].value;
                const newState = {};
                newState[item] = {value: ''};
                this.setState(newState)
            });
            car.chosen = false;
            car.id = car.model + Math.floor(Math.random() * 100);
            this.props.addCar(car);
        }
    };

    render() {
        const inputs = this.inputsAtr.map(({dataType, placeholder, notMatchTypeImg}) => {
            const clazz = this.state[dataType].hasError ? "error" : "";

            return (
                <input type="text"
                       className={clazz}
                       key={dataType}
                       placeholder={placeholder}
                       data-type={dataType}
                       onChange={this.onChangeInfo}
                       value={this.state[dataType].value}/>
            )
        })

        return (
            <div className="add-car-panel">
                <h1>Add your car</h1>
                <div className="inputs-container">
                    {inputs}
                </div>
                <button onClick={this.onAddCar}>Add car</button>
            </div>
        )
    }

};
