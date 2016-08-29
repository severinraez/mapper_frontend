import React from 'react'

import EmojiButtons from './AddUi/EmojiButtons'
import Save from './AddUi/Save'

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { selectedEmoji: null }
        this.emojiSelected = this.emojiSelected.bind(this)
        this.onSaveAbort = this.onSaveAbort.bind(this)
        this.onSaveCommit = this.onSaveCommit.bind(this)
    }
    emojiSelected(emojiName) {
        this.setState({ selectedEmoji: emojiName})
    }
    onSaveAbort() {
        this.setState({ selectedEmoji: null })
    }
    onSaveCommit(emojiName, comment) {
        console.log('save', emojiName, comment)
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
            <Save emoji={this.state.selectedEmoji}
                  onAbort={this.onSaveAbort}
                  onCommit={this.onSaveCommit} />
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
