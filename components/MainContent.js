// components/MainContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppContext } from '../contexts/AppContext';

export default function MainContent() {
  const { tema, setTema, idioma, setIdioma } = useAppContext();
  const themeStyles = tema === 'claro' ? stylesClaro : stylesEscuro;
  debugger
  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          onPress={() => setTema(tema === 'claro' ? 'escuro' : 'claro')} 
          style={[styles.button, themeStyles.button]}
        >
          <Text style={[styles.buttonText, themeStyles.buttonText]}>Alternar Tema</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setIdioma(idioma === 'pt-BR' ? 'en-US' : 'pt-BR')} 
          style={[styles.button, themeStyles.button]}
        >
          <Text style={[styles.buttonText, themeStyles.buttonText]}>Alternar Idioma</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.contentText, themeStyles.contentText]}>
        {idioma === 'pt-BR' ? 'Este é o conteúdo principal da aplicação.' : 'This is the main content of the application.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  buttonsContainer: { flexDirection: 'row', marginBottom: 16, justifyContent: 'center' },
  button: { 
    paddingVertical: 10, 
    paddingHorizontal: 16, 
    borderRadius: 8, 
    marginHorizontal: 8 
  },
  buttonText: { fontWeight: 'bold', fontSize: 14 },
  contentText: { fontSize: 16, textAlign: 'center', marginTop: 16 }
});

const stylesClaro = StyleSheet.create({
  container: { backgroundColor: '#ffffff' },
  button: { backgroundColor: '#007AFF' },
  buttonText: { color: '#fff' },
  contentText: { color: '#333' }
});

const stylesEscuro = StyleSheet.create({
  container: { backgroundColor: '#2c2c2c' },
  button: { backgroundColor: '#555' },
  buttonText: { color: '#fff' },
  contentText: { color: '#ccc' }
});
