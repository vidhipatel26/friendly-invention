import React, {Component} from 'react';

// import Content from "./Content";


class FilterCheckbox extends Component {


    render() {
        let aComponent = this.props.component;
        let dataOfComponent = aComponent.children;
        let arrayPush = [];
        //console.log(aComponent.id);
        arrayPush.push(
            <label key={'aComponent'} className={"ramheading"}>{aComponent.label}</label>
        );
        for (let i = 0; i < dataOfComponent.length; i++) {
            arrayPush.push(
                <div key={'dataOfComponent_' + i} className="checkbox side_div_ram">
                    <label className="container">
                        <input type="checkbox" id={dataOfComponent[i].id}  checked={dataOfComponent.isChecked}
                               onChange={this.props.cbFunction.bind(this, dataOfComponent[i], aComponent.id)}/>
                            <span className="checkmark"></span>
                    </label>
                    {/*<input type="checkbox" id={dataOfComponent[i].id} checked={dataOfComponent.isChecked}*/}
                           {/*onChange={this.props.cbFunction.bind(this, dataOfComponent[i], aComponent.id)}/>*/}
                    <label className="name">{dataOfComponent[i].label}</label>

                </div>);
        }
        return (
            arrayPush
        );

    }
}

export default FilterCheckbox;