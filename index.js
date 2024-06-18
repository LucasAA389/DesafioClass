var nomeHeroi = "Lucas";
var quantidadeExperiencia = 10003;
var nivel;

if(quantidadeExperiencia <= 1000){
    nivel = "Ferro";
};
if(quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000){
    nivel = "Bronze";
};
if(quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000){
    nivel = "Prata";
};
if(quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000){
    nivel = "Ouro";
};
if(quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000){
    nivel = "Platina";
};
if(quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000){
    nivel = "Ascendente";
};
if(quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000){
    nivel = "Imortal";
};
if(quantidadeExperiencia > 10000){
    nivel = "Radiante";
};

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);