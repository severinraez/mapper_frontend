import React from 'react'
import Emoji from '../Emoji'

class AppComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = { comment: '', tags: [] }
    }
    render() {
        return (
            <div className="save">
                <div className="dialog">
                    <Emoji name={this.props.emoji}/>
                    <input type="text" placeholder='Bla bla bla...' className="commentary"/>
                    <div className="send">
                        <p className="hint">
                            Dieses Smiley wird an deiner jetztigen Position hinzugefügt.
                        </p>
                        <a className="action" onClick={this.onAbort}>
                            <Emoji name=":negative_squared_cross_mark:" />
                        </a>
                        <a className="action" onClick={this.onConfirm}>
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
