var rect = document.querySelector("#centre");

rect.addEventListener("mousemove", function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangleLocation.left;

    if(insiderectval<(rectangleLocation.width/2))
    {
        var redcolor = gsap.utils.mapRange(
            0,
            rectangleLocation.width/2, 
            255, 
            0, 
            insiderectval
        );
        gsap.to(rect, {
            backgroundColor: 'rgb(${redcolor}, 0, 0)',
            ease: Power4,
            
        });
    }
    else{
        var bluecolor = gsap.utils.mapRange(
            rectangleLocation.width/2,
            rectangleLocation.width, 
            0, 
            255, 
            insiderectval
        );
        gsap.to(rect, { 
            backgroundColor: 'rgb(0, 0, ${bluecolor})',
            ease: Power4,
            
        });
        
    }
});
