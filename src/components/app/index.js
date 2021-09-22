import React, {Component} from "react";
import AppHeader from "../app-header";

import "./app.scss";
import CarsTable from "../cars-table";
import data from "../../service/car-service";
import SearchPanel from "../search-panel";
import AddCarPanel from "../add-carr-panel";
import FilterPanel from "../filter-panel";

export default class App extends Component {

    state = {
        cars: data,
        sorted: null,
        revSorted: true,
        trim: "",
        filter: "all"
    };

    onSorted = (type) => {
        const {sorted} = this.state;
        if ((sorted !== type)) {
            this.setState(() => {
                const typeSort = type !== "power" ? "sort" : "sortNum";
                const cars = this.sort(typeSort, type);
                return {cars: cars, sorted: type, revSorted: false};
            });
        }
        if (type === sorted) {
            this.setState(({revSorted}) => {
                const cars = this.sort("reverse", type);
                return {cars: cars, revSorted: !revSorted};
            });
        }
    };

    sort = (toDo, type) => {
        const {cars} = this.state;
        switch (toDo) {
            case "sort" :
                return (
                    [...cars].sort((a, b) => a[type] === b[type] ? 0 : a[type] > b[type] ? 1 : -1)
                );
            case "sortNum" :
                return (
                    [...cars].sort((a, b) => a[type] - b[type])
                );
            case "reverse":
                return (
                    [...cars].reverse()
                );
            default:
                return cars;
        }
    };

    onToggleTrim = (trim) => {
        this.setState({trim});
    };

    toggleTrim = (arr, trim) => {
        if (trim === "") {
            return arr;
        }

        return arr.filter(item => {
            let {brand, model, power} = item;
            return (`${brand} ${model} ${power}`).toLowerCase().indexOf(trim) > -1;
        });
    };

    addCar = (car) => {
        this.setState(({cars}) => {
            const newArr = [car, ...cars];
            return {cars: newArr};
        });
    };

    deleteItem = (model) => {
        this.setState(({cars}) => {
            const newArr = cars.filter(item => item.model !== model);
            return {cars: newArr};
        });
    };

    chooseItem = (model) => {
        this.setState(({cars}) => {
            const newArr = cars.map(item => {
                if (item.model === model) {
                    item.chosen = !item.chosen;
                }
                return item;
            });
            return {cars: newArr};
        });
    };

    toggleFilter = (filter) => {
        this.setState({filter});
    };

    filtering = (arr) => {
        if (this.state.filter === "chosen") {
            return arr.filter(({chosen}) => chosen)
        }
        return arr;
    };

    render() {
        const {cars, sorted, revSorted, trim, filter} = this.state
        const displayedElements = this.toggleTrim(this.filtering(cars), trim);

        return (
            <div className="cars">
                <AppHeader/>
                <SearchPanel onToggleTrim={this.onToggleTrim}/>
                <AddCarPanel addCar={this.addCar}/>
                <FilterPanel filter={filter} onFilter={this.toggleFilter}/>
                <CarsTable
                    displayedElements={displayedElements}
                    sorted={sorted}
                    revSorted={revSorted}
                    onSorted={this.onSorted}
                    onDeleted={this.deleteItem}
                    onChoose={this.chooseItem}
                />
            </div>
        );
    };
};