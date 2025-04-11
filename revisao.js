//declarando variaveis dos herois 
let pikachu = 80;
let Charmander = 80;

//controle do jogo
let rodada = 1;

//controle dos ataques
let ataquepikachu = 0;
let ataqueCharmander = 0;

//enquanto os dois estiverem vivos, faça a luta.
while (pikachu > 0 && Charmander > 0) {
    console.log("🔁 Rodada", rodada);

//Gerar golpes aleatorios.
ataquepikachu = Math.floor(Math.random(0)  * 25)
ataqueCharmander = Math.floor(Math.random(0) * 18)

//Aplicar os golpes
pikachu = pikachu - ataqueCharmander
Charmander = Charmander - ataquepikachu

//Exibir info de ataque
console.log("🧡 Charmander usou chama ardente", ataqueCharmander, "de dano!");
console.log("⚡🐹  pikachu usou choque do trovão", ataquepikachu, "de dano!");

//Mostrar a energia restante
console.log("❤️ Vida de pikachu:", pikachu)
console.log("❤️‍🔥 Vida de Charmander: ", Charmander)
console.log("--------------------------------");

//Ir para a proxima rodada
rodada++;
}
//Calcular os resultados
if (pikachu <= 0 && Charmander <= 0) {
    console.log("😱 Empate! Os dois foram pro chão ao mesmo tempo!")
}else if(pikachu <= 0){
    console.log('Charmander ganhou!')
}else{
    console.log("pikachu ganhou")
}