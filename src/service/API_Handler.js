
export default class APIHandler {
    _keysRequeried = [
        ['url', []],
        ['method', []],
        ['header', []],
        ['payload', [{
            'method': ['POST', 'PUT', 'PATCHl']
        }]]
    ];
    constructor(_payload) {
        this._validate(_payload);
        Object.defineProperties(this, _payload);
    }
    /**
     * @readonly
     * @private
     */
    _validate(_payload) {
        if (typeof _payload !== 'object' && _payload instanceof Date && _payload === null) {
            throw new Error(`${typeof _payload} is not valid payload`);
        }
        for (const key in _payload) {
            if (Object.hasOwnProperty.call(_payload, key)) {
                const element = _payload[key];
                _payload[key] = {
                    value: element,
                    writable: true
                }
            }
        }
    }

    async exec() {
        const response = await fetch(this.url, {
            method: this.method,
            credentials: "include",
            headers: this.headers,
        });
        if (response.status >= 300) {
            throw new Error(response.statusText);
        }
        this._data = await response.json();
        return true;
    }

    get responseObject() {
        return this._data;
    }
}