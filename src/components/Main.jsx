require('font-awesome-webpack')
require('normalize.css/normalize.css')
require('leaflet/dist/leaflet.css')
require('styles/App.scss')

import React from 'react'

import Cookie from 'js-cookie'
import restful, { fetchBackend } from 'restful.js'

import Map from 'components/Map'
import AddUi from 'components/AddUi'
import EmojiUrl from '../domain/EmojiUrl'

let yeomanImage = require('../images/yeoman.png')

const backendPort = 4567
const api = restful('http://' + window.location.hostname + ':' + backendPort, fetchBackend(fetch))

let citiesCollection = api.all('cities')

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.emojiUrls = new EmojiUrl()
    }

    componentDidMount() {
        citiesCollection.getAll().then((response) => {
            let cities = response.body().map((entity) => { return entity.data() })

            // For clustered markers: https://github.com/troutowicz/geoshare/blob/master/app/components/MarkerCluster.jsx

            let markers = cities.map((city) => { return this.coordinates(city) })
            let position = markers[0]

            this.setState({
                position: position,
                markers: markers
            })
        })
    }
    coordinates(city) {
        return [city.latitude, city.longitude]
    }
    render() {
        if(!this.state) {
            return ( <div></div> ) }

        return (
            <div className="main">
                <Map position={this.state.position} markers={this.state.markers} onClick={this.onClick} emojiUrls={this.emojiUrls}/>
                <AddUi emojiUrls={this.emojiUrls}/>
            </div>
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent

