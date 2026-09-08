import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
/* Ideia:
passar o trainingSplit['quadriceps']['exercises'] direto no component.
*/

export default function ExerciseList({trainingSplitList}) {
  return (
    <TouchableOpacity style={styles.trainingSplitCard} activeOpacity={0.7}>
        <View>
            <Text style={styles.cardSubtitle}>Séries: {trainingSplitList.sets} / Repetições: {trainingSplitList.reps}</Text>
            <Text style={styles.cardTitle}>{trainingSplitList.exercise}</Text>
        </View>

        <Ionicons name='arrow-forward' size={20}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    trainingSplitCard: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#ebebeb',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
    },
    cardSubtitle: {
      color: '#2F6783',
      fontWeight: 'bold',
      fontSize: 15
    },
    cardTitle: {
        fontSize: 18
    }
});