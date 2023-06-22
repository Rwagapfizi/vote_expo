// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import AuthScreenAdmin from './pages/auth/admin/AuthScreen';
import HomeScreen from './pages/HomeScreen';
import AddCandidateScreen from './pages/AddCandidateScreen';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="AuthAdmin" options={{ headerShown: false }} component={AuthScreenAdmin} />
				<Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
				<Stack.Screen name="AddCandidate" options={{ headerShown: false }} component={AddCandidateScreen} />
        {/* <Stack.Screen name="VoteCandidate" options={{ headerShown: false }} component={VoteCandidateScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
// AppRegistry.registerComponent('VoteSystem', () => App);
