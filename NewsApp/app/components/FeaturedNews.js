import { StyleSheet, Text, View } from 'react-native'
import BlockCard from './BlockCard'

export default function FeaturedNews({ item }) {
    return (
        <BlockCard item={item} style={{ marginVertical: 15 }} />
    )
}
const styles = StyleSheet.create({})