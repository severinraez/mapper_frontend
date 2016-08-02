import Emojione from 'emojione'

class EmojiUrl {
    constructor() {
        this.urls = {}
        console.log('construct')
    }

    forIdentifier(identifier) {
        if(this.urls[identifier]) {
            return this.urls[identifier] }

        this.urls[identifier] = this._url(identifier)
        return this.urls[identifier]
    }

    // @return [String] the url of the emoji
    _url(identifier) {
        let html = Emojione.toImage(identifier)

        let match = html.match(/src="(.*)"/)

        if(!match) {
            throw 'Cannot get URL for emoji "' + identifier + '"' }

        return match[1]
    }
}

export default EmojiUrl
