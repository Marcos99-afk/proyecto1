import { useState } from 'react'
import Tarjeta from './components/Tarjeta'

import './App.css'

const animales = [
  { id: 1, nombre: 'Perro' },
  { id: 2, nombre: 'Gato' },
  { id: 3, nombre: 'Conejo' },
  { id: 4, nombre: 'Ratón' },
  { id: 5, nombre: 'Caballo' },

]

const ofertas = [
  { id: 1, titulo: 'Oferta 1', descripcion: 'Descripción de la oferta 1', precio: 100, oferta: true },
  { id: 2, titulo: 'Oferta 2', descripcion: 'Descripción de la oferta 2', precio: 200, oferta: false },
  { id: 3, titulo: 'Oferta 3', descripcion: 'Descripción de la oferta 3', precio: 300, oferta: true },
  { id: 4, titulo: 'Oferta 4', descripcion: 'Descripción de la oferta 4', precio: 400, oferta: false },
  { id: 5, titulo: 'Oferta 5', descripcion: 'Descripción de la oferta 5', precio: 500, oferta: true },
  { id: 6, titulo: 'Oferta 6', descripcion: 'Descripción de la oferta 6', precio: 600, oferta: false },
]

function App() {
  return (
    <div className="container my-4">
      <h1>Mi primera aplicación React</h1>
      <Saludo nombre="Marcos" />
      <div className="card h-100">
        <div className="card-body">
          <span className="card-title">Animales</span>
          <span className="card-text">Lista de animales</span>
            <ul>
              {animales.map((animal) => (
                <li key={animal.id}>{animal.nombre}</li>
              ))}
            </ul>
        </div>
      </div>

       <div className="card h-100">
        <div className="card-body">
          <span className="card-title">Ofertas</span>
          <span className="card-text">Lista de ofertas</span>
            <ul>
              {ofertas.map((ofertas) => (
                <li key={ofertas.id}>
                  <Tarjeta titulo={ofertas.titulo} 
                  descripcion={ofertas.descripcion} 
                  precio={ofertas.precio} 
                  oferta={ofertas.oferta} 
                  />
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )

}

export default App
