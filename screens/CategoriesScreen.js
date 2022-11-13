import { CATEGORIES } from "../data/dummy-data"
import {View, Text, FlatList, StyleSheet} from 'react-native'
import GridText from "../components/GridText"
import MealsOverviewScreen from "./MealsOverviewScreen"
// import {useNavigation} from '@react-navigation/native'

const CategoriesScreen = ({navigation}) => {

    // const navigation = useNavigation()

    const pressHandler = (item) => {
        console.log(item)
        console.log('title!', item.title)
        navigation.navigate('Meals Overview', {
            categoryId:item.id,
            categoryTitle:item.title,
        })
    }

    return (
        <View style={styles.listContainer}>
            <FlatList data={CATEGORIES} renderItem={(itemData) => <GridText onPress={() => pressHandler(itemData.item)} item={itemData.item}/>} numColumns={2}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingTop:50,
    },


})

export default CategoriesScreen