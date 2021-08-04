$(function() {
    var timer;
    var opacity;
    $("#start").click(function(){
        let width = $('#width').val();
        let growthSmount = $('#growthAmount').val();
        let growthrate = $('#growthRate').val();
        let numberOfCircle = $('#numberOfCircle').val();
        for(let i = 0; i < numberOfCircle; i++){
            createCircle(width, i * 100);
        }
        $("#container").css("margin", "auto");
        eventHandler();
        if(!timer){
            timer = setInterval(changeSize, growthrate, growthSmount);
        }
    });
    function createCircle(width, pos){
        width += "px";
        $("#container")
            .append(
                $("<span>", {
                    "css": {
                        "width": width,
                        "height": width,
                        "background-color": `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                        "border-radius": width,
                        "margin": "auto",
                        "text-align": "center",
                        "position": "absolute",
                        "left": Math.floor(Math.random() * 1080) + "px",
                    }
                }
            ).attr('id', 'circ' + pos)
        );   
    }
    function changeSize(value){
        $("span")
            .css({
                "height": ((idx, old) => parseInt(old) + parseInt(value) + "px"),
                "width": ((idx, old) => parseInt(old) + parseInt(value) + "px"),
                "border-radius": ((idx, old) => parseInt(old) + parseInt(value) + "px")
            }); 
    }
    function eventHandler(){
        let time;
        $("#container > span").hover(function(){
            if(!opacity) {
                opacity = 1;
            }
            time = setInterval(opaque, 250, this, opacity)
        },
        function(){
            $(this).css("opacity", "1");
            clearInterval(time);
        });

        $("#container > span").click(function(){
            $(this).hide()
        });
    }
    function opaque(arg, opacity){
        opacity -= 0.5;
        $(arg).css("opacity", opacity)
    }
});



