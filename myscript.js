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

    // before and after
    $("#demo").before("<i>Some Title</i>");
    $("#demo").after("<b>Welcome</b>");

    // add new element
    var txt = $("<p></p>").text("Hi");
    $("#demo").after(txt);


    // add and remove class
    $("div").addClass("header");
    $("div").addClass("class1 class2 class3");
    $("div").removeClass("class1");

    // toggle class
    $("button").click(function() {
        $("p").toggleClass("red");
    });


    // css function
    alert($("p").css("background-color"));
    $("p").css("background-color", "blue");
    $("p").css({"background-color": "red", "font-size": "200%"});//json


    // Dimensions
    $("div").css("background-color", "red");
    $("div").width(100);//px
    $("div").height(100);
    var txt = "";
    txt += "width: " + $("div").width() + " ";
    txt += "height: " + $("div").height() + "<br/>";
    txt += "innerWidth: " + $("div").innerWidth() + " ";
    txt += "innerHeight: " + $("div").innerHeight() + "<br/>";
    txt += "outerWidth: " + $("div").outerWidth() + " ";
    txt += "outerHeight: " + $("div").outerHeight();
    $("div").html(txt);


     
    // DOM Traversal
    var e = $("p").parent();
    e.css("border", "2px solid red");

    var e = $("p").parents();
    e.css("border", "2px solid red");

    // empty, remove and hide
    $("div").empty();
    $("span").remove();
    $("h3").empty();


    // Handling Events
    $("#demo").click(function() {
        $("body").html(Date());
    });

    // Common Events
    $("#name").keydown(function() {
        $("#msg").html($("#name").val());
    });
    /*
        Mouse Events:
        click occurs when an element is clicked.
        dblclick occurs when an element is double-clicked.
        mouseleave occurs when the mouse pointer leaves the selected element.
        mouseenter occurs when the mouse pointer is over (enters) the selected element.
        mouseover occurs when the mouse pointer is over the selected element.

        Keyboard Events:
        keydown occurs when a keyboard key is pressed down.
        keyup occurs when a keyboard key is released.

        Form Events:
        submit occurs when a form is submitted.
        change occurs when the value of an element has been changed.
        focus occurs when an element gets focus.
        blur occurs when an element loses focus.

        Document Events: 
        ready occurs when the DOM has been loaded.
        resize occurs when the browser window changes size.
        scroll occurs when the user scrolls in the specified element.
    */
    // add two events 
   $( "p" ).on( "click dblclick", function() {
    alert("clicked");
   });

   // remove event handlers
   $("div").on("click", function() { 
    alert('Hi there!'); 
    }); 
    $("div").off("click");



    /*
        The Event Object
        Every event handling function can receive an event object, 
        which contains properties and methods related to the event:
        pageX, pageY ==> the mouse position (X & Y coordinates) at the time the event occurred,
        relative to the top left of the page.
        type ==> the type of the event (e.g. "click").
        which ==> the button or key that was pressed.
        data ==> any data that was passed in when the event was bound.
        target ==> the DOM element that initiated the event.
        preventDefault() ==> prevent the default action of the event (e.g., following a link).
        stopPropagation() ==> Stop the event from bubbling up to other elements.
    */
   $( "a" ).click(function(event) {
    alert(event.pageX);
    event.preventDefault();
    });

    // Trigger Events

    $("div").click(function () {
        alert("Clicked!");
    });
    $("div").trigger("click");

    // Effects
    $("p").click(function() {
        $("div").toggle(1000);
    });

    $("p").click(function() {
        $("div").fadeToggle(1000);
    });

    $("p").click(function() {
        $("div").slideToggle(500);
    });

    $("p").click(function() {
        $("div").slideDown(500);
    });

    $("p").click(function() {
        $("div").slideUp(500);
    });

    $("div").click(function() {
        $("div").animate({width: '250px'}, 1000);
    });

    // To stop an animation before it is finished,
    // jQuery provides the stop() method.

    $("div").animate({
        width: '+=250px',
        height: '+=250px'
      }, 1000);




    var div = $("div");
    div.animate({opacity: 1});
    div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
    div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
    div.animate({opacity: 0.5});




});