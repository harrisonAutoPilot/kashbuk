import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, BackHandler, Pressable } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
import PlaceholderLoader from "./PlaceholderLoader";
import data from "./data"
import FIcon from 'react-native-vector-icons/Feather';
import {BtnLg} from "@Component";
// import { getPaymentOptions } from "@Request/paymentOptions";
import Modal from "react-native-modal";
import styles from "./style";


const Intro = (props) => {
  // const dispatch = useDispatch();


  const [showCurrencyOption, setShowCurrencyOption] = useState(false);
  const [option, setOption] = useState("");
  const [active, setActive] = useState("0");
  const [errMsg, setErrMsg] = useState("");
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);

  const selectUserType = item => {
    setActive(item.id);
    setOption(item.id);
    props.returnBack(item.id);
  };

  // useEffect(() => {
  //   dispatch(getPaymentOptions())
  // }, []);

  const closeModal = () => {
    props.returnBack(option);

  }


  const renderItem = ({ item }) => (


    <TouchableOpacity
      onPress={() => { selectUserType(item);  setErrMsg("") }}
      style={[styles.optionView, item.id === active ? styles.optionViewBetween1 : styles.optionViewBetween2]}>
      <View style={active === item.id ? styles.optionIconView : styles.optionIconView2}>
        <View >
          {active && active === item.id ?
            <View style={styles.activeCover}>
              <View style={styles.iconCircle}>
              <FIcon name="check-square" size={30} color="#0F8D8F" />
              </View>
              <View style={styles.optionTextCover}>
                <Text style={styles.optionText}>{item.name}</Text>
                
              </View>

            </View>
            :
            <View style={styles.activeCover}>
              <View style={styles.iconCircle2}>
              <FIcon name="check-square" size={30} color="#0F8D8F" />
              </View>
              <View style={styles.optionTextCover}>
               <Text style={styles.optionText2}>{item.name}</Text>
              
              </View>
            </View>
          }
        </View>
      </View>

    </TouchableOpacity>

  );

  return (
    <Modal
      isVisible={props.visibleCurrency}
      onBackdropPress={closeModal}
      onSwipeComplete={() => setPaymentOption(false)}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      // backdropColor="rgba(223, 130, 136, 0.47)"
      backdropColor="#0F8D8F"
      backdropOpacity={0.5}
      coverScreen={true}>
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowCurrencyOption(false);
          }
        }} >
           
        <View style={styles.body5}>
        <Image source={require("@Assets/image/backg.jpeg")} style={styles.backgroundImage} />
            <View style={styles.logoCover}>
                <Image source={require("@Assets/image/WordMark.png")} style={styles.logoImg} />
            </View>
            
          <View style={styles.imageHolder}>
            <View style={styles.smTitleCover}/>
             
            <View style={styles.mainContainer}>
              {errMsg ? <View style={styles.errMainView}>
                <Text style={styles.failedResponseText}>{errMsg}</Text>
              </View>
                : null}

              <View style={styles.itemCover}>

                {active ?
                  <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={isScrollEnabled}

                  />
                  :
                  <PlaceholderLoader />
                }


              </View>

            </View>
            <View style={styles.controlCover}>
              <TouchableOpacity style={styles.checkCover} onPress={props.closeOption}>
              <FIcon name="square" size={30} color="#ffffff" />
                <Text style={styles.cancelText1}>Do show again</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                <Text style={styles.confirmText}>Close</Text>
              </TouchableOpacity>
              {/* <BtnLg title="close" onPress={closeModal} /> */}
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default Intro