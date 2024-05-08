import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text,TouchableOpacity, SafeAreaView ,Image} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ResetPasswordScreen = ({ navigation }) => {
  const [username, setName] = useState('');
 


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require('../../assets/assets/images/splash.png')}
          style={styles.logo}
        />

<Text style = {{
            color: "#000",
  
            fontSize: 24,
            textAlign: "center",
            marginLeft: 10,
            marginTop: 17,
            }}
            > Forgot your password? 
            </Text>
<Text style = {{
            color: "#00C2CB",
  
            fontSize: 18,
            textAlign: "center",
            marginLeft: 10,
            marginTop: 17,
            }}
            >Send your email to be able to rest your password 
            </Text>  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#818181"
            value={username}
            onChangeText={setName}
          />
          <Icon name="mail" color="#00C2CB" size={28} style={styles.icon} />
        </View>

        
        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('Login')}>
          Back to Login
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {}}
        >
          <Text style={styles.loginButtonText}>Reset Password</Text>
        </TouchableOpacity>

       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 190,
    alignSelf: 'center',
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 10,
    width: 333,
    height: 47,
    borderWidth: 1,
    marginTop: 15,
    paddingHorizontal: 10,
    borderColor: '#00C2CB',
    borderRadius: 23,
    paddingVertical: 2,
  },
  input: {
    marginTop: 0,
    marginLeft: 12,
    color: 'black',
    fontSize: 15,
    width: 238,
  },
  inputpass: {
    width: 238,
    marginTop: 0,
    marginLeft: 12,
    color: 'black',
    alignItems: 'center',
    fontSize: 17,
    textAlign: 'left',
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  forgotPassword: {
    color: '#1E53DB',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 120,
    marginTop: 17,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 55,
    marginTop: 20,
    width: 200,
    height: 47,
    marginLeft: 90,
    paddingHorizontal: 10,
    backgroundColor: '#00C2CB',
    borderRadius: 3,
    borderColor: '#00C2CB',
    paddingVertical: 2,
  },
  loginButtonText: {
    color: '#ffff',
    fontSize: 19,
    textAlign: 'center',
  },
  orContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  orText: {
    color: '#333',
    fontSize: 16,
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 60,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffff',
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 40,
  },
  createAccountText: {
    color: '#333',
    fontSize: 15,
  },
  createAccountLink: {
    color: '#1E53DB',
    fontSize: 15,
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
});

export default ResetPasswordScreen;
