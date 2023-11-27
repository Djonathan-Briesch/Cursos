const bnt = document.querySelector("#btn")

bnt.addEventListener("click",()=>{
    const conteudo = document.querySelector("#table").innerHTML
    console.log(conteudo);

    let estilo = "<style>"
    estilo += "table {width: 100%;font: 25px Calibri;}"
    estilo += "table,th,td {border: 2px solid black; border-collapse: collapse;padding: 4px 8px; text-align: center;}"
    estilo += "</style>"

    const win = window.open('','','height = 700, width = 700')

    win.document.write('<html><head>')
    win.document.write('<title>Cfb</title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')

    win.print()
    win.close()
})