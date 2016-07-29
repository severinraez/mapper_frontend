const _ = require('underscore')

class Config {
    constructor(base) {
        this.data = base;
    }

    onChange(callback) {
        this.changeCallback = callback;
    }

    getScoped(key) {
        let scopedBase = this.data[key] || {}
        return new ScopedConfig(this, scopedBase, key);
    }

    merge(data) {
        _.extend(this.data, data)

        if(this.changeCallback) {
            this.changeCallback()
        }
    }

    getData() {
        return this.data;
    }
}

class ScopedConfig extends Config {
    constructor(parent, base, key) {
        super(base)
        this.parent = parent;
        this.key = key;
    }

    merge(data) {
        super.merge(data)

        this.parent.merge({ key: this.data })
    }
}

export default Config;
