// contexts/AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  debugger
  const [usuario, setUsuario] = useState({ nome: 'João da Silva', logado: true });
  const [tema, setTema] = useState('claro');
  const [notificacoes, setNotificacoes] = useState([
    { id: 1, mensagem: 'Bem-vindo!', lida: false },
    { id: 2, mensagem: 'Você tem uma nova mensagem.', lida: false }
  ]);
  const [idioma, setIdioma] = useState('pt-BR');

  const valor = {
    usuario,
    setUsuario,
    tema,
    setTema,
    notificacoes,
    setNotificacoes,
    idioma,
    setIdioma
  };

  return (
    <AppContext.Provider value={valor}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
