import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor:'white', 
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:'#844F4F'}, 
          contentStyle:{backgroundColor:'#876161'}
        }}>
          <Stack.Screen options={{title:'All Categories'}} name="Meals Categories" component={CategoriesScreen}></Stack.Screen>
          <Stack.Screen options={({route, navigation}) => {}} name="Meals Overview" component={MealsOverviewScreen}></Stack.Screen>
          <Stack.Screen name={"Meal Details"} component={MealDetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
