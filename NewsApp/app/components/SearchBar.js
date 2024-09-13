import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder='Search here ...' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255,255)',
        borderRedius: 8,
        justifyContent: 'center', ifyContent: 'center', ifyContent: 'center', ifyContent: 'center',
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})

export default SearchBar;