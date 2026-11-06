import React, { createContext, useContext} from "react"

const TemaContext = createContext('claro')

function Tema(){
    const [] = useContext(TemaContext)
}

export { TemaContext, TemaProvider }