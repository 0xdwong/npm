function sayHi(){
    console.log('Hello world')
}

function config(obj={}){
    global.config = obj;
}

function translate(origin){
    return `translated by ${global.config.translator}: + origin`;
}

module.exports = {
    config,
    sayHi,
    translate
};