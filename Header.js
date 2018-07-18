import React from "react";

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         FilterText: " "
    //     };
    // }
    render() {
        return (
            <header>
                <div className="topheader">
                    <div className="leftside">
                        <img src={"./images/header.png"} alt=""/>
                        <h5>awesome store</h5>
                    </div>
                    <form className={"secondpart"} id={"adv-search"} >
                        <input type="search" className="form-control" placeholder="Search..."
                         onChange={this.props.searchFunction} />
                    </form>
                </div>
            </header>
        );
    }
}
export default Header;