import {
    _2GB,
    _3GB,
    _4GB,
    _6GB,
    RAM_ID_2,
    RAM_ID_1,
    RAM_ID_3,
    RAM_ID_4,
    ROM_ID_1,
    ROM_ID_2,
    ROM_ID_3, SCREEN_ID_1, SCREEN_ID_2, SCREEN_ID_3, PRICE_ID_1, PRICE_ID_2, PRICE_ID_3, PRICE_ID_4, PRICE_ID_5
} from "./Constants";

let FilterData = [
    {
        id: "ram",
        label: "RAM",
        children: [
            {
                id: RAM_ID_1,
                label: _2GB,
                isChecked: false
            },
            {
                id: RAM_ID_2,
                label: _3GB,
                isChecked: false
            },
            {
                id: RAM_ID_3,
                label: _4GB,
                isChecked: false
            },
            {
                id: RAM_ID_4,
                label: _6GB,
                isChecked: false
            }
        ]
    }, {
        id: "internal_memory",
        label: "Internal Memory",
        children: [
            {
                id: ROM_ID_1,
                label: "16 GB",
                isChecked: false
            },
            {
                id: ROM_ID_2,
                label: "32 GB",
                isChecked: false
            },
            {
                id: ROM_ID_3,
                label: "64 GB",
                isChecked: false
            }
        ]
    },
    {
        id: "screen_size",
        label: "Screen Size",
        children: [
            {
                id: SCREEN_ID_1,
                label: "5.2'",
                isChecked: false
            },
            {
                id: SCREEN_ID_2,
                label: "5.9'",
                isChecked: false
            },
            {
                id: SCREEN_ID_3,
                label: "6'",
                isChecked: false
            }
        ]
    },
    {
        id: "price",
        label: "Price",
        children: [
            {
                id: PRICE_ID_1,
                label: "<10,000",
                isChecked: false,
                low:9000,
                high:10000,
            },
            {
                id: PRICE_ID_2,
                label: "10,000 - 15,000",
                isChecked: false,
                low:10001,
                high:15000,
            },
            {
                id: PRICE_ID_3,
                label: "15,001 - 20,000",
                isChecked: false,
                low:15001,
                high:20000,
            },
            {
                id: PRICE_ID_4,
                label: "20,001 - 30,000",
                isChecked: false,
                low:20001,
                high:30000,
            },
            {
                id: PRICE_ID_5,
                label: ">30,000",
                isChecked: false,
                low:30000,
                high:40000,
            }

        ]
    }

]


export default FilterData;