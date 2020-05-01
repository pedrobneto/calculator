import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Calculator from '../pages/Calculator';

const AppStack = createStackNavigator();

const AppRoutes = (props) => (
    <AppStack.Navigator initialRouteName="Calculator">
        <AppStack.Screen
            name="Calculator"
            component={Calculator}
            options={{ headerShown: false }}
        />
    </AppStack.Navigator>
);

export default AppRoutes;