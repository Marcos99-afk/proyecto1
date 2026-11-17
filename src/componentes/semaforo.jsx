import { useReducer, useEffect, useState } from 'react'

const estadoInicial = {
  luz: 'gris',
  averiado: false,
  ciclos: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'AVANZAR':
      if (state.averiado) return state
      if (state.luz === 'gris') return { ...state, luz: 'rojo' }
      if (state.luz === 'rojo') return { ...state, luz: 'verde' }
      if (state.luz === 'verde') return { ...state, luz: 'ambar' }
      return { ...state, luz: 'rojo', ciclos: state.ciclos + 1 }

    case 'AVERIA':
      return { ...state, averiado: true, luz: 'ambar' }

    case 'REPARAR':
      return { luz: 'rojo', averiado: false, ciclos: state.ciclos }

    case 'RESET':
      return estadoInicial

    default:
      throw new Error('Acción desconocida')
  }
}

function Semaforo() {
  const [state, dispatch] = useReducer(reducer, estadoInicial)
  const [segundos, setSegundos] = useState(0)
  const [parpadeo, setParpadeo] = useState(true)

  const luces = {
    gris: state.luz === 'gris',
    rojo: state.luz === 'rojo',
    ambar: state.luz === 'ambar',
    verde: state.luz === 'verde'
  }

  useEffect(() => {
    if (state.averiado || luces.gris) return

    const interval = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [state.averiado, luces.gris])

  useEffect(() => {
    if (state.averiado || luces.gris) return

    if (luces.rojo && segundos >= 4) {
      dispatch({ type: 'AVANZAR' })
      setSegundos(0)
    } else if (luces.verde && segundos >= 3) {
      dispatch({ type: 'AVANZAR' })
      setSegundos(0)
    } else if (luces.ambar && segundos >= 1) {
      dispatch({ type: 'AVANZAR' })
      setSegundos(0)
    }
  }, [segundos, luces.gris, luces.rojo, luces.verde, luces.ambar, state.averiado])

  useEffect(() => {
    if (!state.averiado) {
      setParpadeo(true)
      return
    }
    const blink = setInterval(() => setParpadeo((prev) => !prev), 500)
    return () => clearInterval(blink)
  }, [state.averiado])

  const avanzarSemaforo = () => {
    dispatch({ type: 'AVANZAR' })
    setSegundos(0)
  }

  const detenerSemaforo = () => {
    dispatch({ type: 'AVERIA' })
    setSegundos(0)
  }

  const repararSemaforo = () => {
    dispatch({ type: 'REPARAR' })
    setSegundos(0)
  }

  const reiniciarSemaforo = () => {
    dispatch({ type: 'RESET' })
    setSegundos(0)
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#222',
          width: '70px',
          margin: '0 auto',
          padding: '10px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: luces.rojo ? 'red' : '#555'
          }}
        />
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor:
              luces.ambar && (!state.averiado || parpadeo) ? 'orange' : '#555'
          }}
        />
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: luces.verde ? 'green' : '#555'
          }}
        />
    </div>
    <div>
      <h2>
        {luces.gris ? 'Gris' : ''}
        {luces.rojo ? 'Rojo' : ''}
        {luces.ambar && (!state.averiado || parpadeo) ? 'Ámbar' : ''}
        {luces.verde ? 'Verde' : ''}
      </h2>
      <h3>Ciclos: {state.ciclos}</h3>
      <h3>{state.averiado ? 'Averiado' : ''}</h3>

      <button onClick={avanzarSemaforo}>Avanzar</button>
      <button onClick={detenerSemaforo}>Averiar</button>
      <button onClick={repararSemaforo}>Reparar</button>
      <button onClick={reiniciarSemaforo}>Reset</button>
    </div>
  </div>
  )
}

export default Semaforo

