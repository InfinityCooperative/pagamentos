function copiar() {
    var copiado = document.getElementById("idunico").value;

    if(navigator.clipboard.writeText(copiado));
    document.getElementById("idbotao").textContent = "Copiado";

    setInterval(function() {
        document.getElementById("idbotao").textContent = "Copiar";
    },3000
    );

    console.log(copiado);
}