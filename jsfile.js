
$(document).ready(function(){
    $(".box").hover(function(){
        $(this).css("transform", "scale(1.2)"); /* Increase the size on hover */
    }, function(){
        $(this).css("transform", "scale(1)"); /* Reset size when not hovered */
    });
});


<!-- <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"> -->
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
