function ucs() {
    const ucsTxt = document.getElementById('ucsTempo')
    const inicio = new Date("2024-05-06")
    const atual = new Date()

    let mesesTrabalhados = (atual.getFullYear() - inicio.getFullYear()) * 12 + (atual.getMonth() - inicio.getMonth())
    
    ucsTxt.textContent = `${mesesTrabalhados} meses`
}

ucs()