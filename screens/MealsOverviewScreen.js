import {View, Text, StyleSheet, FlatList} from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useNavigation } from '@react-navigation/native'
import {useLayoutEffect} from 'react'
import MealDetails from './MealDetailsScreen'

const MealsOverviewScreen = ({route, navigation}) => {

    const catId = route.params.categoryId
    const catTitle = route.params.categoryTitle
    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >=0)

    useLayoutEffect(() => {
        navigation.setOptions({title:catTitle})
    }, [catTitle, navigation])

    // const navigation = useNavigation()
   
    const onPressHandler = (item) => {
        console.log('clicked')
        navigation.navigate('Meal Details', {mealId:item.id, mealTitle:item.title})
    }   

    return (
        <View>
            <FlatList data={meals} renderItem={(itemData) => <MealItem onPress={() => onPressHandler(itemData.item)} item={itemData.item}></MealItem>}></FlatList>
        </View>
    )
}

const style = StyleSheet.create({

})

export default MealsOverviewScreen