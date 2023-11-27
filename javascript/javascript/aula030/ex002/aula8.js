// Para grupos > $1 $2 $3 -> Retrovisores
// No match() -> \1 \2 \3

// . nao representa quebra de linha
// ?: Nao conta grupos

const html = `<p 
data-teste="teste" 
class="teste teste">
Olá Mundo
</p> <p>Olá Mundo</p> <div>Sou a div</div>`

console.log(html);
console.log(html.match(/<(\w+).*?>.+?<\/\1>/gs));