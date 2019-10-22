export const useListar = tipo => {
  function listar() {
    if (tipo === '') {
      return alert('Todos los campos son obligatorios')
    }
    LISTAR(tipo)
  }

  return { onPress: listar }
}

const LISTAR = async tipo => {
  // const ipCesde = 'http://172.18.72.217:8089/'
  const URL = 'http://localhost:8089/api-velandia/momento2react/'
  const POST = 'POST'
  const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  const BODY = JSON.stringify({ tipo: tipo })

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
