import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ServiceScreen from '../screens/ServiceScreen';
import ContactScreen from '../screens/ContactsScreen';

// Colocando a função dentro do tab que são aqueles botões que ficam embaixo da tela servindo pra navegação
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
    // O ROUTE POSSIBILITA
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          //OPERADORES TERNÁRIOS PRA MUDAREM AS PÁGINAS DE ACORDO COM A ATIVIDADE DO USUÁRIO
          //QUANDO ESTIVER SELECIONADO ESTARÁ PREENCHIDO, CASO NÃO ESTARÁ OUTLINE
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Service') {
            iconName = focused ? 'bag' : 'bag-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: '#0072CE',
        tabBarActiveTintColor: '#0E3560',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Contacts" component={ContactScreen} />
      <Tab.Screen name="Service" component={ServiceScreen} />
      
    </Tab.Navigator>
  );
};

export default AppNavigator;