import {Text, View, Image, StyleSheet, Pressable} from 'react-native'

const MealItem = ({item, onPress}) => {
    return (
        <View style={styles.mainContainer}>
            <Pressable style={({pressed}) => pressed?styles.mealCtnPressed:'null'} onPress={onPress}>
                <View style={styles.container}>
                    <Image source={{uri:item.imageUrl}} style={styles.image} />
                    <Text style={styles.mealTitle}>{item.title}</Text>
                    <View style={styles.featuresContainer}>
                        <Text style={styles.features}>{item.duration}m  | </Text>
                        <Text style={styles.features}>{item.complexity}  | </Text>
                        <Text style={styles.features}>{item.affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealCtnPressed: {
        opacity:0.8
    },
    mainContainer: {
        borderRadius:8,
        padding:16,
        
    },
    container: {
        backgroundColor:'#D2D2D2',
        borderRadius:8,
        elevation:10
    },
    image: {
        width:'100%',
        height:300,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
    },
    featuresContainer: {
        flexDirection:'row',
        justifyContent:'center'
    },
    features: {
        marginHorizontal:1,
        paddingBottom:3
    },
    mealTitle: {
        textAlign:'center',
        fontSize:20,
        marginBottom:2,
    }
})

export default MealItem