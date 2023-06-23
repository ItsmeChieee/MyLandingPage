document.addEventListener("DOMContentLoaded", 
function(event){
    var dataText = ["a Designer.", "a Photographer.", 
    "a Web Developer.", "Dhensel Formales."];
     
    
      function typeWrite(text, i, fnCallback) {
        if( i < text.length ) {
            document.querySelector("span").innerHTML =
              text.substring (0, i + 1) + "<span aria-hidden='true'></span>";
        
              setTimeout(function () {
                typeWrite(text, i + 1, fnCallback);
              }, 100);
        } else if (typeof fnCallback == "function") {
            setTimeout(fnCallback, 500);
        }
      }
       
      function StartTextAnimation(i){
        if (typeof dataText[i] === "undefined" || 
        dataText[i] === null) {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 200);
        } else {
            if (i < dataText[i].length) {
                typeWrite(dataText[i], 0, function () {
                   StartTextAnimation(i + 1); 
                });
            }
        }
      }

      StartTextAnimation(0);
});