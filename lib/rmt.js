"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Remote = (function () {
    function Remote(remotePath, options) {
    }
    /**
     *
     */
    Remote.prototype.push = function () {
    };
    /**
     *
     */
    Remote.prototype.pull = function () {
    };
    return Remote;
}());
exports.default = Remote;
var RemoteBean = (function () {
    function RemoteBean(json) {
        deserialize(json, this);
    }
    Object.defineProperty(RemoteBean.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    return RemoteBean;
}());
function deserialize(json, instance) {
    for (var prop in json) {
        if (!json.hasOwnProperty(prop))
            continue;
        if (typeof json[prop] === 'object')
            deserialize(json[prop], instance[prop]);
        else
            instance[prop] = json[prop];
    }
}
//# sourceMappingURL=rmt.js.map