import React, { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { FaEnvelope } from "react-icons/fa";
import { PiLinkedinLogoBold, PiWhatsappLogoBold, PiXLogoBold } from "react-icons/pi";


export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8" >
        <h1 className="text-2xl font-semibold mt-4 mb-8 text-center">Contacte as nossas plataformas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-black-700 mb-2">Nome:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Digite seu nome"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-black-700 mb-2">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Digite seu email"
                className="w-full p-2 border border-black-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-black-700 mb-2">Mensagem:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                placeholder="Escreva uma mensagem"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </form>
          <div className="bg-cover bg-center bg-blue-500 bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8">
            <h3 className="text-lg font-semibold mb-4 text-black bg-center">Siga nossas as plataformas</h3>
            <div className="flex items-center mb-4 text-bg-black">
              <PiWhatsappLogoBold className="text-2xl mr-2" />
              <span>WhatsApp +258 844 634 368</span>
            </div>
            <div className="flex items-center mb-4 text-bg-black">
              <FaEnvelope className="text-2xl mr-2" />
              <span>jessyduarte82@gmail.com</span>
            </div>
            <div className="flex items-center mb-4 text-bg-black">
              <PiLinkedinLogoBold className="text-2xl mr-2" />
              <span>Jéssica Duarte</span>
            </div>
            <div className="flex items-center mb-4 text-bg-black">
              <PiXLogoBold className="text-2xl mr-2" />
              <span>Jey@Duarte</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
