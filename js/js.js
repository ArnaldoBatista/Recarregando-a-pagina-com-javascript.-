/* == Por favor não peço nenhum tipo de retribuição apenas que deixe este comentário,
   == referente aos créditos do autor boa sorte a todos.
   == Email: arnaldo.1565@hotmail.com
   == GitHub: ArnaldoBR.
*/

let data = new Date();
//horário local
let hora = data.getHours();
let horario = new Date();
//minutos local
let min_atual = horario.getMinutes();
let falt_h;
let h_min;
let h_mil;
let min_hora_min;

//verifico se o horario atual esta nos intervalos que quero calcular.
if(hora >= 0 && hora < 12){
//envio a msg para pagina de boas vindas.
$("#boas-vindas").html(" Bom Dia!");
//subtraiu o horario que quero recarregar a pagina - a hora atual.
falt_h = (12 - hora);
//converto o horario calculado anteriormente em minutos
hora_min = (falt_h * 60);
//subtraiu os (horarios que restam convertidos em minutos - os minutos atuais) -0.1 antes do programa ler novamente o algoritmo.
min_hora_min = ((hora_min - min_atual) - 0.1);
//passo para a variavel os minutos convertidos em milissegundos para setar na função setTimeout.
h_mil = (min_hora_min * 60000);
}
//mesmo exemplo da condição anterior
if(hora >= 12 && hora < 18){
$("#boas-vindas").html(" Boa Tarde!");
falt_h = (18 - hora);
hora_min = (falt_h * 60);
min_hora_min = ((hora_min - min_atual) - 0.1);
h_mil = (min_hora_min * 60000);
}
//mesmo exemplo da condição anterior
if(hora >= 18 && hora < 24){
$("#boas-vindas").html(" Boa Noite!");
falt_h = (24 - hora);
hora_min = (falt_h * 60);
min_hora_min = ((hora_min - min_atual) - 0.1);
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
