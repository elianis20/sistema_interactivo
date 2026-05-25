function start() {
    // Solicitar los datos al usuario
    const usuario = prompt("Ingrese su nombre");
    let edad = Number(prompt("Ingrese su edad"))
    // valida que los datos edad sean numeros 
        if(isNaN(edad)){
            console.error("Error: Por favor, ingresa una edad válida en números.");
            return;
        }
        // condicinales y mensaje dinámico
        if(edad < 18){
            alert(`Hola ${usuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);

        }
        else if(edad >= 18){
                alert(`Hola ${usuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
            }
}
