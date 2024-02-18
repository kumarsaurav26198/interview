import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Images from '../utils/Images';
import Home from '../screen/after/home/Home';
import Details from '../screen/after/details/Details';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    const screenOptions = {
        headerShown: false,
        headerTitleAlign: 'center',
        headerBackImageSource: Images.newArrow,
    };
    const commonOptions = {
        headerTitleStyle: { color: '#fff' },
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: '#1bb57d',
        },
    };
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ ...commonOptions }} />
            <Stack.Screen name="Details" component={Details} options={{ ...commonOptions ,title: 'Detail Screen' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;