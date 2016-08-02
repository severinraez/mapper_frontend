import React from 'react';
import Emojione from 'emojione'

const EMOJIS = [':smile:', ':slight_smile:', ':unamused:', ':frowning2:', ':angry:']

class AppComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let buttons =  EMOJIS.map((emoji) => { return this.renderButton(emoji) })

        return (
            <div className="emoji-buttons">
                { buttons }
            </div>
        )
    }
    renderButton(emoji) {
        const url = this.props.emojiUrls.forIdentifier(emoji)

        return (
            <a key={emoji} className="button" href="#">
                <img src={url} />
            </a>
        )
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
