import { useEffect, useState } from 'react';
import '../App.css';
function Products() {
  const [products, setProducts] = useState([])
  const fakeShop = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const res = await data.json()

    setProducts(res)
  }

  useEffect(() => {
    fakeShop();
  }, [])
  return (
    <>

      <div className="container d-flex justify-content-center mx-auto row mt-5">
        <h3 className="shop-header mb-5 text-center">latest Products Shop Now</h3>
        {
          products.map((value) => {
            return (
              <div className="card col-md-4 mb-3 mx-3" key={value.id}>
                <img src={value.image} className="card-img-top img-fluid" alt="clothes" />
                <div className="card-body">
                  <h5 className="card-title">{value.category}</h5>
                  <p className="card-text">{value.title}</p>
                  <a href="/" className="btn btn-primary">${value.price}</a>
                </div>
              </div>
            );

          })
        }
      </div>

    </>
  );
}

export default Products;