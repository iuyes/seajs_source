define(function (require, exports, module){
    var core = {};
    core.person = {
        name : "Tonni",
        age : 24,
        company : "Joyu"
    };
    core.say = function (){
        console.info("Hi, My name is " + this.person.name + ", I'm " + this.person.age + " years old, I'm working at " + this.person.company + ".");
    }

    return core;
});
