// Import React
import React, {useState, useEffect} from 'react';
 
// Import all required component
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
 
import Contacts from 'react-native-contacts';
import {FormikValidator, InputField,NavHeaderWhite,NavHeaderWhiteTwo, BtnLg } from "@Component/index";
import ListItem from './ListItem';
 
const ContactsList = (props) => {
  let [contacts, setContacts] = useState([]);
  let [text, setText] = useState("");
  
 

  const returnBack = () => {
    props.navigation.navigate('AddStaff')
}
  useEffect(() => {
 
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
        }).then(() => {
          loadContacts();
        }
      );
    } else {
      loadContacts();
      setContacts(contacts);
    }
  }, []);
 
  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
      })
      .catch(e => {
        // alert('Permission to access contacts was denied');
        console.log();('Permission to access contacts was denied');
      });
  };
 
  const search = (text) => {
    const phoneNumberRegex = 
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === "" || text === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    } 
  };
 
  const openContact = (contact) => {
    console.log(JSON.stringify(contact));
    Contacts.openExistingContact(contact);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.header}>
          Access Contact List in React Native
        </Text> */}

        <NavHeaderWhite  style={styles.navCover} onPress={returnBack}/>
        <TextInput
          onChangeText={search}
          placeholder="Search from your contact"
          style={styles.searchBar}
        />
     
     
      

        <FlatList
      data={contacts}
      renderItem={(contact) => {
        {
          console.log('contact -> ' + JSON.stringify(contact));
        }
        return (
          <ListItem
            key={contact.item.recordID}
            item={contact.item || <Text>Hello harry</Text>}
            onPress={openContact}
          />
        );
      }}
      keyExtractor={(item) => item.recordID}
    />
   
    
      </View>
    </SafeAreaView>
  );
};
export default ContactsList;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingTop:12,
  },
  header: {
    backgroundColor: '#4591ed',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20,
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'android' ? undefined : 15,
  },
  navCover:{
    marginTop:50,
  }
});