/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProfileScreen from '../screens/ProfileScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import cardsScreen from '../screens/cardsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import SellItems from '../screens/sellItems';
import { Avatar, Searchbar } from 'react-native-paper';
import itempage from '../screens/itempage';

//firebase

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme == 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying Profiles on top of all other content.
 * https://reactnavigation.org/docs/Profile
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="Root" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Main' component={BottomTabNavigator}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name='SellItem' component={SellItems}/>
      <Stack.Screen name='itempage' component={itempage}/>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const[searchquery, setsearchquery] = React.useState('');
  const onchangeSearch = (query: React.SetStateAction<string>) => setsearchquery(query);

  function searchforitems(){
    //this piece of code make the search using firebase firestore
    console.log('working')

    const [size, setsize] = React.useState(0)
  }

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Searchbar 
            style = { styles.Searchbar }  
            placeholder=' Search'
            onChangeText={onchangeSearch}
            value= {searchquery}
            icon = "cloud-search"
            onIconPress={searchforitems}
            clearAccessibilityLabel = "hide"
            />
          ),
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("Profile")}>
              <Avatar.Text style ={styles.avatar} size={46} label="Xd"/>
            </Pressable>
          ) 
        })}
      />
      <BottomTab.Screen
        name="cards"
        component={cardsScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="credit-card" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


const styles = StyleSheet.create({
  Searchbar:{
    width: '70%'

  },
  avatar:{
    marginLeft: 22
  }
})


/*


*/