import React from 'react';

import SignupInstitutionScreen from './screens/auth/Institution';
import SignupMatriculationScreen from './screens/auth/Matriculation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupVendorScreen from './screens/auth/Vendor';
import SignupAuthorizationScreen from './screens/auth/Authorization';
import WalletHomeScreen from './screens/wallet/Wallet';
import MainContainer from './screens/Navigation';


export default function App() {
  return (
    <MainContainer />
  );
}