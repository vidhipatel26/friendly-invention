import React from 'react';
import FilterCheckbox from './FilterCheckbox';

class Filter extends React.Component {

    render() {

        let arr = [];
        let FilterData = this.props.component;

        for (let i = 0; i < FilterData.length; i++) {
            arr.push(<div key={'FilterData_' + i} className={"data_filter"}>
                <FilterCheckbox HashMap={this.props.HashMap} cbFunction={this.props.cbFunction}
                                component={FilterData[i]}/>
            </div>)
        }
        return (
            <div className={"side_main_container"}>
                <label className={"heading"}>FILTER</label>
                {arr}
            </div>
        );
    }


}

export default Filter;