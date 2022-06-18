import React from "react";
import {
  View,Text, Image, StatusBar, Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import styles from "./style";
import {useForm, Controller} from 'react-hook-form'

const Login = ({ props, navigation }) => {
  const {
  control, 
    handleSubmit,
    formState: {errors, isValid,}
  } = useForm({mode: 'onBlur'})
  
  const submit = () => {
     navigation.navigate('TabNavigator', { screen: 'Home' })
  }
  // handleSubmit(onSubmit)
  const onSubmit = data => console.log(data)
  return (
    <View style={styles.vontainer}>
      <StatusBar hidden />
        <View style={styles.logoCover}>
          <Image source={require("../../assets/mee.jpg")} style={styles.logoImg} />
          <View style={styles.abrevCover}>
            <Text style={styles.smLetter}>F</Text>
            <Text style={styles.mdLetter}>C</Text>
          </View>
        </View>
        <View style={styles.appName}>
          <Text style={styles.mdLetterFlip}>Faceless</Text>
          <Text style={styles.smLetterFlip}>Counsel</Text>
        </View>
        <View style={styles.welcomeCover}>
          <Text style={styles.welcomeText}>Let's go</Text>
        </View>

        <View style={styles.inputCover}>
          <View style={styles.labelCover}>
            <Text style={styles.labelText}>Username</Text>
          </View>
        <Controller        
         control={control}        
         name="name"        
         render={({field: {onChange, value, onBlur}}) => (            
           <TextInput
           style={styles.textField}           
             iconName="person"            
             iconType="MaterialIcons"            
             placeholder="Username or Email"            
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)}          
           />        
         )}
         rules={{
           required: {
             value: true,
             message: 'Field is required!'
           }
         }}
        
      />

         <View style={styles.passwordCover}>
         <View style={styles.labelCover}>
            <Text style={styles.labelText}>Password</Text>
          </View>
        <Controller        
         control={control}        
         password="password"        
         render={({field: {onChange, password,  onBlur}}) => (            
           <TextInput
           style={styles.textField}           
             iconName="person"            
             iconType="MaterialIcons"            
             placeholder="Password"            
             value={password}  
             secureTextEntry={true}          
             onBlur={onBlur}            
             onChangeText={password => onChange(password)}          
           />        
         )}
         rules={{
           required: {
              password :true,
             message: 'Field is required!'
           }
         }}
      />
         </View>

        </View>



        <View style={styles.btnCover} >
          <TouchableOpacity style={styles.btn}   onPress={submit}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
<View style={styles.absCover}>
<Image source={require("../../assets/abs.jpg")} style={styles.absImg} />
</View>
    </View>
  );
};



export default Login;