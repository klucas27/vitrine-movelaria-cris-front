import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ListProductCreat: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/furniture/all`)
      .then((response: { data: any }) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja deletar este produto?')) {
      axios.delete(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/furniture/${id}`)
        .then(() => {
          setProducts(products.filter(p => p.id !== id));
        })
        .catch((error: any) => {
          alert('Erro ao deletar produto: ' + error.message);
        });
    }
  };

  const [editForm, setEditForm] = useState<any | null>(null);

  const handleEdit = (product: any) => {
    setSelectedProduct(product);
    setEditForm({
      vitNome: product.nome || '',
      vitDescricao: product.descricao || '',
      vitCategoria: product.categoria || '',
      vitMaterial: product.material || '',
      vitPreco: product.preco || '',
      vitImagem: product.imagem_url || '',
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setEditForm(null);
  };


  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!selectedProduct) return;
    try {
      await axios.put(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/furniture/update/${selectedProduct.id}`,
        {
          nome: editForm.vitNome,
          descricao: editForm.vitDescricao,
          categoria: editForm.vitCategoria,
          material: editForm.vitMaterial,
          preco: editForm.vitPreco,
          imagem_url: editForm.vitImagem,
        }
      );
      setShowModal(false);
      setSelectedProduct(null);
      setEditForm(null);
      fetchProducts();
    } catch (error: any) {
      alert('Erro ao atualizar produto: ' + (error.response?.data?.message || error.message));
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">Error: {error}</div>;
  if (!products.length) return <div className="text-center text-muted">Nenhum produto cadastrado no momento.</div>;

  return (
    <div className="container mt-0 p-3">
      <h2 className="mb-4">Gerenciar Produtos</h2>
      <div className="row">
        {products.map((product: any) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex h-100" key={product.id}>
            <div className="card w-100">
              <img src={product.imagem_url} className="card-img-top" alt={product.nome} style={{ height: 180, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{product.nome}</h5>
                <p className="card-text">{product.descricao}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(product)}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>Deletar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de edição (exemplo simples) */}
      {showModal && selectedProduct && (
        <div className="modal show fade d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Produto</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {editForm && (
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Nome *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="vitNome"
                        value={editForm.vitNome}
                        onChange={handleEditChange}
                        required
                        placeholder="Digite o nome do produto"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Descrição</label>
                      <textarea
                        className="form-control"
                        name="vitDescricao"
                        value={editForm.vitDescricao}
                        onChange={handleEditChange}
                        rows={2}
                        placeholder="Digite a descrição do produto"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Categoria</label>
                      <input
                        type="text"
                        className="form-control"
                        name="vitCategoria"
                        value={editForm.vitCategoria}
                        onChange={handleEditChange}
                        placeholder="Digite a categoria do produto"
                        title="Categoria do produto"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Material</label>
                      <input
                        type="text"
                        className="form-control"
                        name="vitMaterial"
                        value={editForm.vitMaterial}
                        onChange={handleEditChange}
                        placeholder="Digite o material do produto"
                        title="Material do produto"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Preço</label>
                      <input
                        type="number"
                        className="form-control"
                        name="vitPreco"
                        value={editForm.vitPreco}
                        onChange={handleEditChange}
                        step="0.01"
                        min="0"
                        placeholder="Digite o preço do produto"
                        title="Preço do produto"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Imagem (URL)</label>
                      <input
                        type="text"
                        className="form-control"
                        name="vitImagem"
                        value={editForm.vitImagem}
                        onChange={handleEditChange}
                        placeholder="Digite a URL da imagem"
                        title="URL da imagem do produto"
                      />
                    </div>
                  </form>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>Salvar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProductCreat;
