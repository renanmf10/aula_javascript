// comentário

/* comentario
para finalizar colocar
*/


/*
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";  //<b>negrito, pego o id do html para colocar uma mensagem
}
*/
    /*alert("Obrigado por clicar") aparecer a mensagem
}*/
/*
function redirecionar(){
    window.open("https://www.torochurrasqueiras.com.br/"); //abrir um link em uma nova janela
    window.location.href = "https://www.torochurrasqueiras.com.br/"; // abrir um link na mesma pagina, pegando de html
}
*/

function trocar(elemento){ //()ou (elemento)>>
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse" //muda a mensagem, pega id do html sem o this
    //alert("trocar texto"); // caso queira abrir uma mensagem
    elemento.innerHTML = "Obrigado por passar o mouse"
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui" //ao tirar o mouse voltar a mensagem sem o this
    elemento.innerHTML = "Passe o mouse aqui"
}



/*
var d = new Date();
alert(d);
*/ 
//posso colocar tbm alert(getMonth()) Date,Minutes,Hours,Day - para datas, horas

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/
//repetição



/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;
}
*/
//repetição outra forma



/*var idade = prompt("Qual sua idade?")
var idede = 18;
if (idade >= 18){
    alert("Ok, você é meior de idade");
}else{
    alert("Proibido, menor de idade");
}
*/
//condição



/*var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/
//lista



/*var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["Maça", "Pêra", "Laranja"];
//lista.pop();
//lista.push("Uva");
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.join(" I "));




/*var nome = "Renan Fernandes";
var idade = "30";
var idade2 = "60";
var frase = "Brasil é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade+idade2);
//console.log(nome);
//console.log(nome+idade);
//console.log(frase.toUpperCase());
alert(frase.replace("Italia","Brasil"));
*/