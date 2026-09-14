import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, FlatList } from 'react-native';
import ExerciseList from '../exerciseList'
import { Ionicons } from '@expo/vector-icons';
/* Ideia:
passar o trainingSplit['quadriceps'] direto no component.
*/

export default function ExerciseMain({trainingSplitShow}) {
  return (
    <View style={styles.mainContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{trainingSplitShow['title']}</Text>
        </View>

        <View style={styles.whiteContainer}>

          <TouchableOpacity  /* onPress={} alterar quando for fazer multi telas*/> 
            <Text style={styles.backButton}> <Ionicons name='arrow-back-sharp' size={20}/> Voltar</Text>
          </TouchableOpacity>

          <FlatList
            data={trainingSplitShow['exercises']}
            keyExtractor={(item) => item.id}
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

      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0, // Pesquisando sobre alinhar no topo, dica que a IA deu.

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