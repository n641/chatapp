import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { editmessage } from '../confeg/auth/listchats';


const EditmessageScreen = ({ city: cityToEdit, onSave }) => {

    const [cityToEditName, setCityToEditName] = useState(cityToEdit.name);

    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 2,
                }}
            >
                <TextInput
                    onChangeText={setCityToEditName}
                    defaultValue={cityToEditName}
                    style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
                />
                <Button
                    title="Save city"
                    onPress={() => {
                        editmessage({ ...cityToEdit, name: cityToEditName })
                            .then((d) => {
                                onSave();
                                console.log(cityToEditName);
                            })
                            .catch((e) => console.log(e));
                    }}
                />
            </View>
        </View>
    );
}

export default EditmessageScreen

const styles = StyleSheet.create({})