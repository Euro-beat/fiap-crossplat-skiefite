import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, FlatList } from 'react-native';
import ExerciseList from '../exerciseList'

import { useEffect } from 'react';

export default function ExerciseMain({ route, navigation }) {
  const { trainingSplitShow, screenTitle } = route.params || {};

  useEffect(() => {
    if (screenTitle) {
      navigation.setOptions({ title: screenTitle });
    }
  }, []
);

  return (
    <View style={styles.mainContainer}>

        <View style={styles.whiteContainer}>

          <FlatList
            data={trainingSplitShow['exercises']}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.trainingSplitContainer}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.trainingSplitCard} activeOpacity={0.7}>
                <ExerciseList trainingSplitList={item}/>
              </TouchableOpacity>
            )}
          />
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
  trainingSplitContainer: {
    gap: 15
  },
  trainingSplitCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  }
});