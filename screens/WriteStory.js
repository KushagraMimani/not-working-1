import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadStory extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                 <Header
                    backgroundColor="#5f9ea0"
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Write Story', style: { color: '#fff' } }}
                />
                <TextInput
                placeholder='Title'
                />
                <TextInput
                placeholder='Author Of The Story'
                />
                <TextInput
                placeholder='Write Story'
                />
            </View>
        )
    }
}