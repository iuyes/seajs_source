seajs.config({
    base : "/js/",
    alias : {
        "$" : "/3rd/jquery-debug"
    },
    preload : [
        "$"
    ],
    paths : {
        "3rd" : "/3rd/"
    }
});
