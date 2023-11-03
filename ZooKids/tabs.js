import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import Home from './src/pages/Home/Index';
import Tickets from './src/pages/Tickets/Index';
import Places from './src/pages/Places/Index';
import Animals from './src/pages/Animals/Index';
import Account from './src/pages/Account/Index';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: "#0f6c58"
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_600SemiBold
    });
    if(!fontLoaded){
        return null;
    }
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen name="Places" component={Places} options={{
        tabBarIcon: ({focused}) => (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MaterialIcons name="place" color={focused ? '#f7826d' : "#748c94"} size={30} />
                <Text
                    style={{
                        color: focused ? '#f7826d' : "#748c94",
                        fontFamily: focused ? 'Poppins_600SemiBold' : 'Poppins_400Regular'
                    }}    
                >Locais
                </Text>
            </View>
        )
      }} />
      <Tab.Screen name="Tickets" component={Tickets} options={{
        tabBarIcon: ({focused}) => (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <FontAwesome name="ticket" color={focused ? '#f7826d' : "#748c94"} size={30} />
                <Text
                    style={{
                        color: focused ? '#f7826d' : "#748c94",
                        fontFamily: focused ? 'Poppins_600SemiBold' : 'Poppins_400Regular'
                    }}    
                >Ingressos
                </Text>
            </View>
        )
      }} />
      <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarIcon: ({focused}) => (
                <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <AntDesign name="home" color="#ffffff" size={30} />
            </View>
            ),
            tabBarButton: (props) => (
                <CustomTabBarButton {...props} />
            )
        }}
      />
      <Tab.Screen name="Animals" component={Animals} options={{
        tabBarIcon: ({focused}) => (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MaterialCommunityIcons name="snake" color={focused ? '#f7826d' : "#748c94"} size={30} />
                <Text
                    style={{
                        color: focused ? '#f7826d' : "#748c94",
                        fontFamily: focused ? 'Poppins_600SemiBold' : 'Poppins_400Regular'
                    }}    
                >Animais
                </Text>
            </View>
        )
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon: ({focused}) => (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MaterialCommunityIcons name="account" color={focused ? '#f7826d' : "#748c94"} size={30} />
                <Text
                    style={{
                        color: focused ? '#f7826d' : "#748c94",
                        fontFamily: focused ? 'Poppins_600SemiBold' : 'Poppins_400Regular'
                    }}    
                >Conta
                </Text>
            </View>
        )
      }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;