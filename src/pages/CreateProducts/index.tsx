import React, { useState } from 'react';
import axios from 'axios';

interface Produto {
  vitNome: string;
  vitDescricao?: string;
  vitCategoria?: string;
  vitMaterial?: string;
  vitPreco?: string;
  vitImagem?: string;
}

const CadastroProduto: React.FC = () => {
  const [produto, setProduto] = useState<Produto>({
    vitNome: '',
    vitDescricao: '',
    vitCategoria: '',
    vitMaterial: '',
    vitPreco: '',
    vitImagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduto(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/furniture/createProduct`, {
        nome: produto.vitNome,
        descricao: produto.vitDescricao,
        categoria: produto.vitCategoria,
        material: produto.vitMaterial,
        preco: produto.vitPreco,
        imagem_url: produto.vitImagem,
      });
      alert('Produto cadastrado com sucesso!');
      setProduto({
        vitNome: '',
        vitDescricao: '',
        vitCategoria: '',
        vitMaterial: '',
        vitPreco: '',
        vitImagem: '',
      });
    } catch (error: any) {
      alert('Erro ao cadastrar produto: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Cadastrar Produto na Vitrine</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Nome *</label>
          <input
            type="text"
            className="form-control"
            name="vitNome"
            value={produto.vitNome}
            onChange={handleChange}
            required
            placeholder="Digite o nome do produto"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea
            className="form-control"
            name="vitDescricao"
            value={produto.vitDescricao}
            onChange={handleChange}
            rows={3}
            placeholder="Digite a descrição do produto"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <input
            type="text"
            className="form-control"
            name="vitCategoria"
            value={produto.vitCategoria}
            onChange={handleChange}
            placeholder="Digite a categoria"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Material</label>
          <input
            type="text"
            className="form-control"
            name="vitMaterial"
            value={produto.vitMaterial}
            onChange={handleChange}
            placeholder="Digite o material"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preço</label>
          <input
            type="number"
            className="form-control"
            name="vitPreco"
            value={produto.vitPreco}
            onChange={handleChange}
            step="0.01"
            min="0"
            placeholder="Digite o preço"
            title="Preço do produto"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagem (URL)</label>
          <input
            type="text"
            className="form-control"
            name="vitImagem"
            value={produto.vitImagem}
            onChange={handleChange}
            placeholder="Digite a URL da imagem"
            title="URL da imagem do produto"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
