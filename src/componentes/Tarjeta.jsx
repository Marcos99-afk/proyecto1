function Tarjeta({ titulo, descripcion, precio }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">Precio: ${precio.toFixed(2)}</p>   
      </div>
    </div>
  )
}

export default Tarjeta