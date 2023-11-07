import React from 'react';

function SortedProductList({ products }) {
  const sortedProducts = [...products].sort((a, b) => b.rating.rate - a.rating.rate);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Productos Ordenados</h2>
      <div className="row justify-content-center"> {}
        {sortedProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4"> {}
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} /> {
}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <p className="card-text">Descripción: {product.description}</p>
                <p className="card-text">Rating: {product.rating.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortedProductList;