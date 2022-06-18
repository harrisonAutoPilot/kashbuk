import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const data = [
  { label: 'Full Payment', value: 'Full Payment' },
  { label: 'Part Payment', value: 'Part Payment' },
  { label: 'No-Payment', value: 'No-Payment' },

];

const PaymentLevel = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#0F8D8F' }]}>
          Payment Level
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#0F8D8F' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={150}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Payment Level' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      // renderLeftIcon={() => (
      //   <AntDesign
      //     style={styles.icon}
      //     color={isFocus ? '#0F8D8F' : 'black'}
      //     name="Safety"
      //     size={20}
      //   />
      // )}
      />
    </View>
  );
};

export default PaymentLevel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    paddingLeft: -10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  dropdown: {
    width: wp('80%'),
    height: 30,
    borderColor: '#0F8D8F',
    borderBottomWidth: 0,
    paddingHorizontal: 5,
    alignSelf: 'center',
    marginTop: 0
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: '#fff',
    lineHeight: 18,
    color: "#0F8D8F",
    fontWeight: '400',
    letterSpacing: 0.2,
    top: 8,
    zIndex: 999,


  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});