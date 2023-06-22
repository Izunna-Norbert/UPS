import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface SignupMatriculationScreenProps {
    navigation: any; // assuming this screen is a child of a stack navigator
    route: any; // to retrieve the institution value from previous screen
  }
  
  const SignupMatriculationScreen: React.FC<SignupMatriculationScreenProps> = ({ navigation, route }) => {
    const [matriculationNumber, setMatriculationNumber] = useState('');
  
    const handleContinue = () => {
      navigation.navigate('SignupAuthorizationScreen', { institution: route.params.institution, matriculationNumber });
    };
  
    const handleJoinVendor = () => {
      navigation.navigate('SignupVendorScreen', { institution: route.params.institution });
    };
  
    return (
      <View style={styles.container}>
        < Text style={styles.header}> UPS </Text>
        <TextInput
          style={styles.input}
          onChangeText={setMatriculationNumber}
          value={matriculationNumber}
          placeholder="Matriculation Number"
        />
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 30, textAlign: 'center'}}>or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <TouchableOpacity style={styles.vendorButton} onPress={handleJoinVendor}>
          <Text style={styles.buttonText}>Join as a Vendor</Text>
        </TouchableOpacity>
        <Text style={styles.footer}> UPS Solutions C 2023</Text>
      </View>
    );
  };

export default SignupMatriculationScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 150,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  vendorButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 10,
    color: 'gray',
    marginTop: 200
  },
  orText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  }
});