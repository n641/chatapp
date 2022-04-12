import react, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Keyboard } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Link from '../component/link';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { register } from '../confeg/auth/auth';



const RegestersScreen = ({ navigation }) => {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [imageurl, setimageurl] = useState('');
    const [flag, setflag] = useState(false);



    const Handleusername = (textgoal) => {
        setuserName(textgoal);

    };
    const HandleEmail = (textgoal) => {
        setemail(textgoal);

    };
    const Handlepassword = (textgoal) => {
        setpassword(textgoal);

    };
    const Handleimageurl = (textgoal) => {
        setimageurl(textgoal);

    };

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={() => {
                Keyboard.dismiss();
            }}> */}
                <View style={styles.mainIcon}>
                    <Ionicons name="chatbubbles" size={70} color={'red'} />
                </View>

                <View style={styles.contenerInput}>
                    <View style={styles.containericon}>
                        <Ionicons name='person' size={35} />
                    </View>
                    <TextInput
                        placeholder=' enter user name'
                        onChangeText={Handleusername}
                        value={userName}
                        blurOnSubmit
                    />

                </View>
                <View style={styles.contenerInput}>
                    <View style={styles.containericon}>
                        <Ionicons name='mail' size={30} />
                    </View>
                    <TextInput
                        placeholder=' enter email'
                        onChangeText={HandleEmail}
                        value={email}
                    />
                </View>
                <View style={styles.contenerInput}>
                    <TouchableOpacity onPress={() => {
                        setflag(!flag);
                    }}>
                        <Ionicons name={flag ? 'eye-off' : 'eye'} size={30} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder=' enter password'
                        onChangeText={Handlepassword}
                        value={password}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.contenerInput}>
                    <View style={styles.containericon}>
                        <Ionicons name='camera' size={30} />
                    </View>
                    <TextInput
                        placeholder=' enter image url'
                        onChangeText={Handleimageurl}
                        value={imageurl}
                    />
                </View>
                <View style={styles.buttoncontainer}>
                    <Button title='sign up' onPress={()=>{
                        register(userName,imageurl,email,password)
                    }} color={'red'} />
                    <View style={styles.link}>
                        <Link title='I have already email'
                            onPress={() => navigation.navigate('Login')
                            } />
                    </View>
                </View>
            {/* </TouchableOpacity> */}
        </View>
    );
}

export default RegestersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // margin: 20
    },
    mainIcon: {

    },
    contenerInput: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 20,
        width: 350,
        maxHeight: '90%',
        padding: 10,
        color: 'red',
        elevation: 20,
        backgroundColor: '#ffffff',
        borderColor: 'black'
    },
    buttoncontainer: {
        alignItems: 'center',
    }, link: {
        flexDirection: 'row',
        width: '100%s'
    }
});