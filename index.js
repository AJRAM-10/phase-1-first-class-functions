function receivesAFunction(callback) {
    callback()
}

function tonysFunction() {
    console.log('TONY!!!')
}

function returnsANamedFunction() {
    return tonysFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('whatever')
    }
}