import { StyleSheet, Text, View , TextInput, Button } from 'react-native'
import React ,{useState , useEffect , useCallback}from 'react'
import { getmessage , addmessage , subscribe , deletemessage , editmessage} from '../confeg/auth/listchats';
import { auth } from '../confeg/config';
import EditmessageScreen from './editmessageScreen'


const Chatscreen = () => {

  const getChatsList = async () => {
    const c = await getmessage();
    setChats(c);
    console.log("chats", c);
  };

  useEffect(() => {
    getChatsList();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        console.log("New city: ", change.doc.data());
        getChatsList();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getChatsList();           
      }
       if (change.type === "removed") {
        console.log("Removed city: ", change.doc.data());
        getChatsList();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [Chats, setChats] = useState([]);
  const [messages, setmessage] = useState("");
  const [cityToEdit, setCityToEdit] = useState(undefined);
  var today = new Date();

  const handle=(text)=>{
    setmessage(text);
  }


  return cityToEdit ? (
    <EditmessageScreen city={cityToEdit} onSave={()=>setCityToEdit(undefined)} />
  ) : (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <TextInput
          onChangeText={handle}
          value={messages}
          style={{ flex: 2, borderColor: "black", borderWidth: 2 }}
        />
        <Button
          title="Add message"
          onPress={() =>
            addmessage( {text:messages , createAt: today.getHours() , user: auth.currentUser.email})
          }
        />
        </View>
        <View>
      {Chats.map((c) => (
        <View
          key={c.id}
          style={{
            flexDirection: "row",
            justifyContent: auth?.currentUser?.emailVerified?"flex-end":"flex-start",
            padding: 2,
          }}
        >
          <Text
            onPress={() => {
              setCityToEdit(c);
              console.log('cityToEdit', c);
            }}
          >
            {c.text}
          </Text>
          <Button title="Delete" onPress={() =>
             deletemessage(c)
             } />
        </View>
      ))}
    </View>

      </View>

  )
}

export default Chatscreen

const styles = StyleSheet.create({})