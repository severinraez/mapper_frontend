import React from 'react';

class AppComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let from = this.props.from ? 'ab ' : ''
        let hourly = this.props.hourly ? '/h' : ''

        return (
            <span className="pricetag">
                {from}CHF {this.props.amount.toFixed(2)}{hourly}
            </span>
        )
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
