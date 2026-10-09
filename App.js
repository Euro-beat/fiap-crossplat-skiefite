import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { useEffect, useState } from 'react';

/* import { trainingSplit } from './trainingSplit.js' */
import ExerciseMain from './screens/exerciseMain.jsx'

const Stack = createNativeStackNavigator();

export default function App() {

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

  if (!exercisesJson) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={50} color="#2F6783" />
        <Text style={styles.loadingText}>Carregando sua ficha de treinos...</Text>
      </View>
    );
  }

  console.log(exercisesJson['quadriceps']?.['title']);
  console.log(exercisesJson['costasBiceps']);

  /*
  '?.' verifica se exercisesJson['quadriceps'] foi criado.
  O react costuma rodar as coisas dobrado para ver o sincronismo, e a primeira dá undefined
  */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ListaExerc'
          component={ExerciseMain}
          options={{ headerShown: false }}
          initialParams={{ trainingSplitShow: exercisesJson['quadriceps'] }} /* Opções disponíveis: (quadriceps, costasBiceps) */
        />
        <Stack.Screen
          name='ListaExercTeste'
          component={ExerciseMain}
          options={{ title: exercisesJson['costasBiceps']?.['title'] }}
          initialParams={{ trainingSplitShow: exercisesJson['costasBiceps'] }} /* Opções disponíveis: (quadriceps, costasBiceps) */
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
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