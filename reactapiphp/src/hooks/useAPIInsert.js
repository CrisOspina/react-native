// Valida y registra usuario en la base de datos
export const useAPIInsert = (name, email, password) => {
  function registrarUsuario() {
    if (name === '' && email === '' && password === '') {
      return alert('Todos los campos son obligatorios')
    }
    INSERT_USER_POST(name, email, password)
  }

  return { onPress: registrarUsuario }
}

const INSERT_USER_POST = async (name, email, password) => {
  // const ipCesde = 'http://172.18.72.217:8089/'
  const ip = 'http://192.168.1.74:8089/'
  const URL = `${ip}react-api-php/Registration_api.php`
  const POST = 'POST'
  const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  const BODY = JSON.stringify({
    user_name: name,
    user_email: email,
    user_password: password,
  })

  await fetch(URL, {
    method: POST,
    headers: HEADERS,
    body: BODY,
  })
    .then(response => response.json())
    .then(responseJson => {
      // Showing response message coming from server after inserting records.
      // alert(responseJson) movil
      alert(responseJson)
    })
    .catch(error => {
      console.error(error)
    })
}
