var i = setInterval(function(){
    clearInterval(i);
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 1000);

$('img').click(function(){
    document.getElementById("modal").style="display: block"; 
});

$('span').click(() => {
    document.getElementById("modal").style="display: none";
})


clickOut();

function clickOut() {
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
