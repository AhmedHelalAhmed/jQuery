/*
// when document ready
$(document).ready(function() {
   // here your code
});
 */


$(function() {
    // change the text content and you can put HTML tags
    $("#start").html("Go!"); 

    // change the text content you can not put html tags
    $("#start").text("Go!"); 

    // Selectors
    $("div");  // selects all <div> elements

    $("#test"); // select the element with the id="test"

    $(".menu"); //selects all elements with class="menu"

    // more Selectors
    $("div.menu");  // all <div> elements with class="menu"

    $("p:first");  // the first <p> element
    
    $("h1, p"); // all <h1> and all <p> elements
    
    $("div p"); // all <p> elements that are descendants of a <div> element
    
    $("*");  // all elements of the DOM

    $("h1","h2","h3"); // all <h1>, <h2> and <h3> elements

    $("h1:first"); // first <h1> element

    $("h1:last"); // last <h1> element

    $("h1:last"); // last <h1> element

    $("b:first-child"); // all <b> that are the first child of their parent

    $("b:last-child"); // all <b> that are the last child of their parent

    $("div:nth-child(2)"); // all <div> elemtns that are 2nd child of their parent

    $("div > p"); // all <p> elements that are a direct child of a <div> element

    $("span p"); // all <p> elements that are descendants of a <span> element

    $("ul li:eq(2)"); // the third element in a list (index starts at 0)

    $(":contains('solo')"); // all elements which contain the text 'solo'

    $("[src]"); // all elements with a src attribute

    $(":input"); // all input elements

    $(":text"); // all input elements with type = "text"

    alert($("#name").val()); // get the value of the input

    






});