// ^ -> começa com
// $ -> termina com

const cpf = `
    254.224.877-45
    215.978.456-12
    047.258.369-96
    963.987.321-00
`

const ip = `
    0.0.0.0
    192.168.0.25
    10.10.5.12
    255.255.255.2551
`

const regExCPF = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g
const regExCPFmelhor = /(\d{3}\.){2}\d{3}\-\d{2}/g
console.log(cpf.match(regExCPFmelhor));

const regExIP = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g
console.log(ip.match(regExIP));