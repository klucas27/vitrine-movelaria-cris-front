import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ProductsCards from '../ProductsCardViewer/ProductsCardViewer';
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
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null); // Novo estado
    const [showModal, setShowModal] = useState(false); // Novo estado
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/furniture/ativos`)
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

    // Handler para abrir o modal
    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Handler para fechar o modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-danger">Error: {error}</div>;
    if (!products.length) return <div className="text-center text-muted">Nenhum produto cadastrado no momento.</div>;

    return (
        <div className="container mt-0 p-3">
            <div className="row">
                {currentProducts.map((product: any) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex h-100" key={product.mov_id}>
                        <div style={{ width: '100%' }} onClick={() => handleProductClick(product)}>
                            <ProductsCards
                                mov_id={product.id}
                                imagem_url={product.imagem_url}
                                mov_nome={product.nome}
                                mov_descricao={product.descricao}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de detalhes do produto */}
            {showModal && selectedProduct && (
                <div className="modal show fade d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct.nome}</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedProduct.imagem_url} alt={selectedProduct.nome} className="img-fluid mb-3" />
                                <p><strong>Descrição:</strong> {selectedProduct.descricao}</p>
                                <p><strong>Cor:</strong> {selectedProduct.cor}</p>
                                <p><strong>Categoria:</strong> {selectedProduct.categoria}</p>
                                <p><strong>Material:</strong> {selectedProduct.material}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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