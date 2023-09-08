import { useState } from 'react';
import { Text, View, TextInput, Pressable, FlatList, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles'
import { Participant } from '../../components/Participants';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')


    function handleParticipantAdd() {
        if(participants.includes(participantName)) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>Nome do evento</Text>
            <Text style={styles.textContainerSmall}>Sexta, 22 de novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput
                    value={participantName}
                    onChangeText={setParticipantName} 
                    style={styles.input} 
                    placeholder="Nome do participante" 
                    placeholderTextColor="#6b6b6b" 
                />
                <Pressable style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>


            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />

            <StatusBar translucent style="light" />
        </View>
    );
}