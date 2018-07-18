import React from 'react';
import Filter from './Filter';


class Sidebar extends React.Component {

    render() {

        return (
            <div className={'Sidebar'}>
                <Filter HashMap={this.props.HashMap} cbFunction={this.props.cbFunction}
                        component={this.props.component}/>
            </div>
        );

    }
}


export default Sidebar;