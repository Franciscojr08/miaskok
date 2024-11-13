import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaInicio from "../TelaInicio";
import TelaVenda from "../TelaVenda";
import TelaProduto from "../TelaProduto";
import TelaEvento from "../TelaEvento";
import Header from "../Header";


export default function Navigator() {
	const Stack = createStackNavigator();
	
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ header: () => <Header /> }} id="mainStack">
				<Stack.Screen name="TelaInicio" component={TelaInicio} />
				<Stack.Screen name="TelaVenda" component={TelaVenda} />
				<Stack.Screen name="TelaProduto" component={TelaProduto} />
				<Stack.Screen name="TelaEvento" component={TelaEvento} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}