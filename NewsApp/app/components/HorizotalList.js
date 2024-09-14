import { StyleSheet, Text, View, FlatList } from 'react-native'
import Title from './Title'
import SmallCard from './SmallCard'

export default function HorizotalList({ title, data }) {
    return (
        <View>
            <Title size={20}>{title}</Title>
            <View style={styles.listStyle}>
                <FlatList data={data} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SmallCard item={item} />} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 15,
    },
})