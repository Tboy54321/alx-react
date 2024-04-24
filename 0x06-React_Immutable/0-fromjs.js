const Immutable = require('immutable');

function getImmutableObject(object) {
    const immutableMap = Immutable.fromJS(object);
    return immutableMap;
}

const myObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableMap = getImmutableObject(myObject);
console.log(immutableMap);