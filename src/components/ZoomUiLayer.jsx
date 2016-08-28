import { MapLayer } from 'react-leaflet'
import React from 'react'

import LeafletLayerProxy from './LeafletLayerProxy'

class Layer extends React.Component {
    constructor(props) {
        super(props)

        this.state = { visible: true }

        this._reset = this._reset.bind(this)
        this.onMoveStart = this.onMoveStart.bind(this)
        this.onMoveEnd = this.onMoveEnd.bind(this)
    }

    componentWillMount() {
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
            dimensions: { x: size.x, y: size.y }
        })
    }

    componentDidMount() {
        this.updateCanvas()
    }
    componentDidUpdate() {
        this.updateCanvas()
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d')
        ctx.strokeStyle = 'rgba(255,255,255, 0.5)'

        const dimensions = this.state.dimensions
        const size = this.props.size

        const width = dimensions.x / size;
        const height = dimensions.y / size;

        ctx.clearRect(0, 0, dimensions.x, dimensions.y)

        for(let x = 0; x < size; x++) {
            let left = x * width
            for(let y = 0; y < size; y++) {
                let top = y * height
                ctx.strokeRect(left, top, left + width, top + height)
            }
        }
    }

    render() {
        // Moves the div back over the view.
        const transform = 'translate3d(' + this.state.position.x + 'px, ' + this.state.position.y + 'px, 0px)';
        const display = this.state.visible ? 'block' : 'none'

        return (
            <canvas
                ref="canvas"
                style={ { display: display,
                          transform: transform} }
                width={this.state.dimensions.x}
                height={this.state.dimensions.y}>
            </canvas>
        )
    }
}

export default class ZoomUiLayer extends MapLayer {
    componentWillMount() {
        super.componentWillMount()

        this.leafletElement = new LeafletLayerProxy(Layer, { size: 3 })
    }

    render () {
        return null
    }
}

