import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ProductsCards from './ProductsCardViewer';
import axios from 'axios';

const ITEMS_PER_PAGE = 6;
const ITEMS_NO_PAGINATION = 9;

interface ProductsListProps {
    pagination?: boolean;
}

function ProductsList({ pagination = true }: ProductsListProps) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
            setLoading(true);
            axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:3003'}/furniture`)
                .then((response: { data: any }) => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch((error: any) => {
                    console.error('Erro ao buscar produtos:', error);
                    setError(error.message);
                    setLoading(false);
                });
    }, []);

    // Pagination calculation
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = pagination
        ? products.slice(startIdx, startIdx + ITEMS_PER_PAGE)
        : products.slice(0, ITEMS_NO_PAGINATION);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSeeAll = () => {
        navigate('/produtos');
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-danger">Error: {error}</div>;

    return (
        <div className="container mt-0 p-3">
            <div className="row">
                {currentProducts.map((product: any) => (
                    <div className="col-md-4 mb-4" key={product.mov_id}>
                        <ProductsCards
                            mov_id={product.mov_id}
                            imagem_url={product.imagem_url}
                            mov_nome={product.mov_nome}
                            mov_descricao={product.mov_descricao}
                        />
                    </div>
                ))}
            </div>
            
            {/* Bootstrap Pagination */}
            {pagination && totalPages > 1 && (
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Anterior
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, idx) => (
                            <li key={idx + 1} className={`page-item${currentPage === idx + 1 ? ' active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(idx + 1)}>
                                    {idx + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Próxima
                            </button>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Button to view all products when pagination is false */}
            {!pagination && products.length > ITEMS_NO_PAGINATION && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={handleSeeAll}>
                        Ver todos os produtos
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductsList;