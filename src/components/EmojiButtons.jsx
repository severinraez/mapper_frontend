import React from 'react'
import Emojione from 'emojione'
import classnames from 'classnames'

const EMOJIS = [':smile:', ':slight_smile:', ':unamused:', ':frowning2:', ':angry:']

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { expanded: false }

        this.toggleExpanded = this.toggleExpanded.bind(this)
    }
    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        let buttons =  EMOJIS.map((emoji) => { return this.renderButton(emoji) })

        const smileUrl = this.props.emojiUrls.forIdentifier(':slight_smile:')
        const frownUrl = this.props.emojiUrls.forIdentifier(':frowning2:')

        return (
            <div className={classnames('emoji-buttons', { 'expanded' : this.state.expanded })}>
                <a className="button expand" href="#" onClick={this.toggleExpanded}>
                    <img src={frownUrl} />
                    <img src={smileUrl} />
                </a>
                { buttons }
            </div>
        )
    }
    renderButton(emoji) {
        const url = this.props.emojiUrls.forIdentifier(emoji)

        return (
            <a key={emoji} className="button add" href="#">
                <img src={url} />
            </a>
        )
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
