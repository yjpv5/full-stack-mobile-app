import { StyleSheet, Text, View } from 'react-native'
import VerticalList from './VerticalList'


export default function PoliticalNews({ data }) {
    return (
        <VerticalList title="Political News" data={data} />
    )
}
const styles = StyleSheet.create({})