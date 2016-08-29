import React from 'react'

import EmojiUrl from '../domain/EmojiUrl'

const emojiUrls = new EmojiUrl()

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { url: this._url(props.name)}
    }
    _url(name) {
        return emojiUrls.forIdentifier(name)
    }
    componentWillReceiveProps(props) {
        this.setState({ url: this._url(props.name)})
    }
    render() {
        return (
            <img src={this.state.url} className={this.props.className} />
        )
    }
    getImageUrl() {
        return this.state.url
    }
}

AppComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
}

export default AppComponent
