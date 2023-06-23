const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const periodo = `${meses[(new Date()).getMonth()+1]} de ${(new Date ()).getFullYear()}`

const input = document.querySelector("#input")
const recibos = document.querySelector(".recibos")

console.log(periodo)

input.addEventListener('change', () => {
    readXlsxFile(input.files[0]).then((info) => {
        info.forEach((funcionario) => {
            for (i=0; i<funcionario.length; i++) {
                if (funcionario[i] == null) {
                    funcionario[i] = 0
                }
            }
            recibos.innerHTML +=
            `
                <div class="recibo">
                    <p class="destaque"> Recibo de vale alimentação - ${periodo} </p>
                    <p> Matrícula: ${funcionario[0]} </p>
                    <p> Nome: ${funcionario[1]} </p>
                    <p> Saldo de dias inicial: ${funcionario[2]} </p>
                    <p> Valor diário: R$ ${funcionario[3]} </p>
                    <p> Acréscimos: ${funcionario[4]} </p>
                    <p> Descontos: ${funcionario[5]} </p>
                    <p> Saldo de dias final: ${funcionario[6]} </p>
                    <p class="destaque"> Valor total: R$ ${funcionario[7]} </p>
                </div>
            `
        })
    })
})