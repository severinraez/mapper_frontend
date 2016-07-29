require('font-awesome-webpack')
require('normalize.css/normalize.css')
require('styles/App.scss')

import React from 'react'

import Cookie from 'js-cookie'

let yeomanImage = require('../images/yeoman.png')

class AppComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main">
                Let's go.
            </div>
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
