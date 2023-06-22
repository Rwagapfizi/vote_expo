import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
    const handleAddCandidate = () => {
        // Navigate to Add Candidate screen
        navigation.navigate('AddCandidate');
    };

    const handleVoteCandidate = () => {
        // Navigate to Vote Candidate screen
        navigation.navigate('VoteCandidate');
    };

    return (
        <View style={styles.container}>
            <Text style={{
                // flex: 1,
                fontFamily: 'Roboto',
                fontSize: 20,
                padding: 30,
                fontWeight: 'bold',
                color: "black",
                // paddingVertical: 50,
            }}>Logged in as Roggy</Text>
            {/* <View style={{ flex: 1 }}> */}

            <TouchableHighlight
                style={styles.button}
                underlayColor="#026cd6"
                onPress={handleAddCandidate}
            >
                <View style={styles.buttonContent}>

                    <Icon name="plus" size={20} color="white" />
                    <Text style={styles.buttonText}>Add Candidate</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                underlayColor="#026cd6"
                onPress={handleVoteCandidate}
            >
                <View style={styles.buttonContent}>

                    <Icon name="user" size={20} color="white" />
                    <Text style={styles.buttonText}>Vote Candidate</Text>
                </View>
            </TouchableHighlight>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#1e90ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default HomeScreen;
