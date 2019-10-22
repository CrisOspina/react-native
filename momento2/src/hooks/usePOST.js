export const usePOST = (tipo, nroplaca, marca, valor) => {
  function registrarVehiculo() {
    if (tipo === '' && placa === '' && marca === '' && valor === '') {
      return alert('Todos los campos son obligatorios')
    }
    INSERT_USER_POST(tipo, nroplaca, marca, valor)
  }

  return { onPress: registrarVehiculo }
}

const INSERT_USER_POST = async (tipo, nroplaca, marca, valor) => {
  // const ipCesde = 'http://172.18.72.217:8089/'
  const URL = 'http://localhost:8089/api-velandia/momento2react/'
  const POST = 'POST'
  const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  const BODY = JSON.stringify({
    tipo: tipo,
    nroplaca: nroplaca,
    marca: marca,
    valor: valor,
  })

  await fetch(URL, {
    method: POST,
    headers: HEADERS,
    body: BODY,
  })
    .then(res => {
      return res.json()
    })
    .then(json => {
      console.log(json)
    })
    .catch(err => console.log(err))
}
