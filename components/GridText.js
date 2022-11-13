import {Text, View, StyleSheet, Pressable} from 'react-native'

const GridText = ({item, onPress}) => {
    return (
        <Pressable onPress={onPress} android_ripple={{color:'white'}} style={(pressed) => [styles.pressableContainer, pressed?styles.pressedButton:null, {backgroundColor:item.color}]}>
            <View style={styles.gridContainer}>
                <Text style={styles.textContainer}>{item.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressedButton: {
        color:'white'
    }, 
    textContainer: {
        fontSize:18,
        color:'white',
        opacity:0.6,
        fontWeight:'semi-bold'
    },
    gridContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    pressableContainer: {
        margin:5,
        borderRadius:8,
        elevation:8,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.75,
        shadowRadius:8,
        height:130,
        width:180,
        margin:10,
        backgroundColor:'gray'
    },
})

export default GridText