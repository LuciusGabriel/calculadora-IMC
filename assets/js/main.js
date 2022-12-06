const valorPeso = document.querySelector('.peso')
const valorAltura = document.querySelector('.altura')
const btnCalculo = document.querySelector('.calcular')
const resultado = document.querySelector('.resultado')

const referenciaIMC = [
   {
    valor: 0,
    valorMaximo: 18.4,
    descricao: 'Magreza'
   },
   {
    valor: 18.5,
    valorMaximo: 24.9,
    descricao:'Normal'
   },
   {
    valor: 25,
    valorMaximo: 29.9,
    descricao:'Sobrepeso'
   },
   {
    valor: 30,
    valorMaximo: 39.9,
    descricao:'Obesidade'
   },
   {
    valor: 40,
    valorMaximo: 150,
    descricao:'Obesidade Grave'
   },
]

btnCalculo.addEventListener('click', calculaIMC)

function calculaIMC(peso, altura){
    if(valorPeso.value === '' || valorAltura.value === ''){
        alert('Favor preencher os campos')
    }else{  
        peso = valorPeso.value
        altura = valorAltura.value
        
        let valorIMC = peso/(altura**2)
        console.log(valorIMC.toFixed(2))

        if(valorIMC <= referenciaIMC[0].valorMaximo){
            resultado.innerHTML = `O seu IMC está em <strong>${valorIMC.toFixed(2)}</strong> e está classificado como <strong>${referenciaIMC[0].descricao}</strong>`
        }else if(valorIMC >= referenciaIMC[1].valor && valorIMC <= referenciaIMC[1].valorMaximo){
            resultado.innerHTML = `O seu IMC está em <strong>${valorIMC.toFixed(2)}</strong> e está classificado como <strong>${referenciaIMC[1].descricao}</strong>`
        }else if(valorIMC >= referenciaIMC[2].valor && valorIMC <= referenciaIMC[2].valorMaximo){
            resultado.innerHTML = `O seu IMC está em <strong>${valorIMC.toFixed(2)}</strong> e está classificado como <strong>${referenciaIMC[2].descricao}</strong>`
        }else if(valorIMC >= referenciaIMC[3].valor && valorIMC <= referenciaIMC[3].valorMaximo){
            resultado.innerHTML = `O seu IMC está em <strong>${valorIMC.toFixed(2)}</strong> e está classificado como <strong>${referenciaIMC[3].descricao}</strong>`
        }else if(valorIMC >= referenciaIMC[4].valor && valorIMC <= referenciaIMC[4].valorMaximo){
            resultado.innerHTML = `O seu IMC está em <strong>${valorIMC.toFixed(2)}</strong> e está classificado como <strong>${referenciaIMC[4].descricao}</strong>`
        }
        
    }
}