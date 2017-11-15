class Remote{


    constructor(){

    }

    connect(remotePath: string){
        return new RemoteBean({});
    }

}

class RemoteBean{
    private _name: string;

    constructor(json: Object){
        deserialize(json, this)
    }

    get name(): string{
        return this._name;
    }

    set name(newName: string){
        this._name = newName;
    }

}

function deserialize(json, instance) {
    for(let prop in json) {
        if(!json.hasOwnProperty(prop))
            continue;
        if(typeof json[prop] === 'object')
            deserialize(json[prop], instance[prop]);
        else
            instance[prop] = json[prop];
    }
}