// lookahead

const lookahead = `
    ONLINE 192.168.0.1 ABCDEF inactive
    OFFLINE 192.168.0.2 ABCDEF active
    ONLINE 192.168.0.3 ABCDEF active
    ONLINE 192.168.0.4 ABCDEF active
    OFFLINE 192.168.0.5 ABCDEF active
    OFFLINE 192.168.0.6 ABCDEF inactive
`

console.log(lookahead);

// (?= ) -> Positive lookahead (retorna Frases que tem x sem retornar x)

console.log(lookahead.match(/.+(?=[^in]active)/gim));

// (?! ) -> Negative lookahead (retorna Frases que nao tem x sem retornar x)

console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// lookbehind

// (?<= ) -> Positive lookbhind (retorna Frases começão x sem retornar x)

console.log(lookahead.match(/(?<=online\s+).*/gim));

// (?<= ) -> Negative lookbhind (retorna Frases não começão x)

console.log(lookahead.match(/^.*(?<!online.*)$/gim));