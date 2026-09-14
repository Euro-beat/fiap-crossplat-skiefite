import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import { trainingSplit } from './trainingSplit.js'
import ExerciseMain from './screens/exerciseMain.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ListaExerc'
          component={ExerciseMain}
          options={{headerShown: false}}
          initialParams={{ trainingSplitShow: trainingSplit['quadriceps'] }} /* Opções disponíveis: (quadriceps, costasBiceps) */
        />
        <Stack.Screen
          name='ListaExercTeste'
          component={ExerciseMain}
          options={{title: trainingSplit['costasBiceps']['title']}}
          initialParams={{ trainingSplitShow: trainingSplit['costasBiceps'] }} /* Opções disponíveis: (quadriceps, costasBiceps) */
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
});