import { StyleSheet, Text, View, Image } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'

export default function FlatCard({ item }) {
    const { thumbnail, title, desc } = item;
    return (
        <View style={[styles.container]}>
            {/* <Image source={require('../../assets/favicon.png')} style={[styles.image, imageStyle]} /> */}
            <Image source={{ uri: thumbnail }} style={[styles.image]} />
            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10

    },
    image: {
        flex: 0.35,
        height: '100%',
    },
    contentContainer: {
        paddingHorizontal: 5,
        flex: 0.65,
    }
})