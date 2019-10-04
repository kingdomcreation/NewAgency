console.log("main.js loaded");

jQuery(document).ready(function(){
    console.log("jQuery ready");    
})

function button_click(){
    console.log("button_click was called");
}

jQuery("#button").on("click", button_click);