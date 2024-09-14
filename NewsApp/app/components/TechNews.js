import { StyleSheet, Text, View } from 'react-native'
import HorizotalList from './HorizotalList'

export default function TechNews({ data }) {
    return (
        <HorizotalList title='Tech News' data={data} />
    )
}
const styles = StyleSheet.create({})