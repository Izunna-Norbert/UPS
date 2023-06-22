import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface SignupInstitutionScreenProps {
  navigation: any; // assuming this screen is a child of a stack navigator
}

const SignupInstitutionScreen: React.FC<SignupInstitutionScreenProps> = ({ navigation }) => {
  const [institution, setInstitution] = useState('');

  const handleContinue = () => {
    navigation.navigate('SignupMatriculationScreen', { institution });
  };

  return (
    <View style={styles.container}>
      < Text style={styles.header}> UPS </Text>
      <TextInput
        style={styles.input}
        onChangeText={setInstitution}
        value={institution}
        placeholder="Enter higher institution"
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.footer}> UPS Solutions C 2023</Text>
    </View>
  );
};

export default SignupInstitutionScreen;

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
    padding: 15,
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
  buttonText: {
    color: 'black',
    fontWeight: 'normal',
  },
  footer: {
    fontSize: 10,
    color: 'gray',
    marginTop: 200
  },
});