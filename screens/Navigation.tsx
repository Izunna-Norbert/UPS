import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WalletHomeScreen from "./wallet/Wallet";
import TransferScreen from "./transfer/Transfer";
import ProfileScreen from "./profile/Profile";
import SettingsScreen from "./settings/Settings";
import { Profile, Trxn, Wallet, Settings } from '../assets';
import TransferScreen2 from './transfer/Transfer2';
import AuthorizeTransactionScreen from './transfer/components/Authorization';
import TransferSuccessScreen from './transfer/components/Success';
import Qrcode from './profile/components/Qrcode';

const wallet = 'wallet'
const transfer = 'tansfer'
const profile = 'profile'
const settings = 'settings'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabContainer = () => {
    return (
<Tab.Navigator
                initialRouteName={wallet}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: any;
                        console.info('route.name', route.name);
                        console.info('focused', focused);
                        if (route.name === wallet) {
                            iconName = focused ? <Wallet /> : <Wallet />;
                        } else if (route.name === transfer) {
                            iconName = focused ? <Trxn /> : <Trxn />;
                        } else if (route.name === profile) {
                            iconName = focused ? <Profile /> : <Profile />;
                        } else if (route.name === settings) {
                            iconName = focused ? <Settings /> : <Settings />;
                        }
                        return iconName;
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                })}
            >
                <Tab.Screen name={wallet} component={WalletHomeScreen} />
                <Tab.Screen name={transfer} component={TransferScreen} />
                <Tab.Screen name={settings} component={SettingsScreen} />
                <Tab.Screen name={profile} component={ProfileScreen} />
            </Tab.Navigator>
    );
};

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabContainer">
                <Stack.Screen name="TabContainer" component={TabContainer} options={{ headerShown: false }} />
                <Stack.Screen name="TransferScreen2" component={TransferScreen2} options={{ headerShown: false }} />
                <Stack.Screen name="AuthorizeTransactionScreen" component={AuthorizeTransactionScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TransferSuccessScreen" component={TransferSuccessScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Qrcode" component={Qrcode} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;