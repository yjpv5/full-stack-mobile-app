import { StyleSheet, Text, View } from 'react-native'

export default function Title({ children, numberOfLines = 2, size = 18 }) {
    return (

        <Text numberOfLines={numberOfLines} style={{ fontWeight: 'bold', fontSize: size }}>{children}</Text>

    )
}
const styles = StyleSheet.create({})