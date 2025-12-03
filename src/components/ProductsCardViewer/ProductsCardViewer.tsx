import React from 'react';
import './ProductsCardViewer.css'

interface ProductsCardsProps {
    mov_id: string;
    imagem_url: string;
    mov_nome: string;
    mov_descricao: string;
    cor?: string;
    tipo?: string;
    material?: string;
}


const ProductsCards: React.FC<ProductsCardsProps> = ({ mov_id, imagem_url, mov_nome, mov_descricao }) => {
    return (
        <div>
            <div className="card shadow-sm container-card">
                <img src={imagem_url} className="card-img-top img-card-mod" alt={mov_nome} />
                <div className="card-body">
                    <h5 className="card-title bg-white">{mov_nome}</h5>
                    {mov_descricao && (
                        <p className="card-text">{mov_descricao}</p>
                    )}
                </div>
            </div>
        </div>
    )
}


export default ProductsCards;