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
        const icon = L.icon({
            iconUrl: this.props.emojiUrls.forIdentifier(':smile:'),
            iconSize: [32, 32]
        })

        const comment = "Markin' an' barkin'. WOOF"
        const tags = ['summer', 'lovelife', 'mainstream']

        return markers.map((marker) => {
            return (
                <Marker position={marker} icon={icon}>
                    <Popup>
                        <span>
                            { comment }<br />
                            { this.renderTags(tags) }
                        </span>
                    </Popup>
                </Marker>
            )
        })
    }
    renderTags(tags) {
        return tags.map((tag) => {
            return (<strong key={tag}>#{tag}&nbsp;</strong>)
        })
    }
    onClick(event) {
        console.log('clicked map at:', event.latlng)
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
