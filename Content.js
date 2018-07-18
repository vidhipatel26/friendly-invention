import React from "react";
import ProductListData from './ProductListData';

class Content extends React.Component {


    state = {
        selectedProducts: this.props.products,
    };

    // componentWillMount() {
    //     //  this.state.selectedProducts = this.props.products;
    //
    // }

    render() {

        let product = [];
        let aComponent = this.props.component;
        let arrProductChecked = this.props.products;
        // let specs = this.props.specs;
        let arrayRAM = [];
        let arrayROM = [];
        let arraySize = [];

        // console.log(arrProductChecked);


        // Dynamic Object of RAM

        for (let i = 0; i < aComponent.length; i++) {
            let count = 1;
            let dataOfComponent = aComponent[i].children;
            for (let j = 0; j < dataOfComponent.length; j++) {
                if (dataOfComponent[j].isChecked === true) {
                    if (aComponent[i].id === "ram") {
                        var Ram = {}
                        Ram = [dataOfComponent[j].label] + "," + "   ";
                        if(arrayRAM.length > 3){
                            Ram = [dataOfComponent[j].label]
                        }
                        arrayRAM.push(
                            Ram
                        )
                        if (count === 1) {
                            arrayRAM.unshift(
                                <label key={'aComponent_' + i} className={'ram'}>{aComponent[i].label  + ":"}</label>
                            )
                            count++
                        }
                    }

                }
            }
        }

        // Dynamic Object For ROM
        for (let o = 0; o < aComponent.length; o++) {
            let count = 1;
            let dataOfComponent = aComponent[o].children;
            for (let m = 0; m < dataOfComponent.length; m++) {
                if (dataOfComponent[m].isChecked === true) {
                    if (aComponent[o].id === 'internal_memory') {
                        var ROM = {}
                        ROM = [dataOfComponent[m].label]+ "," + "   ";
                        if(arrayROM.length > 2){
                            ROM = [dataOfComponent[m].label]
                        }
                        arrayROM.push(
                            ROM
                        )
                        if (count === 1) {
                            arrayROM.unshift(
                                <label key={'aComponent_' + o}>{aComponent[o].label}</label>
                            )
                            count++
                        }
                    }

                }
            }
        }

        // Dynamic Object For Internal M
        for (let d = 0; d < aComponent.length; d++) {
            let count = 1;
            let dataOfComponent = aComponent[d].children;
            for (let c = 0; c < dataOfComponent.length; c++) {
                if (dataOfComponent[c].isChecked === true) {
                    if (aComponent[d].id === 'screen_size') {
                        var IM = {}
                        IM = [dataOfComponent[c].label] + "'" + "," + "   ";
                        if(arraySize.length > 2){
                            IM = [dataOfComponent[c].label]+ "'";
                        }
                        arraySize.push(
                            IM
                        );
                        if (count === 1) {
                            arraySize.unshift(
                                <label key={'aComponent_' + d}>{aComponent[d].label}</label>
                            );
                            count++
                        }
                    }

                }
            }

        }


        if (arrProductChecked.length > 0) {
            for (let i = 0; i < arrProductChecked.length; i++) {
                product.push(
                    <div key={"pr_" + i} className={"main_div"}>
                        <ProductListData HashMap={this.props.HashMap} component={arrProductChecked[i]}/>
                    </div>
                );
            }
        } else {
            // alert("No Data Found");
                return (
                    <h1 className={'No_Data'}>No Matching Search Found</h1>
                )
            }


        return (
            <div className="Content">
                <div className="TopFilter">
                    <div className={"left_side"}>
                        <div className={'Ram'}> {arrayRAM}</div>
                        <div className={'Rom'}> {arrayROM}</div>
                        <div className={'Im'}> {arraySize}</div>
                    </div>
                    <div className={"right_side"}>
                        <label>Sort By:</label>

                        <select onChange={this.props.sortFun}>
                            <option value="price">Price</option>
                            <option value="label">Label</option>
                        </select>
                    </div>

                </div>

                <div className="product_all">
                    {product}
                </div>
                {/*<div className={"Blank_div"}>*/}
                    {/*No Matching Search Found*/}
                {/*</div>*/}


            </div>


        )
    };
}

export default Content;