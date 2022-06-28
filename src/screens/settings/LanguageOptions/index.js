import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, BackHandler, Pressable } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
import PlaceholderLoader from "./PlaceholderLoader";
import data from "./data"
// import { getPaymentOptions } from "@Request/paymentOptions";
import Modal from "react-native-modal";
import styles from "./style";


const LanguageOption = (props) => {
  // const dispatch = useDispatch();


  const [showPaymentOption, setShowPaymentOption] = useState(false);
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
                <Image source={item.img}  style={styles.bikeImg} />

              </View>
              <View style={styles.optionTextCover}>
                <Text style={styles.optionText}>{item.name}</Text>
                
              </View>

            </View>
            :
            <View style={styles.activeCover}>
              <View style={styles.iconCircle2}>
              <Image source={item.img}  style={styles.bikeImg} />
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
      isVisible={props.visibleRetrieve}
      onBackdropPress={closeModal}
      onSwipeComplete={() => setPaymentOption(false)}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      backdropColor="#0F8D8F"
      backdropOpacity={0.8}
      coverScreen={true}>
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowPaymentOption(false);
          }
        }} >
        <View style={styles.body5}>
            <View style={styles.logoCover}>
                <Image source={require("@Assets/image/KImage.png")} style={styles.logoImg} />
            </View>
          <View style={styles.imageHolder}>
            <View style={styles.smTitleCover}>
              <Text style={styles.smTitle}>Change your Language</Text>
            </View>

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
            {/* <View style={styles.controlCover}>
              <TouchableOpacity style={styles.cancelBtn} onPress={props.closeOption}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default LanguageOption