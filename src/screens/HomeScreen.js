import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from expo/vector-icons

const HomeScreen = () => {
  return (
    <SafeAreaView>
       <View>
         <MaterialIcons name="notifications" size={24} color="black" style={styles.icon} />
       </View>

        <View style={styles.container}>
          <Text style={styles.text}>Hello Maria</Text>
          <Text style={styles.text2}>How are you feeling today?</Text>
          <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/assets/images/happiness.png')}
                style={styles.socialIcon}
              />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/assets/images/sad.png')}
                style={styles.socialIcon}
              />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/assets/images/angry.png')}
                style={styles.socialIcon1}
              />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/assets/images/shining.png')}
                style={styles.socialIcon}
              />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/assets/images/calm.png')}
                style={styles.socialIcon2}
              />
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 4,
    marginTop: 20,
  },
  text2: {
    fontSize: 22, 
    fontWeight: '500',
  },
  icon: {
    marginLeft: 330,
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row', // Arrange items horizontally
    marginTop: 20,
  },
  
  socialIcon: {
    width: 40,
    height: 41,
    marginRight: 40,
    marginTop: 4
    
  },
  socialIcon1: {
    width: 50,
    height: 45,
    marginRight: 30,
    marginTop: 2
    
  },
  socialIcon2: {
    width: 50,
    height: 45,
    marginRight: 30,
    marginTop: 2
    
  },
});

export default HomeScreen;
