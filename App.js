import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, StatusBar } from 'react-native';

import ExerciseMain from './screens/exerciseMain.jsx'
import HomePage from './screens/homePage.jsx';

const Stack = createNativeStackNavigator();

export default function App() {

  /* <> => é tipo um <View stryle={{flex: 1}}> </View> */
  return (
    <> 
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#002F6C',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        >

          <Stack.Screen
            name='HomePage'
            component={HomePage}
            options={{ title: 'Lista de Treinos' }}
          />

          <Stack.Screen
            name='ExerciseMain'
            component={ExerciseMain}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>    
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