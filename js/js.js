let data = new Date();
//horário local
let hora = data.getHours();
let horario = new Date();
//minutos local
let min_atual = horario.getMinutes();
let falt_h, h_min, h_mil, min_hora_min;

var hora_id = document.getElementById('hora');

//se o intervalo de horários for verdadeiro...
if(hora >= 0 && hora < 12){
//envio a msg para pagina de boas vindas.
$("#boas-vindas").html(" Bom Dia!");
//adiciono classe no qual irá carregar a cor de fundo.
$("#cor-grad").addClass("c-m");
//inserindo texto avisando quando ocorrerá novo onload
hora_id.appendChild(document.createTextNode('12h'));
//subtraiu o horario que quero recarregar a pagina - a hora atual.
falt_h = (12 - hora);
//converto o horario calculado anteriormente em minutos
hora_min = (falt_h * 60);
//subtraiu os (horarios que restam convertidos em minutos - os minutos atuais).
min_hora_min = (hora_min - min_atual);
//passo para a variavel os minutos convertidos em milissegundos para setar na função setTimeout.
h_mil = (min_hora_min * 60000);
}

if(hora >= 12 && hora < 18){
$("#boas-vindas").html(" Boa Tarde!");
$("#cor-grad").addClass("c-t");
hora_id.appendChild(document.createTextNode('18h'));
falt_h = (18 - hora);
hora_min = (falt_h * 60);
min_hora_min = (hora_min - min_atual);
h_mil = (min_hora_min * 60000);
}

if(hora >= 18 && hora < 24){
$("#boas-vindas").html(" Boa Noite!");
$("#cor-grad").addClass("c-n");
hora_id.appendChild(document.createTextNode('0h'));
falt_h = (24 - hora);
hora_min = (falt_h * 60);
min_hora_min = (hora_min - min_atual);
h_mil = (min_hora_min * 60000);
}
//função que fara com que recarregue a pagina que recebera a variavel com valor dos milissegundos que restam para chegar no horario especifico
$(document).ready(function () {
    setTimeout(function () {
        window.location.reload(true);
    }, 	(h_mil));
});
//0 a variavel para efetuar novaente os calculos.
falt_h = 0;