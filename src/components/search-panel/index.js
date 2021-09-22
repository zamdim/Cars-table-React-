import React, {Component} from "react";
import "./search-panel.scss";

export default class SearchPanel extends Component {

    state = {
        trim: ""
    };

    onChangeTrim = (e) => {
        let trim = e.target.value.toLowerCase();
        this.setState({trim});
        this.props.onToggleTrim(trim);
    };


    render() {
        const {trim} = this.state

        return (
            <div className="search-panel">
                <input type="text"
                       value={trim}
                       placeholder="Search car"
                       onChange={this.onChangeTrim}/>
            </div>
        );
    };
};