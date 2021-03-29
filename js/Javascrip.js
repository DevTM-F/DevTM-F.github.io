var isOpen = false;
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

function OpenIframe() {
    if(isOpen == true) {
        document.getElementsByTagName("a") = true;
    }

}

$('#lnk').click(function () {
    $.ajax({ url: "http:DevTM-F.github.io", type: 'POST',
        beforeSend: function () { $("#resultado").html("Carregando..."); }
    }).done(function (msg) { $("#resultado").html(msg); })
    .fail(function (jqXHR, textStatus, msg) {
        console.log('A requisição falhou e retornou com a seguinte mensagem: ' + msg);
    });
});