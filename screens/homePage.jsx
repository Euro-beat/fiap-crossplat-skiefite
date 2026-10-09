import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

export default function HomePage() {

  const [exercisesJson, setExercisesJson] = useState(null);
  
    useEffect(() => {
      async function getExercises() {
        const response = await fetch("https://gist.githubusercontent.com/Euro-beat/8de4e6a7d08cc97c0b6d90c13ab3b088/raw/exercises.json");
        const json = await response.json();
        setExercisesJson(json);
      }
      getExercises();
      }, []
    );
  
    const [buttonsJson, setButtonsJson] = useState(null);
  
    useEffect(() => {
      async function getButtons() {
        const response = await fetch("https://gist.githubusercontent.com/Euro-beat/b40d667b483c42e051a74905bb20b24e/raw/exercisesButtons.json");
        const json = await response.json();
        setButtonsJson(json);
      }
      getButtons();
      }, []
    );

    const [activeCategory, setActiveCategory] = useState('cat1');
  
    if (!exercisesJson || !buttonsJson) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={50} color="#2F6783" />
          <Text style={styles.loadingText}>Carregando sua ficha de treinos...</Text>
        </View>
      );
    }
    
    const exerciciosFiltrados = buttonsJson["homePageExercises"].filter(ex => ex.categoriaId === activeCategory);
  
    /* console.log(exercisesJson['quadriceps']?.['title']);
    console.log(exercisesJson['costasBiceps']); */
  
    /*
    '?.' verifica se exercisesJson['quadriceps'] foi criado.
    O react costuma rodar as coisas dobrado para ver o sincronismo, e a primeira dá undefined
    */

  return (
    <View style={styles.mainContainer}>

    <Text style={styles.label}>Selecione uma lista de exercícios:</Text>

    <View>
      <FlatList
        data={buttonsJson["homePageCategories"]}
        horizontal // 👈 Transforma a lista em uma linha horizontal rolável
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isActive = item.id === activeCategory;
          return (
            <TouchableOpacity 
              style={[styles.botaoAba, isActive && styles.botaoAbaAtivo]}
              onPress={() => setActiveCategory(item.id)} // Muda o estado para o ID clicado
            >
              <Text style={[styles.textoAba, isActive && styles.textoAbaAtivo]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      >
      </FlatList>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  label: {

    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,

  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff', // Um fundo cinza escuro moderno
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15, // Cria um espaço de 15px entre o indicador e o texto
  },
  loadingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif', // Ou a fonte que preferir
  },
});