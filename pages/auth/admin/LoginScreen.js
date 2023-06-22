import React, { useRef, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from './style.js';

export default function LoginScreen(props) {
    const slideUpAnimation = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.timing(slideUpAnimation, {
            toValue: 1,
            duration: 500, // Adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <>
            <Animated.View
                style={[
                    login.container, {
                        transform: [
                            {
                                translateY: slideUpAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [300, 0], // Adjust the range as per your preference
                                }),
                            },
                        ],
                    },

                ]}
            >
                {/* <ScrollView> */}
                <View style={{ alignItems: 'center', paddingBottom: 40, }}>

                    <Text style={login.appTitle}>VoteR <Text style={{ fontSize: 15, color: '#1e90ff' }}>(admin)</Text></Text>

                    <Text style={[login.titleDesc, { fontWeight: 'bold', }]}>Welcome</Text>
                    <Text style={[login.titleDesc, { fontWeight: 300 }]}>Sign in to Continue</Text>
                </View>

                <TextInput
                    placeholder="Your Email"
                    style={login.input}
                />
                <TextInput
                    placeholder="Password"
                    style={login.input}
                />
                <View style={[login.loginButton, {
                    marginTop: 25,
                    marginBottom: 25,
                }]}>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Home')}
                        underlayColor="#026cd6"
                        style={{ width: '100%', borderRadius: 10 }}
                    >
                        <Text style={[login.buttonText, {
                            paddingVertical: 15
                        }]}>Sign In</Text>
                    </TouchableHighlight>
                </View>

                <Text style={{ color: '#1e90ff', fontWeight: 'bold', padding: 10 }}>Forgot Password?</Text>
                <Text style={{ fontWeight: 300, fontSize: 13 }}>
                    Don't have an account?
                    <TouchableHighlight
                        // onPress={() => navigation.navigate('Register')}
                        onPress={props.showRegister}
                        style={{ paddingTop: 10 }}
                        underlayColor="#ffffff"
                    >
                        <Text style={{ color: '#1e90ff', paddingTop: 10 }}>  Register!</Text>
                    </TouchableHighlight>
                </Text>
                {/* </ScrollView> */}
            </Animated.View>
            {/* </View> */}
        </>
    );
};
