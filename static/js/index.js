

let main = function() {
    let $div = $('div');
    $div.on('click',function() {
        console.log("click div")
        $div.off('click');
    })
    
};

export {
    main
}
