import { StyleSheet, Text, View } from 'react-native'
import HorizotalList from './HorizotalList'

export default function BreakingNews({ data }) {
    return (
        <HorizotalList title='Breaking News' data={data} />
    )
}
const styles = StyleSheet.create({})