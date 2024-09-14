import { StyleSheet, Text, View } from 'react-native'
import VerticalList from './VerticalList'


export default function EntertainmentNews({ data }) {
    return (
        <VerticalList title="Entertainment News" data={data} />
    )
}
const styles = StyleSheet.create({})