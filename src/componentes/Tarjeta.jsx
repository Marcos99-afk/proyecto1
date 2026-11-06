function Tarjeta({ titulo, descripcion, precio, oferta }) {
  return (
    <div className="card">
      <div className="card-body">
        {oferta && <div className="badge bg-danger">Oferta</div>}
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text" float="end">Precio: ${precio.toFixed(2)}</p>   
      </div>
    </div>
  )
}

export default Tarjeta