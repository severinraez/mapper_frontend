import React from 'react'
import ReactDOM from 'react-dom';
import { DomUtil } from 'leaflet'

/*
 Use a React component as a leaflet layer.

 When a Proxy is added as a layer to leaflet, it instantiates its componentClass.
 If the layer is removed, the layerComponentClass is unmounted.
 */
export default class LeafletLayerProxy {
    constructor(componentClass, componentProps) {
        this.componentClass = componentClass
        this.componentProps = componentProps
    }

    onAdd(map) {
        this.map = map;

        // TODO Can we import L somehow instead of relying on the global variable?
        this.element = L.DomUtil.create('div', 'zoom-layer leaflet-zoom-ui-layer-hide')
        this.map.getPanes().overlayPane.appendChild(this.element)

        this.componentProps.map = map
        const component = React.createElement(this.componentClass, this.componentProps)

        ReactDOM.render(component, this.element)
    }

    onRemove(map) {
        ReactDOM.unmountComponentAtNode(this.element)

        this.map.getPanes().overlayPane.removeChild(this.element)
        this.map.off('viewreset', this._reset, this)
    }
}
