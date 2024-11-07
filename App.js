import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Alert, ToastAndroid, Image, TouchableOpacity, ImageBackground } from 'react-native';
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
            if (Q1 === 'Ghost') newScore += 1;
            if (Q2 === 'Winter is coming') newScore += 1;
            if (Q3 === 'Ice') newScore += 1;
            setScore(newScore);
            Alert.alert("Results", `You scored ${newScore} out of 3`);
        }
    }

    return (
        <ImageBackground source={require('./images/bg.jpg')} style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.h1, styles.text]}>Welcome to Know Your House Stark Facts Quiz!</Text>

                {/* Qn1 */}
                <Text style={[styles.question, styles.text]}>What is the name of Jon Snow's dire wolf?</Text>
                <Image source={require('./images/Ghost.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => Q1answer(value)}
                    items={[
                        { label: 'Shaggy dog', value: 'Shaggy dog' },
                        { label: 'Xiao Bai', value: 'Xiao Bai' },
                        { label: 'White Wolf', value: 'White Wolf' },
                        { label: 'Ghost', value: 'Ghost' },
                    ]}
                    style={pickerSelectStyles}
                />

                {/* Qn2 */}
                <Text style={[styles.question, styles.text]}>What are House Stark's words?</Text>
                <Image source={require('./images/House Stark.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => Q2answer(value)}
                    items={[
                        { label: 'Ours is the Fury', value: 'Ours is the Fury' },
                        { label: 'We Do Not Sow', value: 'We Do Not Sow' },
                        { label: 'Winter is coming', value: 'Winter is coming' },
                        { label: 'Family, Duty, Honor', value: 'Family, Duty, Honor' },
                    ]}
                    style={pickerSelectStyles}
                />

                {/* Qn3 */}
                <Text style={[styles.question, styles.text]}>What is the name of House Stark's Valyrian steel Sword?</Text>
                <Image source={require('./images/Ice.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => Q3answer(value)}
                    items={[
                        { label: 'Ice', value: 'Ice' },
                        { label: 'Oath Keeper', value: 'Oath Keeper' },
                        { label: "HeartsBane", value: 'HeartsBane' },
                        { label: 'Longclaw', value: 'Longclaw' },
                    ]}
                    style={pickerSelectStyles}
                />

                <TouchableOpacity style={styles.button} onPress={checkInput}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    image: {
        width: 220,
        height: 220,
        marginTop: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'white',
        textAlign: 'center',
    },
    question: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 25,
        color: 'white',
        textAlign: 'center',
    },
    text: {
        color: 'white',
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white',
        paddingRight: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: 15,
    },
});
