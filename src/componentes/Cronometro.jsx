import { useState, useEffect } from 'react'

const estadoInicial = {
  segundos: 0,
  activo: false
}


function reducer(state, action) {
  switch (action.type) {
    case 'INICIAR':
      return { ...state, activo: true }
    case 'DETENER':
      return { ...state, activo: false }
    case 'REINICIAR':
      return { ...state, segundos: 0, activo: false }
    case 'INCREMENTAR_SEGUNDOS':
      return { ...state, segundos: state.segundos + 1 }
    default:
      return state
  }
}

function Cronometro() {   
  const [estadoInicial, dispatch] = useState(estadoInicial)


  useEffect(() => {

    if (activo) {
      const interval = setInterval(() => {
        dispatch({ type: 'INCREMENTAR_SEGUNDOS' })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [activo])

  const iniciarCronometro = () => {
    dispatch({ type: 'INICIAR' })
  }

   const detenerCronometro = () => {
    dispatch({ type: 'DETENER' })
  }

  const reiniciarCronometro = () => {
    dispatch({ type: 'REINICIAR' })
  }

  function formatoSegundos(segundos) {
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const segundosRestantes = segundos % 60
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`
  }

  return (
    <div>
      <h2>{formatoSegundos(estadoInicial.segundos)}</h2>
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={detenerCronometro}>Detener</button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  ) 
}

export default Cronometro