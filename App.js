import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, Alert, ToastAndroid, Image, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
    const [score, setScore] = useState(0);
    const [Q1, Q1answer] = useState('');
    const [Q2, Q2answer] = useState('');
    const [Q3, Q3answer] = useState('');

    function checkInput() {
        if (Q1 === '' || Q2 === '' || Q3 === '') {
            ToastAndroid.show("Please answer all the questions", ToastAndroid.SHORT);
        } else {
            let newScore = 0;
            if (Q1 === 'Bee') newScore += 1;
            if (Q2 === 'Deer') newScore += 1;
            if (Q3 === 'Humming Bird') newScore += 1;
            setScore(newScore);
            Alert.alert(`Results`, `You scored ${newScore} out of 3`);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.h1}>Welcome to Know your animals Quiz!</Text>

            {/* Qn1 */}
            <Image source={require('./images/bee.jpg')} style={styles.image} />
            <Text style={styles.h1}>What is this Animal?</Text>
            <RNPickerSelect
                onValueChange={(value) => Q1answer(value)}
                items={[
                    { label: 'Bee', value: 'Bee' },
                    { label: 'Bear', value: 'Bear' },
                    { label: 'Bird', value: 'Bird' },
                    { label: 'Plane', value: 'Plane' },
                ]}
                placeholder={{ label: "What's this animal?", value: null }}
            />

            {/* Qn2 */}
            <Image source={require('./images/deer.jpg')} style={styles.image} />
            <Text style={styles.h1}>What is this Animal?</Text>
            <RNPickerSelect
                onValueChange={(value) => Q2answer(value)}
                items={[
                    { label: 'Deer', value: 'Deer' },
                    { label: 'Bear', value: 'Bear' },
                    { label: 'Cow', value: 'Cow' },
                    { label: 'Buck', value: 'Buck' },
                ]}
                placeholder={{ label: "What's this animal?", value: null }}
            />

            {/* Qn3 */}
            <Image source={require('./images/hummingbird.jpg')} style={styles.image} />
            <Text tyle={styles.h1}>What is this Animal?</Text>
            <RNPickerSelect
                onValueChange={(value) => Q3answer(value)}
                items={[
                    { label: 'Bird', value: 'Bird' },
                    { label: 'Humming Bird', value: 'Humming Bird' },
                    { label: 'Blue Bird', value: 'Blue Bird' },
                    { label: 'Parrot', value: 'Parrot' },
                ]}
                placeholder={{ label: "What's this animal?", value: null }}
            />

            <Button title="Submit" onPress={checkInput} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
    h1:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});
