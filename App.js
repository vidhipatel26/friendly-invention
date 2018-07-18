import React from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';
import FilterData from "./FilterData";
import ProductData from "./ProductData";
import {ID , PRICE} from "./Constants";

class App extends React.Component {

    state = {
        checked: false,
        HashMap: {},
        filterArr: [],
        checkedFilterData: {},
        Data_products: [],
        selected_products: [],
        specsArr: [],
        sortingState: "",

    };

// Checked box checked flag method

    checkBoxClicked = (spec, pid) => {
        let myArr = this.state.checkedFilterData[pid] || [];

        if (spec.isChecked === false) {
            spec.isChecked = true;

            myArr.push(spec);

        } else {
            spec.isChecked = false;
            myArr.splice(myArr.indexOf(spec), 1);
            // console.log(spec.label + " deselected");
        }
        this.state.checkedFilterData[pid] = myArr;
        this.getFilteredProducts();
        // console.log(this.state.checkedFilterData);

    };

// Main FIltering Function

    getFilteredProducts() {
        // console.clear();
        this.state.selected_products = [];
        for (let p = 0; p < this.state.Data_products.length; p++) {
            let product = this.state.Data_products[p];
            let isProductReallyEligible = true;

            for (let s = 0; s < this.state.specsArr.length; s++) {

                let isProductEligible = true;
                if (this.state.checkedFilterData[this.state.specsArr[s]]) {
                    for (let w = 0; w < this.state.checkedFilterData[this.state.specsArr[s]].length; w++) {
                        if (this.state.specsArr[s] === "price") {
                            // let isProductReallyEligible = true;
                            if (this.state.Data_products[p][PRICE] >= this.state.checkedFilterData[PRICE][w].low  && this.state.Data_products[p][PRICE] <= this.state.checkedFilterData[PRICE][w].high ) {
                                isProductEligible = true;
                                break;
                            } else {
                                isProductEligible = false;
                                // console.log(this.state.checkedFilterData[PRICE][w].low + ">=" + this.state.Data_products[p][PRICE])
                            }

                        }
                        // console.log(this.state.checkedFilterData[this.state.specsArr[s]][w][ID] + "===" + product[this.state.specsArr[s]])

                        else {
                            if (this.state.specsArr[s] === "ram" || this.state.specsArr[s] === "internal_memory" || this.state.specsArr[s] === "screen_size") {
                                if (this.state.checkedFilterData[this.state.specsArr[s]][w][ID] === product[this.state.specsArr[s]]) {
                                    isProductEligible = true;
                                    break;
                                } else {
                                    isProductEligible = false;
                                }
                            }
                        }

                    }
                }

                if (isProductEligible) {
                    isProductReallyEligible = true;
                } else {
                    isProductReallyEligible = false;
                    break;
                }
            }

            if (isProductReallyEligible) {

                //   console.log("Selected");
                this.state.selected_products.push(product);
            } else {
                //   console.log("Not Selected");
            }


        }

 // switch Product of Price and Label

        switch (this.state.sortingState) {
            case "price":
                this.sortByPrice();
                break;
            case "label":
                this.sortByLabel();
                break;
        }
        this.logSelectedProducts();

        this.forceUpdate();

    }

// get all Product in HashMap

    setupProducts() {
        for (let i = 0; i < ProductData.length; i++) {
            let obj = {};
            obj["id"] = ProductData[i].id;
            obj["img"] = ProductData[i].img;
            obj["label"] = ProductData[i].label;
            obj["price"] = ProductData[i].price;
            obj["ram"] = ProductData[i].ram;
            obj["internal_memory"] = ProductData[i].internal_memory;
            obj["screen_size"] = ProductData[i].screen_size;
            obj["processor"] = ProductData[i].processor;
            obj["color"] = ProductData[i].color;
            this.state.Data_products.push(obj);
        }
        // console.log(this.Data_products)
    }

// SerachBar Filter

    searchByLabel(event) {
        let selectedValue = event.target.value;
        // console.log(selectedValue);

        let newArr = ProductData || [];
        this.state.selected_products = [];

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].label.search(new RegExp(selectedValue, "ig")) > -1) {
                this.state.selected_products.push(newArr[i]);
            }

        }
        this.logSelectedProducts();
        this.forceUpdate();
    }

// FilterData HashMap

    setupFilters() {
        let hash = {};
        for (let i = 0; i < FilterData.length; i++) {
            hash[FilterData[i].id] = FilterData[i].children;
            this.state.specsArr.push(FilterData[i].id);

        }
        this.setState({HashMap: hash});
        // console.log(hash);
    }

// for console for once

    logSelectedProducts() {
        // console.clear();
        for (let k = 0; k < this.state.selected_products.length; k++) {
            // let pr = this.state.selected_products[k];
            // console.log(pr.label + "--" + pr.ram + "--" + pr.screen_size + "--" + pr.internal_memory);
            // console.log("---------------------------------");
        }
    }

// SortBy Labels

    sortByLabel() {
        this.state.selected_products = this.state.selected_products.sort((a, b) => a.label.localeCompare(b.label));
        // console.log(this.state.selected_products);
    }

// SortBy Labels

    sortByPrice() {
        this.state.selected_products = this.state.selected_products.sort((a, b) => a.price - b.price);
        // console.log(this.state.selected_products);

    }

// SortBy Function main

    sortFun(event) {
        // console.log(event.target.value);
        let selectedValue = event.target.value;

        switch (selectedValue) {
            case "price":
                this.sortByPrice();
                this.setState({sortingState: "price"});
                break;
            case "label":
                this.sortByLabel();
                this.setState({sortingState: "label"});
                // console.log("Working 2");
                break;
        }

        this.forceUpdate();

    }

// ComponentWillMount

    componentWillMount() {
        this.setupProducts();
        this.setupFilters();
        // this.searchByLabel();
        this.getFilteredProducts();

        // console.log(this.state.checkedFilterData);

    }

    render() {
        return (
            <div><Header searchFunction={this.searchByLabel.bind(this)}/>
                <div className={'Content_wrapper'}>
                    <Sidebar HashMap={this.state.HashMap} cbFunction={this.checkBoxClicked} component={FilterData}/>
                    <Content HashMap={this.state.HashMap} products={this.state.selected_products}
                             specs={this.state.specsArr} component={FilterData} sortFun={this.sortFun.bind(this)}/>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default App;