const html = '<p>Olá mundo</p> <p>Olá de novo</p>'

console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy