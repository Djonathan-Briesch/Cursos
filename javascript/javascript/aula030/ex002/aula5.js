const alfabeto =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghigklmnopqrstuvwxyz @! 0123456789"

// [abc] -> conjunto [^] -> negação
// [0-9] Menor para maior
// \u para unicode

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));

console.log(alfabeto.match(/[^a-zA-Z0-9]+/g));
