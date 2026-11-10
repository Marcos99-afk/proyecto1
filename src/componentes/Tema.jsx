import React, { createContext, useContext, useState} from "react"

const TemaContext = createContext('claro')

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro') 

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  )
}

export function Tema(){
   const contexto = useContext(TemaContext)
   return contexto
}

export function BotonTema() {
  const { tema, setTema } = Tema()

  return (
    <div>
      <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
        Cambiar tema
      </button>
    </div>
  )
}

export { TemaContext }