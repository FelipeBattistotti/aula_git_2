const imobiliaria = require('./imobiliaria')

const vendaDeMoradia = (imobiliaria = []) => {
  const data = new Date ()
  const hora = data.getHours()
  const minutos = data.getMinutes()
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()

  imobiliaria.casas.forEach(casas => {
    if (casas.vendida === true)
          casas.data =
            `Vendida às ${hora}:${minutos}, na data ${dia}/${mes}/${ano}`
  })
  return imobiliaria
}

console.log(vendaDeMoradia(imobiliaria))
