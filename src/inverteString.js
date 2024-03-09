function inverteString(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

// String a ser invertida
const texto = "Olá, mundo!";
console.log("String original:", texto);
console.log("String invertida:", inverteString(texto));