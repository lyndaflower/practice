 
 $(document).ready(function(){
     $("button#green").click(function(){
         $("body").removeClass();
         $("body").addClass("green-background");
         });
        $("button#yellow").click(function(){
            $("body").removeClass();
             $("body").addClass("yellow-background");
            });
           $("button#red").click(function(){
                $("body").removeClass();
                 $("body").addClass("red-background")
             })
         });
$(document).ready(function(){
    $("button#hello").click(function(){         $("ul#user").children("li").first().click(function(){
           alert("hi");        })        $("ul#webpage").children("li").first().click(function(){             alert("hi")
        })
    });    $("button#goodbye").click(function(){        $("ul#user").prepend("<li>Goodbye</li>");       $("ul#webpage").prepend("Goodbye, dear user!</li>");
   });
    $("button#stop").click(function(){
         $("ul#user").prepend("<li>Stop copying me!</li>");
         $("ul#webpage").prepend("<li>Pardon me . I meant no offense</li>");
     });
 });
 var globalString = "This is a global variable";
 function sampleFunction() {
    alert(globalString);
    globalString = "This is a global variable update!!";
    alert(globalString);
 }
 alert(globalString);
 sampleFunction();
alert(globalString);
$(document).ready(function() {
    $("div#click-one").click(function(event) {
        whatToSay = "Hello";
        alert(whatToSay);
    });
    $("div#click-two").click(function(event){
        alert(whatToSay)
    });
});