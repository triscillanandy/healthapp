import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 ,FontAwesome,Entypo ,Ionicons} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import TrackerScreen from '../screens/TrackerScreen';
import Appointment from '../screens/Appointment';
import ResourcesScreen from '../screens/ResourcesScreen';
import CommunityHub from '../screens/CommunityHub';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: 'flex',
        },
        tabBarShowLabel: false, // Hide tab labels
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
      
        options={{headerShown:false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} /> 
          ),
        }}
      />
      <Tab.Screen name="Tracker" component={TrackerScreen} options={{headerShown:false,
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph"  color={color} size={24}/> 
          ),
        }} />
      <Tab.Screen name="Appointment" component={Appointment}
      options={{headerShown:false,
          tabBarIcon: ({ color}) => (
            <FontAwesome name="calendar-o" size={24}  color={color}/>
          ),
        }} />
      <Tab.Screen name="Resources" component={ResourcesScreen}  options={{headerShown:false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="library-outline" size={24} color={color} />
          ),
        }} />
      <Tab.Screen 
        name="Community" 
        component={CommunityHub}
        options={{headerShown:false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-friends" color={color} size={24} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
