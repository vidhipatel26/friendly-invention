import React from "react";
import ProductListData from './ProductListData';
import ProductData from './ProductData';
// import Filterdata from "./Filterdata2";
import Header from './Header';


class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProducts: [],
        }
    }


    content = {
        selectedProducts: [],

    };

    componentWillMount() {
        this.content.selectedProducts = this.props.products;
    }

    handleChange = (e ) =>{
        alert(e.target.value)
        if(e.target.value === 'price') {
            // this.content.selectedProducts = this.content.selectedProducts.sort((a, b) => a.price - b.price);
            this.content.selectedProducts.sort((a,b) => a.price - b.price);
            console.log(this.content.selectedProducts);
        }
        if(e.target.value === "label"){
            this.content.selectedProducts = this.content.selectedProducts.sort((a, b) => a.label.localeCompare(b.label));
            console.log(this.content.selectedProducts);
        }
        this.setState({
            selectedProducts : this.content.selectedProducts
        })
    }

    render() {
        let product = [];
        let HashMap = this.props.HashMap;

        let aComponent = this.props.component;
        let sortByLabel = this.props.sortByLabelComponent;
        let filterArray = [];
        let FilterArrayLable = [];
        let arrOfCheckedChildren = [];
        let arrProductChecked = this.props.products;
        let thumbnailData = this.props.thumbnailData;
        let arrayRAM = [];
        let arrayROM = [];
        let arraySize = [];
        let selectedProducts = [];
        console.log(thumbnailData);



        // Dynamic Object of RAM

        for(let i=0;i<aComponent.length;i++) {
            let count = 1;
            let dataOfComponent = aComponent[i].children;
            for (let j = 0; j < dataOfComponent.length; j++) {
                if (dataOfComponent[j].isChecked === true) {
                    if (aComponent[i].id === "ram") {
                        var Ram = {}
                        Ram = [dataOfComponent[j].label];
                        arrayRAM.push(
                            Ram
                        )
                        if (count === 1) {
                            arrayRAM.unshift(
                                <label className={'ram'}>{aComponent[i].label}</label>
                            )
                            count++
                        }
                    }

                }
            }
        }

        // Dynamic Object For ROM
        for(let o=0;o<aComponent.length;o++){
            let count = 1;
            let dataOfComponent = aComponent[o].children;
            for (let m = 0; m < dataOfComponent.length; m++) {
                if (dataOfComponent[m].isChecked === true) {
                    if (aComponent[o].id == 'internal_memory') {
                        var ROM = {}
                        ROM = [dataOfComponent[m].label];
                        arrayROM.push(
                            ROM
                        )
                        if (count === 1) {
                            arrayROM.unshift(
                                <label>{aComponent[o].label}</label>
                            )
                            count++
                        }
                    }

                }
            }
        }

        // Dynamic Object For Internal M
        for(let d=0;d<aComponent.length;d++){
            let count = 1;
            let dataOfComponent = aComponent[d].children;
            for (let c = 0; c < dataOfComponent.length; c++) {
                if (dataOfComponent[c].isChecked === true) {
                    if (aComponent[d].id == 'screen_size') {
                        var IM = {}
                        IM = [dataOfComponent[c].label];
                        arraySize.push(
                            IM
                        )
                        if (count === 1) {
                            arraySize.unshift(
                                <label>{aComponent[d].label}</label>
                            )
                            count++
                        }
                    }

                }
            }

        }



// Filtered and not filtered Porduct Print*/

        if ( selectedProducts.length > 0) {
            for (let i = 0; i < selectedProducts.length; i++) {
                product.push(
                    <div key={"pr_" + i} className={"main_div"}>
                        <ProductListData component={selectedProducts[i]}/>
                    </div>
                );
            }
        }

        else if (arrProductChecked.length > 0) {
            for (let i = 0; i < arrProductChecked.length; i++) {
                product.push(
                    <div key={"pr_" + i} className={"main_div"}>
                        <ProductListData HashMap={this.props.HashMap} component={arrProductChecked[i]}/>
                    </div>
                );
            }
        } else {
            alert("No Data Found");
        }
        // }else {
        //     for (let i = 0; i < ProductData.length; i++) {
        //         product.push(
        //             <div key={"div_" + i} className={"main_div"}>
        //                 <ProductListData HashMap={this.props.HashMap} component={ProductData[i]}/>
        //             </div>
        //         );
        //     }
        // }


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
                        <select onChange={(e) => this.handleChange(e)}>
                            <option >sort By</option>
                            <option value="price" >Price</option>
                            <option value="label">Label</option>
                        </select>
                    </div>

                </div>

                <div className="product_all">
                    {product}
                </div>

            </div>


        )
    };
}

export default Content;
