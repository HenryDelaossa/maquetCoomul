
/**
 * esta funcion obtiene los datos de la URL y los devuelve como un objeto JSON.
 * @param enlace - el link de la API
 * @returns a promise.
 */
const getData = async (enlace) => {
    const res = await fetch(enlace);
    if (res.status == 200) {
        return res.json()
    } else {
        console.log(res.status)
    }
}

export default getData