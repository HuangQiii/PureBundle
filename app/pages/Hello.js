import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const aboutLogo = require('../images/about_logo.png');
export default class ThirdPage extends Component {

    static navigationOptions = {
        title: '导航栏',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.center}>
                        <Image style={styles.logo} source={aboutLogo} />
                        <Text style={styles.title}>欢迎页</Text>
                        <Text style={styles.version}>修改Hello.js</Text>
                        <Text style={styles.subtitle}>Reload即可看到效果</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.disclaimerContent}>
                            <Text style={[styles.disclaimer, { color: '#999999' }]}>
                                Qyellow
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 10
    },
    center: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 110,
        height: 110,
        marginTop: 50
    },
    version: {
        fontSize: 14,
        textAlign: 'center',
        color: '#aaaaaa',
        marginTop: 5
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'center',
    },
    disclaimerContent: {
        flexDirection: 'column'
    },
    disclaimer: {
        fontSize: 14,
        textAlign: 'center'
    },
    bottomContainer: {
        alignItems: 'center'
    }
});