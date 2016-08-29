import React from 'react'
import classnames from 'classnames'

import Emoji from '../Emoji'

const EMOJIS = [':smile:', ':slight_smile:', ':unamused:', ':frowning2:', ':angry:']

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { expanded: false }

        this.toggleExpanded = this.toggleExpanded.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded })
    }
    onClick(name) {
        this.props.onSelected(name)
    }
    render() {
        let buttons =  EMOJIS.map((emoji) => { return this.renderButton(emoji) })

        return (
            <div className={classnames('emoji-buttons', { 'expanded' : this.state.expanded })}>
                <a className="button expand" href="#" onClick={this.toggleExpanded}>
                    <Emoji name=':slight_smile:' />
                    <Emoji name=':frowning2:' />
                </a>
                { buttons }
            </div>
        )
    }
    renderButton(emoji) {
        const clickHandler = () => { this.onClick(emoji) }

        return (
            <a key={emoji} className="button add" onClick={clickHandler}>
                <Emoji name={emoji} />
            </a>
        )
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
