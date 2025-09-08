import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from '../components/ProductsList'

function Products() {
    return (
        <div className="container mt-0 p-5">
            <h2 className="">Nossos Moveis já Montados</h2>
            <ProductsList></ProductsList>
        </div>
    );
}

export default Products;