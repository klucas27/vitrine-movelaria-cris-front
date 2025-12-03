import React, { useState } from 'react';

function Contacts() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        whatsapp: false,
        message: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'whatsapp') {
            const onlyNumbers = value.replace(/\D/g, '');
            setForm({ ...form, [name]: onlyNumbers });
        } else {
            setForm({ ...form, [name]: value });
        }
        setErrors({ ...errors, [name]: false });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            name: form.name.trim() === '',
            email: form.email.trim() === '',
            whatsapp: form.whatsapp.trim() === '',
            message: form.message.trim() === ''
        };
        setErrors(newErrors);

        if (!Object.values(newErrors).some(Boolean)) {
            alert('Formulário enviado com sucesso!');
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row g-4">
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h2 className="mb-3 text-primary">Entre em contato conosco</h2>
                            <div className="mb-3">
                                <h5 className="mb-1 text-secondary">Central de Atendimento ao Cliente</h5>
                                <p className="mb-0 fs-5"><i className="bi bi-telephone"></i> (12) 99726-6069</p>
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-1 text-secondary">Horário de Atendimento</h5>
                                <p className="mb-0">Segunda à Sexta 8h às 18h<br />Sábado de 9h às 13h</p>
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-1 text-secondary">E-mail</h5>
                                <p className="mb-0">
                                    <a href="mailto:email@email.com" className="text-decoration-none text-primary">
                                        email@email.com
                                    </a>
                                </p>
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-1 text-secondary">Endereço</h5>
                                <p className="mb-0">
                                    R. José Leopoldo Cordeiro, 439 - Vila Nunes, Lorena - SP, 12603-190<br />
                                    <a
                                        href="https://www.google.com/maps/place/R.+Jos%C3%A9+Leopoldo+Cordeiro,+439+-+Vila+Nunes,+Lorena+-+SP,+12603-190"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none text-primary"
                                    >
                                        Ver no Google Maps
                                    </a>
                                </p>
                            </div>
                            <div className="mb-3">
                                <iframe
                                    title="Localização"
                                    src="https://www.google.com/maps?q=R.+Jos%C3%A9+Leopoldo+Cordeiro,+439+-+Vila+Nunes,+Lorena+-+SP,+12603-190&output=embed"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, borderRadius: '0.5rem' }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="mb-4 text-primary">Formulário de Contato</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Nome <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control${errors.name ? ' is-invalid' : ''}`}
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Digite seu Nome"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">Campo obrigatório.</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        E-mail <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control${errors.email ? ' is-invalid' : ''}`}
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Digite seu Email"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">Campo obrigatório.</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="whatsapp" className="form-label">
                                        WhatsApp <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        className={`form-control${errors.whatsapp ? ' is-invalid' : ''}`}
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        placeholder="Digite seu número de WhatsApp"
                                        value={form.whatsapp}
                                        onChange={handleChange}
                                    />
                                    {errors.whatsapp && (
                                        <div className="invalid-feedback">Campo obrigatório.</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Mensagem <span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <textarea
                                        className={`form-control${errors.message ? ' is-invalid' : ''}`}
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        placeholder="Descreva um pouco sobre o seu pedido..."
                                        value={form.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && (
                                        <div className="invalid-feedback">Campo obrigatório.</div>
                                    )}
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;