document.addEventListener('dblclick', function (e) {
    e.preventDefault();
});

document.addEventListener("touchstart", function(e){
    e.preventDefault();
});


document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false);