let contador = 0
let prato
let precoPrato
let bebida
let precoBebida
let sobremesa
let precoSobremesa

function escondido() {
  document.querySelector('.telaConfirmacao').classList.toggle('escondido')
}

function verifica() {
  if (contador === 3) {
    document.querySelector('.enviar').classList.remove('escondido')
    document.querySelector('.espera').classList.add('escondido')
  } else {
    document.querySelector('.enviar').classList.add('escondido')
    document.querySelector('.espera').classList.remove('escondido')
  }
}

function selecionarPrato(elemento) {
  let selecionado = document.querySelector('.selecionado1')
  if (selecionado == null) {
    elemento.classList.add('selecionado1')
    contador++
    prato = elemento.querySelector('h6').innerHTML
    precoPrato = elemento.querySelector('h5').innerHTML
    precoPrato = Number(precoPrato.slice(3).replace(',', '.'))
    verifica()
  } else {
    if (elemento.classList.contains('selecionado1')) {
      elemento.classList.remove('selecionado1')
      contador--
      verifica()
    } else {
      selecionado.classList.remove('selecionado1')
      elemento.classList.add('selecionado1')
      prato = elemento.querySelector('h6').innerHTML
      precoPrato = elemento.querySelector('h5').innerHTML
      precoPrato = Number(precoPrato.slice(3).replace(',', '.'))
      verifica()
    }
  }
}

function selecionarBebida(elemento) {
  let selecionado = document.querySelector('.selecionado2')
  if (selecionado == null) {
    elemento.classList.add('selecionado2')
    contador++
    bebida = elemento.querySelector('h6').innerHTML
    precoBebida = elemento.querySelector('h5').innerHTML
    precoBebida = Number(precoBebida.slice(3).replace(',', '.'))
    verifica()
  } else {
    if (elemento.classList.contains('selecionado2')) {
      elemento.classList.remove('selecionado2')
      contador--
      verifica()
    } else {
      selecionado.classList.remove('selecionado2')
      elemento.classList.add('selecionado2')
      bebida = elemento.querySelector('h6').innerHTML
      precoBebida = elemento.querySelector('h5').innerHTML
      precoBebida = Number(precoBebida.slice(3).replace(',', '.'))
      verifica()
    }
  }
}

function selecionarSobremesa(elemento) {
  let selecionado = document.querySelector('.selecionado3')
  if (selecionado == null) {
    elemento.classList.add('selecionado3')
    contador++
    sobremesa = elemento.querySelector('h6').innerHTML
    precoSobremesa = elemento.querySelector('h5').innerHTML
    precoSobremesa = Number(precoSobremesa.slice(3).replace(',', '.'))
    verifica()
  } else {
    if (elemento.classList.contains('selecionado3')) {
      elemento.classList.remove('selecionado3')
      contador--
      verifica()
    } else {
      selecionado.classList.remove('selecionado3')
      elemento.classList.add('selecionado3')
      sobremesa = elemento.querySelector('h6').innerHTML
      precoSobremesa = elemento.querySelector('h5').innerHTML
      precoSobremesa = Number(precoSobremesa.slice(3).replace(',', '.'))
      verifica()
    }
  }
}
function confirmarPedido() {
  document.querySelector('.nomePrato').innerHTML = prato
  document.querySelector('.nomeBebida').innerHTML = bebida
  document.querySelector('.nomeSobremesa').innerHTML = sobremesa
  document.querySelector('.precoPrato').innerHTML = `R$ ${precoPrato
    .toFixed(2)
    .toString()
    .replace('.', ',')}`
  document.querySelector('.precoBebida').innerHTML = `R$ ${precoBebida
    .toFixed(2)
    .toString()
    .replace('.', ',')}`
  document.querySelector('.precoSobremesa').innerHTML = `R$ ${precoSobremesa
    .toFixed(2)
    .toString()
    .replace('.', ',')}`
  document.querySelector('.total').innerHTML = `R$ ${(
    precoPrato +
    precoBebida +
    precoSobremesa
  )
    .toFixed(2)
    .toString()
    .replace('.', ',')}`
  document.querySelector('.telaConfirmacao').classList.toggle('escondido')
}
function enviar() {
  let nome = prompt('Qual é o seu nome?')
  let endereco = prompt('Qual é o endereço da entrega?')
  let mensagem = window.encodeURIComponent(
    `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(
      precoPrato +
      precoBebida +
      precoSobremesa
    )
      .toFixed(2)
      .toString()
      .replace('.', ',')}\n\nNome: ${nome}\nEndereço: ${endereco}`
  )

  window.open(`https://wa.me/+5518999999999?text=${mensagem}`)
  document.querySelector('.telaConfirmacao').classList.toggle('escondido')
}
