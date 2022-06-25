import React, { useState, useEffect, useRef}from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  Animated,
  StatusBar
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './style';
import { data } from './data';
// import RNPopoverMenu from 'react-native-popover-menu';
const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


// const DATA = Array(10)
//   .fill(null)
//   .map((_, idx) => ({
//     id: idx,
//     avatar: faker.image.avatar(),
//     fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
//   }));


const RenderListItem = ({ item, index }) => {
  return (
      <>
          {data.map((item) => (
        <View style={styles.card} key ={item.id}>
        <View style={styles.moreCover}>
        <Image source={require("../../assets/more.png")} style={styles.dotImg} />
        </View>
          <Image source= {item.img} style={styles.smPostImg} />
          <View style={styles.statContainer}>
            <View style={styles.statCover}>
               <Image source={require("../../assets/like.png")} style={styles.likeImg} />
               <Text style={styles.likeText}>{item.like}k</Text>
            </View>
             <View style={styles.statCover}>
               <Image source={require("../../assets/relations.png")} style={styles.likeImg} />
               <Text style={styles.likeText}>{item.relate}k</Text>
            </View> 
          </View>
          <Text style={styles.smTitleText} numberOfLines={2} >{item.title}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
          </View>
   ))}
      </>
  )
};

// const Profile = ({ props, navigation }) => {
  const Profile = ({ props, navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  
  });

  const goBack = () => {
    navigation.navigate('HomeStat')
 }
  // const RenderListItem = (item) => (
  //   <View key={item.id} style={styles.card}>
  //     <Image style={styles.avatar} source={{uri: item.avatar}} />
  //     <Text style={styles.fullNameText}>{item.fullName}</Text>
  //   </View>
  // );

  return (
    <SafeAreaView >
       <StatusBar barStyle="light-content" backgroundColor='#ca1ccb' hidden={true} />
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT - 32}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
          
      <View style={styles.aboutContainer}>
        <View>
          <View style={styles.aboutCover}>
            <Text style={styles.aboutTitle}>About Me</Text>
            <TouchableOpacity>
           <View style={styles.editCover}>
           <Image source={require("../../assets/edit.png")} style={styles.editImg} />
           </View>
           </TouchableOpacity>
            </View>
          <View>
            <Text style={styles.aboutContent}>
            Hello there, I have outstanding knowledge of principles of psychology and mental health and expertise in implementing many types of behavioral and counselling therapies. I have Competencies in administering and interpreting psychological tests and developing intervention programs to adjust behavior. Also ability to provide individual counselling services or facilitate group therapy sessions in a positive and effective manner.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postCover}>
          <Text style={styles.aboutTitle}>Post</Text>
          <TextInput 
          placeholder='Search'
          style={styles.inputCover} />
        </View>
           <View style={styles.cardContainer}>
         <RenderListItem  />
           </View>
         
      </View>
      </Animated.ScrollView>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
      <View style={{alignItems:'center',width:wp('90%'),  justifyContent:'center', position:'absolute', left:wp('35%')}}>
       
      <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
              width:110,
               height:110,
               borderRadius:100,
               marginTop:20,
               alignItems:'center'
            },
          ]}
          source={require('../../assets/kid.jpeg')} 
        />
       <View style={styles.navCover}>
          <TouchableOpacity onPress={goBack}>
          <Image source={require("../../assets/left-arrow.png")} style={styles.iconImg} />
          </TouchableOpacity>

          <TouchableOpacity style={{zIndex:90}}>
          <Image source={require("../../assets/gear.png")} style={styles.iconImg} />
          </TouchableOpacity>
        </View>
      <TouchableOpacity>
      <View style={styles.camCover}>
        <Image source={require("../../assets/photo-camera.png")} style={styles.camImg} />
        </View>
      </TouchableOpacity>
          <View style={styles.titleCover}>
          <Text style={styles.titleText}>@Tumininu</Text>
        </View>
      </View>
        <View style={styles.smContainer}>
     
            <View style={styles.list}>
                    <Text style={styles.item}>Posts</Text>
                    <Text style={styles.itemN}>529</Text>
            </View>
            <View style={styles.list}>
            <Text style={styles.item}>Followers</Text>
            <Text style={styles.itemN}>290</Text>
            </View>
             <View style={styles.list}>
             <Text style={styles.item}>Following</Text>
             <Text style={styles.itemN}>29</Text>
              </View>
    
        </View>
       
      </Animated.View>
     
        <View style={styles.newPostCover}>
        <TouchableOpacity>
          <Image source={require("../../assets/quill-pen.png")} style={styles.penImg} />
          </TouchableOpacity>

{/* 
          <RNPopover visible={visible} reference={ref}>
              <RNPopover.Menu label={"Editing"}>
                <RNPopover.Menu label={"Copy"} icon={copy} />
                <RNPopover.Menu label={"Paste"} icon={paste} />
              </RNPopover.Menu>
              <RNPopover.Menu >
                <RNPopover.Menu label={"Share"} icon={share} />
              </RNPopover.Menu>
          </RNPopover>; */}
        </View>
      
    </SafeAreaView>
  );
}



export default Profile;