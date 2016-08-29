import React from 'react'
import Emoji from '../Emoji'

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { comment: '', tags: [] }

        this.onCommit = this.onCommit.bind(this)
    }
    onCommit() {
        this.props.onCommit(this.props.emoji, this.refs.comment.value)
    }
    render() {
        return (
            <div className="save">
                <div className="dialog">
                    <Emoji name={this.props.emoji}/>
                    <span className="decorative-quote">&ldquo;</span>
                    <input ref="comment" type="text" placeholder='Bla bla bla #taggedi #tag' className="commentary"/>
                    <span className="decorative-quote">&rdquo;</span>
                    <div className="send">
                        <p className="hint">
                            Dieses Emoji wird an deiner momentanen Position hinzugefügt.
                        </p>
                        <a className="action" onClick={this.props.onAbort}>
                            <Emoji name=":negative_squared_cross_mark:" />
                        </a>
                        <a className="action" onClick={this.onCommit}>
                            <Emoji name=":white_check_mark:" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
