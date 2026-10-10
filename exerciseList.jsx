import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExerciseList({trainingSplitList}) {
  return (
    <View style={styles.trainingSplitCard}>
        <View>
            <Text style={styles.cardSubtitle}>Séries: {trainingSplitList.sets} <Text style={styles.slashColor}>/</Text> Repetições: {trainingSplitList.reps}</Text>
            <Text style={styles.cardTitle}>{trainingSplitList.name}</Text>
        </View>

        <Ionicons name='arrow-forward' size={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
    trainingSplitCard: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',

        
    },
    cardSubtitle: {
      color: '#002F6C',
      fontWeight: 'bold',
      fontSize: 15
    },
    cardTitle: {
        fontSize: 18
    },
    slashColor: {
        color: '#d21429'
    }
});