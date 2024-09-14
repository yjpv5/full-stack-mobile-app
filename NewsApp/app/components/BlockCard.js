import { StyleSheet, Text, View, Image } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'

export default function BlockCard({ style, imageStyle, item }) {
    const { thumbnail, title, desc } = item;
    return (
        <View style={[styles.container, style]}>
            {/* <Image source={require('../../assets/favicon.png')} style={[styles.image, imageStyle]} /> */}
            <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5,
    }
})