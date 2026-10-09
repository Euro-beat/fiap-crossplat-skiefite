import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, FlatList } from 'react-native';
import ExerciseList from '../exerciseList'
import { Ionicons } from '@expo/vector-icons';

import { trainingSplit } from '../trainingSplit'

/* Ideia:
passar o trainingSplit['quadriceps'] direto no component.
*/

export default function ExerciseMain({ route, navigation }) {
  const { trainingSplitShow } = route.params;

  return (
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  whiteContainer: {
    margin: 20
  },
  titleContainer: {

    width: '100%',
    height: 100,
    backgroundColor: '#122631',

    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Pesquisando sobre alinhar no topo, dica que a IA deu.

  },
  title: {

    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,

  },
  backButton: {
    color: '#2F6783',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20
  }
});