import React, {Component} from 'react';

class ProductListData extends Component {

    render() {
        let x = this.props.component;
        let HashMap = this.props.HashMap;

        return (

            <div className={"pro_div"}>
                <div className={'img_div'}>
                    <img className={""} src={x.img} alt={""}/>
                </div>
                <h3>{x.label}</h3>
                <h4>{"RS." + [x.price]}</h4>
                <div className={'all_basic'}>
                    <p>{HashMap["ram"].find(o => o.id === x.ram).label}</p>
                    <p>{HashMap["internal_memory"].find(o => o.id === x.internal_memory).label}</p>
                    <p>{HashMap["screen_size"].find(o => o.id === x.screen_size).label}</p>
                    <p>{x.processor}</p>
                    <p>{x.color}</p>

                </div>
            </div>
        );
    }
}

export default ProductListData;
