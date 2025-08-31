import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style/home.css'
import CategoryCard from '../components/CategoryCard';

function Home() {
    return(
        <>
            <section className="position-relative home-hero-section text-white py-5">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                      <h1>Você Sonha! <br /> E Nós Montamos!</h1>
                      <Link to="/produtos" className="btn btn-primary home-hero-btn mt-3">Ver Produtos</Link>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                      <img src="/image-section1-home.png" alt="Logo" className="img-fluid home-hero-img" />
                    </div>
                  </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container">
                  <h2 className="text-center mb-4 home-categories-title">Categorias</h2>
                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                    <CategoryCard title="Cozinhas" image="/card-cozinha.png" />
                    <CategoryCard title="Quartos" image="/card-quarto.png" />
                    <CategoryCard title="Salas" image="/card-sala.png" />
                    <CategoryCard title="Banheiros" image="/card-banheiro.png" />
                  </div>
                </div>
            </section>
        </>
    )
}

export default Home