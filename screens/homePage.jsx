import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useEffect, useState } from 'react';

export default function HomePage() {
  const navigation = useNavigation(); 

  const [appData, setappData] = useState(null);
  
    useEffect(() => {
      async function getExercises() {
        const response = await fetch("https://gist.githubusercontent.com/Euro-beat/9356acf9edc8507f9adeeba2981d8621/raw/skiefite.json");
        const json = await response.json();
        setappData(json);
      }
      getExercises();
      }, []
    );

    const [activeCategory, setActiveCategory] = useState('cat1'); 
  
    if (!appData) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={50} color="#d21429" />
          <Text style={styles.loadingText}>Carregando sua lista de treinos...</Text>
        </View>
      );
    }
    
    const exerciciosFiltrados = appData["homePageExercises"].filter(ex => ex.catId === activeCategory);

  return (
    <View style={styles.mainContainer}>

      <Image
        source={{ uri: 'https://raw.githubusercontent.com/Euro-beat/fiap-crossplat-skiefite/refs/heads/main/assets/skyfit_homepage.png' }}
        style={styles.skiefiteLogo}
        resizeMode='contain'
      />

      <Text style={styles.label}>Selecione um treino:</Text>

      <View style={{height: 80}}>

        <FlatList
          data={appData["homePageCategories"]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalButtonsContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isActive = item.id === activeCategory;
            return (
              <TouchableOpacity 
                style={[styles.horizontalButton, isActive && styles.activeButton]}
                onPress={() => setActiveCategory(item.id)}
              >
                <Text style={[styles.horizontalButtonText, isActive && styles.horizontalButtonActive]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

      </View>
        
        <FlatList
          data={exerciciosFiltrados}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.verticalButtonsContainer}
          style={{flex: 1}}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.verticalButton}
              onPress={() => 
                navigation.navigate(
                  'ExerciseMain',
                  {
                    trainingSplitShow: appData['exercisesDatabase'][item.value],
                    screenTitle: item.name
                  }
                )
              }
            >
              <Text style={styles.verticalButtonsText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 20
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
  skiefiteLogo: {
    flex: 1,
    maxHeight: 200,
  },
  label: {
    color: '#2c2c2c',
    fontSize: 18,
  },
  horizontalButtonsContainer: {
    flexGrow: 1,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00000020',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
  },
  activeButton: {
    backgroundColor: '#002F6C', 
    borderColor: '#002F6C',
  },
  horizontalButtonText: {
    fontSize: 16,
    fontWeight: 'bold', // Texto em negrito como na imagem
  },
  horizontalButtonActive: {
    color: '#ffffff',
  },
  verticalButtonsContainer: {
    gap: 15
  },
  verticalButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  verticalButtonsText: {
    fontSize: 16,
    color: '#1a1a1a',
  },
});