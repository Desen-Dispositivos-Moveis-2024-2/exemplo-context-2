// components/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppContext } from '../contexts/AppContext';

export default function Footer() {
  const { usuario, tema, idioma } = useAppContext();
  const themeStyles = tema === 'claro' ? stylesClaro : stylesEscuro;

  return (
    <View style={[styles.footer, themeStyles.footer]}>
      <Text style={[styles.footerText, themeStyles.footerText]}>
        Usuário: {usuario.nome} | Tema: {tema} | Idioma: {idioma}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { padding: 16 },
  footerText: { fontSize: 12, textAlign: 'center' }
});

const stylesClaro = StyleSheet.create({
  footer: { backgroundColor: '#f2f2f2' },
  footerText: { color: '#666' }
});

const stylesEscuro = StyleSheet.create({
  footer: { backgroundColor: '#444' },
  footerText: { color: '#ccc' }
});
