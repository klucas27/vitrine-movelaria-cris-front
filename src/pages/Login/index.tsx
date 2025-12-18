import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        // Se autenticação for bem-sucedida:
        navigate('/cadastrar-produto');
    };

    return (
        <div className="login-page d-flex justify-content-center align-items-center vh-100 bg-light">
            <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-white">
                <h1 className="mb-4 text-center">Admin Login</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuário</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
