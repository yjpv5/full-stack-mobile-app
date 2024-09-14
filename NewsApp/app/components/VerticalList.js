import { StyleSheet, Text, View } from 'react-native'
import Title from './Title'
import FlatCard from './FlatCard'

export default function VerticalList({ title, data }) {
    return (
        <View>
            <Title>{title}</Title>
            <View style={styles.container}>
                {data.map(item => <FlatCard item={item} key={item.id} />)}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    }
})