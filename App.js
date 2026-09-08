import { StyleSheet, View } from 'react-native';
import { trainingSplit } from './trainingSplit.js'
import ExerciseMain from './exerciseMain.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <ExerciseMain trainingSplitShow={trainingSplit['quadriceps']}/>{/* Opções disponíveis: (quadriceps, costasBiceps) */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});