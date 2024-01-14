import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListingScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products').then(res => res.json()).then((data)=>{
            setProducts(data.products)
        })
    }, []);

    if(!products){
        return <div>
            Loading....
        </div>
    }

    return <section>
        <h1>Products 🔥</h1>
        <div className="product-grid">
            {products?.map((product) => (
                <div key={product.id} className="product-card">
                    <Link to={`/products/${product.id}`}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    </section>
}

export default ProductListingScreen