import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'
import CategoryCard from '../../components/CategoryCard/CategoryCard';

import ProductsList from '../../components/ProductsList/ProductsList'

function Home() {
  return (
    <>
      <div className='page-edit'>
        <section className="position-relative home-hero-section text-white">
          <div className="container home-selection-child mx-auto">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <h1>Você Sonha! <br /> E Nós Montamos!</h1>
                <Link to="/produtos" className="btn btn-primary home-hero-btn mt-3">Ver Produtos</Link>
              </div>
              <div className="col-12 col-md-6 text-center mt-3">
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

        <section className="py-5 bg-white">
          <h2 className="text-center mb-4 home-categories-title">Nossos Moveis já Montados</h2>
          <ProductsList pagination={false}></ProductsList>
        </section>
      </div>
    </>
  )
}

export default Home