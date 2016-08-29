import React from 'react'

import EmojiButtons from './AddUi/EmojiButtons'
import Save from './AddUi/Save'

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { selectedEmoji: null }
        this.emojiSelected = this.emojiSelected.bind(this)
    }
    emojiSelected(emojiName) {
        this.setState({ selectedEmoji: emojiName})
    }
    render() {
        return (
            <div className="ui-container add-ui">
                <div className="main ui-area">
                    { this.renderSaveUi() }
                </div>
                <div className="right-sidebar ui-area">
                   <EmojiButtons onSelected={this.emojiSelected}/>
                </div>
            </div>
        )
    }
    renderSaveUi() {
        if(!this.state.selectedEmoji) {
            return '';
        }

        return (
            <Save emoji={this.state.selectedEmoji} />
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
