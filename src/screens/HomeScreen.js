import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from expo/vector-icons

const HomeScreen = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <SafeAreaView>
      <View>
        <MaterialIcons name="notifications" size={24} color="black" style={styles.icon} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Hello Maria</Text>
        <Text style={styles.text2}>How are you feeling today?</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity onPress={() => handleMoodSelection('happiness')} style={[styles.socialButton, selectedMood === 'happiness' ? styles.selected : null]}>
            <Image
              source={require('../../assets/assets/images/happiness.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMoodSelection('sad')} style={[styles.socialButton, selectedMood === 'sad' ? styles.selected : null]}>
            <Image
              source={require('../../assets/assets/images/sad.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMoodSelection('angry')} style={[styles.socialButton, selectedMood === 'angry' ? styles.selected : null]}>
            <Image
              source={require('../../assets/assets/images/angry.png')}
              style={styles.socialIcon2}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMoodSelection('shining')} style={[styles.socialButton, selectedMood === 'shining' ? styles.selected : null]}>
            <Image
              source={require('../../assets/assets/images/shining.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMoodSelection('calm')} style={[styles.socialButton, selectedMood === 'calm' ? styles.selected : null]}>
            <Image
              source={require('../../assets/assets/images/calm.png')}
              style={styles.socialIcon2}
            />
          </TouchableOpacity>
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
  socialIcon: {
    width: 40,
    height: 41,
  },


  selected: {
    backgroundColor: '#69f8ff', // Change to the same color as borderColor or any other color
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginLeft: 50,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 60,
    marginRight: 5,
    backgroundColor: '#ffff',
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  socialIcon: {
    width: 39,
    height: 39,
  },
  socialIcon2: {
    width: 45,
    height: 45,
  },
});

export default HomeScreen;
