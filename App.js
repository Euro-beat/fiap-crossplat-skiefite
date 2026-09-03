import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { trainSets } from './quadriceps.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Object.keys(trainSets)}</Text>
      <Text>{trainSets["Quadríceps"][0].exercise}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});