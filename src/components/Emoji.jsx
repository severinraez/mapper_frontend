import React from 'react'

import EmojiUrl from '../domain/EmojiUrl'

const emojiUrls = new EmojiUrl()

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.url = emojiUrls.forIdentifier(this.props.name)
    }
    render() {
        return (
            <img src={this.url} />
        )
    }
    getImageUrl() {
        return this.url
    }
}

AppComponent.propTypes = {
    name: React.PropTypes.string.isRequired
}

export default AppComponent
