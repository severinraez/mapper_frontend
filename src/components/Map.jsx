import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


class AppComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let position = this.props.position;
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
