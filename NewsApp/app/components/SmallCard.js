import { StyleSheet, Text, View, Dimensions } from 'react-native'
import BlockCard from './BlockCard'

const { width } = Dimensions.get('window')

export default function SmallCard({ item }) {
    return (
        <BlockCard item={item} style={styles.container} imageStyle={styles.image} />
    )
}
const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200,
    },
    image: {
        height: 100,
    }
})