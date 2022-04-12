import react, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity , Keyboard } from 'react-native'
import { Ionicons } from "@expo/vector-icons";


const LoginScreen = () => {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const[flag , setflag]=useState(false);

    const Handleusername = (textgoal) => {
        setuserName(textgoal);

    };
    const Handlepassword = (textgoal) => {
        setpassword(textgoal);

    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                Keyboard.dismiss();
            }}>
            <View style={styles.mainIcon}>
                <Ionicons name="chatbubbles" size={90} color={'red'} />
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
                    <TouchableOpacity onPress={()=>{
                        setflag(!flag);
                    }}>
                    <Ionicons name={flag?'eye-off':'eye'} size={30} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder=' enter password'
                    onChangeText={Handlepassword}
                    value={password}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.buttoncontainer}>
                <Button title='Sign IN ' onPress={() => { }} color={'red'} />
                <Button title='sign up' onPress={() => { }} color={'red'} />
            </View>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    contenerInput: {
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 20,
        width: 300,
        maxHeight: '80%',
        padding: 10,
        color: 'red',
        elevation: 20,
        backgroundColor: '#ffffff',
        borderColor: 'black',
        flexDirection: 'row'
    }, buttoncontainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});