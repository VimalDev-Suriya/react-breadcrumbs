import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products').then(res => res.json()).then((data)=>{
            setProducts(data.products.slice(0, 9))
        })
    }, []);

    return <section>
        <h1>Welcome</h1>
        <span>Trending Products 🔥</span>
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

        <Link to="/products">
            <button style={{width: "100%", padding: 10}}>View All Products</button>
        </Link>
    </section>
}

export default HomeScreen