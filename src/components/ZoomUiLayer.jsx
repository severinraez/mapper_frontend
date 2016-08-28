import { MapLayer } from 'react-leaflet'
import { DomUtil } from 'leaflet'

import React from 'react'
import ReactDOM from 'react-dom';

class Layer extends React.Component {
    constructor(props) {
        super(props)

        this.state = { visible: true }

        this._reset = this._reset.bind(this)
        this.onMoveStart = this.onMoveStart.bind(this)
        this.onMoveEnd = this.onMoveEnd.bind(this)
    }

    componentWillMount() {
        // Add a viewreset event listener for updating layer's position.
        this._map().on('viewreset', this._reset, this)
        this._map().on('resize', this._reset, this)
        this._map().on('movestart', this.onMoveStart, this)
        this._map().on('moveend', this.onMoveEnd, this)

        this._reset()
    }

    _map() {
        return this.props.map;
    }

    onMoveStart () {
        this.setState({ visible: false })
    }

    onMoveEnd () {
        this.setState({ visible: true })
        this._reset()
    }

    _reset() {
        const topLeft = this._map().containerPointToLayerPoint([0, 0])
        const size = this._map().getSize()

        this.setState({
            position: { x: topLeft.x, y: topLeft.y },
            dimensions: { x: size.x, y: size.x }
        })
    }

    render() {
        // Moves the div back over the view.
        const transform = 'translate3d(' + this.state.position.x + 'px, ' + this.state.position.y + 'px, 0px)';
        const display = this.state.visible ? 'block' : 'none'

        return (
            <div style={ { display: display,
                           width: this.state.dimensions.x + 'px',
                           height: this.state.dimensions.y + 'px',
                           transform: transform} }>Hello</div>
        )
    }
}

class LeafletLayerProxy {
    onAdd(map) {
        this.map = map;

        // TODO Can we import L somehow instead of relying on the global variable?
        this.element = L.DomUtil.create('div', 'zoom-layer leaflet-zoom-ui-layer-hide')
        this.map.getPanes().overlayPane.appendChild(this.element)

        ReactDOM.render(<Layer map={map}/>, this.element)
    }

    onRemove(map) {
        ReactDOM.unmountComponentAtNode(this.element)

        this.map.getPanes().overlayPane.removeChild(this.element)
        this.map.off('viewreset', this._reset, this)
    }
}

export default class ZoomUiLayer extends MapLayer {
    componentWillMount() {
        super.componentWillMount()

        this.leafletElement = new LeafletLayerProxy()
    }

    render () {
        return null
    }
}

