import React from 'react';
// import { Link } from 'react-router-dom';

function Contacts() {
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
                <p>Entre em contato conosco através do e-mail <a href="email@email.com">email@email.com</a></p>
            </div>
            <div className="mb-4">
                <h4>Formulário de Contato</h4>
                <form>
                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="name" name="name" required placeholder="Digite seu Nome" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            placeholder="Digite seu Email"
                            title="Informe seu Email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="WhatsApp" className="form-label">WhatsApp</label>
                        <input
                            type="text"
                            className="form-control"
                            id="whatsapp"
                            name="whatsapp"
                            required
                            placeholder="Digite seu número de WhatsApp"
                            title="Informe seu número de WhatsApp"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensagem</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={5}
                            required
                            placeholder="Descreva um pouco sobre o seu pedido..."></textarea>

                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    )

}

export default Contacts