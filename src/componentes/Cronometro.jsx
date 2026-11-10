import { useState, useEffect } from 'react'

function Cronometro() {
  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(false)       

  useEffect(() => {

    if (activo) {
      const interval = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [activo])

  const iniciarCronometro = () => {
    setActivo(true)
  } 

   const detenerCronometro = () => {
    setActivo(false)
  }

  const reiniciarCronometro = () => {
    setActivo(false)
    setSegundos(0)
  }

  function formatoSegundos(segundos) {
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const segundosRestantes = segundos % 60
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`
  }

  return (
    <div>
      <h2>{formatoSegundos(segundos)}</h2>
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={detenerCronometro}>Detener</button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  ) 
}

export default Cronometro