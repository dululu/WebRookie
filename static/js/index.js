let div = document.querySelector('div')


let main = function() {
    div.addEventListener('contextmenu',function(event)
    {
        console.log(event.type);
    });
}

export {
    main
}
