import React from 'react'

import EmojiButtons from 'components/AddUi/EmojiButtons'

class AppComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="ui-container add-ui">
                <EmojiButtons emojiUrls={this.props.emojiUrls} />
            </div>
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
