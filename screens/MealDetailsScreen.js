import {View, Text, Image, StyleSheet, FlatList, ScrollView} from 'react-native'
import { useLayoutEffect } from 'react'

import { MEALS } from '../data/dummy-data'

const MealDetails = ({route, navigation}) => {

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    

    useLayoutEffect(() => {
        navigation.setOptions({title:selectedMeal.title})
    }, [])

    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}></Image>
            <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientsH}>Ingredients</Text>
                {selectedMeal.ingredients.map((ingredient) => <Text key={(Math.random() + 1).toString(36).substring(7)} style={styles.ingredients}>  •  {ingredient}</Text>)}
            </View>
            <View style={styles.stepsContainer}>
                <Text style={styles.stepsH}>Steps</Text>
                {selectedMeal.steps.map((step) => <Text key={(Math.random() + 1).toString(36).substring(7)} style={styles.steps}>  •  {step}</Text>)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width:'100%',
        height:300
    },
    ingredientsH: {
        textAlign:'center',
        color:'white',
        fontSize:16,
        opacity:0.6
    },
    stepsH: {
        textAlign:'center',
        color:'white',
        fontSize:16,
        opacity:0.6,
        marginBottom:10,
    },
    ingredients: {

    },
    steps: {

    },
    ingredientsContainer: {
        borderWidth:1,
        margin:10,
        marginHorizontal:30,
    },
    stepsContainer: {
        borderWidth:1,
        margin:10,
        marginHorizontal:30,

    }
})

export default MealDetails