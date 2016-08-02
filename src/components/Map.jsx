import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }
    render() {
        let position = this.props.position
        let markers = this.renderMarkers(this.props.markers)

        return (
            <Map center={position} zoom={13} onClick={this.onClick}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers}
            </Map>
        )
    }
    renderMarkers(markers) {
        return markers.map((marker) => {
            return (
                <Marker position={marker}>
                    <Popup>
                        <span>Markin' an' barkin'. WOOF.</span>
                    </Popup>
                </Marker>
            )
        })
    }
    onClick(event) {
        console.log('click', event.latlng)
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
