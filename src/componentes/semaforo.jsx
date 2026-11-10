import { useState, useEffect } from 'react'

function Semaforo() {
  const [segundos, setSegundos] = useState(0)
  const [ciclos, setCiclos] = useState(0)
  const [averiado, setAveriado] = useState(false) 
  const [luces, setLuces] = useState({ rojo: true, amarillo: false, verde: false })
  const [activo, setActivo] = useState(false) 

  useEffect(() => {

    if (activo) {
      const interval = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [activo])

    const iniciarSemaforo = () => {
        setActivo(true)
    }

        
    const funcionandoSemaforo = () => {
        if (!averiado && luces.rojo == true && segundos >= 4 && activo) {
            setLuces({ rojo: false, amarillo: true, verde: false })
        }else if (!averiado && luces.amarillo == true && segundos >= 1 && activo) {
            setLuces({ rojo: false, amarillo: false, verde: true })
        }else if (!averiado && luces.verde == true && segundos >= 3 && activo) {
            setLuces({ rojo: true, amarillo: false, verde: false })
            setCiclos((prevCiclos) => prevCiclos + 1)
        }
    }

    const detenerSemaforo = () => {
        setAveriado(true)
    }

    const reiniciarSemaforo = () => {
        setLuces({ rojo: true, amarillo: false, verde: false })
        setCiclos(0)
        setAveriado(false)
    }

    const repararSemaforo = () => {
        setAveriado(false)
    }

   return (
    <div>
      <h2>{luces.rojo ? 'Rojo' : ''}{luces.amarillo ? 'Amarillo' : ''}{luces.verde ? 'Verde' : ''}</h2>
      <h3>Ciclos: {ciclos}</h3>
      <h3>{averiado ? 'Averiado' : ''}</h3>
      <button onClick={iniciarSemaforo}>Avanzar</button>
      <button onClick={detenerSemaforo}>Averiar</button>
      <button onClick={repararSemaforo}>Reparar</button>
      <button onClick={reiniciarSemaforo}>Reset</button>
    </div>
  ) 

}  

export default Semaforo

