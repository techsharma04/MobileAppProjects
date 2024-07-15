import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight } from "react-native"

export const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={require('../images/dummy.png')} />
                <Text style={{ color: 'white', fontSize: 25 }}>Demo Account</Text>
                <Text style={{ color: 'grey', fontSize: 20 }}>Beginner</Text>
            </View>
            <View >
                <Image style={styles.profileImg2} source={require('../images/dummy2.png')} />
            </View>
            <View >
                <Image style={styles.profileImg3} source={require('../images/dummy3.png')} resizeMode="cover" />
            </View>
            <View>
                <Text style={{ color: 'grey', fontSize: 22, marginLeft: 20, marginTop: 20 }}>Account</Text>
            </View>
            <View style={styles.profileBtns}>
                <Image style={styles.profileImg4} source={require('../images/dummy4.png')} resizeMode="cover" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    profile: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
        height: 220
    },
    profileImg: {
        width: 150,
        height: 150,
        backgroundColor: 'gold',
        borderRadius: 75,
    },
    profileImg2: {
        width: '100%',
        marginTop: 50
    },
    profileImg3: {
        width: '100%',
        marginTop: 30
    },
    profileImg4: {
        width: '100%',
        marginTop: 30
    }
})