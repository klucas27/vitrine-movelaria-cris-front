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
        // Permitir apenas números no campo WhatsApp
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

        // Se estiver sen erros, prosseguir com o envio do formulário
        if (!Object.values(newErrors).some(Boolean)) {
            // Submit logic here

            alert('Formulário enviado com sucesso!');
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="mb-4">Entre em contato conosco</h2>
            <div className="mb-4">
                <h4>Central de Atendimento ao Cliente</h4>
                <p>(12) 99726-6069</p>
            </div>

            <div className="mb-4">
                <h4>Horário de Atendimento</h4>
                <p>Atendimento de Segunda à Sexta 8h às 18h e Sábado de 9h às 13h</p>
            </div>

            <div className="mb-4">
                <h4>E-mail</h4>
                <p>Entre em contato conosco através do e-mail <a href="mailto:email@email.com">email@email.com</a></p>
            </div>
            <div className="mb-4">
                <h4>Formulário de Contato</h4>
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
                            title="Informe seu Email"
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
                            title="Informe seu número de WhatsApp"
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
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;