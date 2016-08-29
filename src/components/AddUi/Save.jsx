import React from 'react'

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { comment: '', tags: [] }
    }
    render() {
        return (
            <div className="save">
                <input type="text" />
            </div>
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
