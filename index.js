function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const func = () => {};
    return func;
}

function returnsAnAnonymousFunction() {

    return function() {};
}