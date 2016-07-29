require('font-awesome-webpack')
require('normalize.css/normalize.css')
require('leaflet/dist/leaflet.css')
require('styles/App.scss')

import React from 'react'

import Cookie from 'js-cookie'

import Map from 'components/Map'

let yeomanImage = require('../images/yeoman.png')

class AppComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main">
                <Map position={[51.505, -0.09]} />
            </div>
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
