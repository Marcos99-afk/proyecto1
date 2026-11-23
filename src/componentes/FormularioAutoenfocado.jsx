import { useRef, useEffect, useState } from 'react'

function FormularioAutoenfocado({ comprobacion }) {
  const nombreInput = useRef(null)
  const [nombre, setNombre] = useState('')

  useEffect(() => {
    nombreInput?.current?.focus()
    if (nombreInput?.current?.value.length > 10){
        nombreInput?.current?.style.setProperty('color', 'red')
    }else{
        nombreInput?.current?.style.setProperty('color', 'black')
    }if (nombreInput?.current?.value=='Hola'){
        comprobacion(true)
    }else {
        comprobacion(false)
    }   
  }, [nombre])

  return (
    <form>
      <input type="text" className="form-control"
             ref={nombreInput} placeholder="Escribe tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button type="submit" className="btn btn-primary mt-2">Enviar</button>
    </form>
  )
}

export default FormularioAutoenfocado

