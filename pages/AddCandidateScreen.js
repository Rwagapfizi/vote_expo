import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import ImageCropPicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddCandidateScreen = () => {
    const [names, setNames] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [gender, setGender] = useState('');
    const [missionStatement, setMissionStatement] = useState('');

    // const handleSelectProfilePicture = () => {
    //     ImageCropPicker.openPicker({
    //       mediaType: 'photo',
    //       cropping: true,
    //     })
    //       .then((image) => {
    //         setProfilePicture(image);
    //       })
    //       .catch((error) => {
    //         console.log('ImagePicker Error:', error);
    //       });
    //   };

    const handleRegister = () => {
        // Perform candidate registration logic here
        console.log('Candidate Registered:', names, nationalId, profilePicture, gender, missionStatement);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Candidate</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Names"
                value={names}
                onChangeText={setNames}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter National ID"
                value={nationalId}
                onChangeText={setNationalId}
            />
            <TouchableHighlight style={styles.inputFile} underlayColor="#026cd6" title="Select Profile Picture">
            {/* onPress={handleSelectProfilePicture} */}
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="image" size={20} color="white" style={{ marginRight: 10 }} />
                    <Text style={styles.buttonText}>Selected Profile Picture</Text>
                </View>
            </TouchableHighlight>
            {/* {profilePicture && (
                <Text>Selected Profile Picture: {profilePicture.fileName}</Text>
            )} */}
            <TextInput
                style={styles.input}
                placeholder="Enter Gender"
                value={gender}
                onChangeText={setGender}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Mission Statement"
                value={missionStatement}
                onChangeText={setMissionStatement}
                multiline
            />
            <TouchableHighlight
                onPress={handleRegister}
                underlayColor="#026cd6"
                style={styles.inputFile}
            >
                <View>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    inputFile: {
        width: '100%',
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',

    },

});

export default AddCandidateScreen;
