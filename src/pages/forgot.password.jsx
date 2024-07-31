import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Header } from "../components/header";
import { Footer } from "../components/footer";


export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/auth/forgot-password",
                 {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error("Failed to send reset email");
            }

            const result = await response.json();
            setMessage(result.message); 

           
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Recuperação de Senha</h2>
                    
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    {message && <p className="text-green-500 text-center mb-4">{message}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <span className="underline">Enviar email de recuperação</span>
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="mb-2">Perdeu a sua password?</p>
                        <a href="/forgot-email" className="text-indigo-600 hover:text-indigo-800">Envie para seu email.</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ForgotPassword;