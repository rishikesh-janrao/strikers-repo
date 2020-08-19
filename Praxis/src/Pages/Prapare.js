import React from 'react';
import { StyleSheet,
   Text,
   View,
   ImageBackground ,
   Dimensions,
   SafeAreaView,
   TextInput,
   Image,
   CheckBox,
   TouchableOpacity,
   Switch
} from 'react-native';

const page1 = require('../assets/images/loginbg.png');

const {width,height} = Dimensions.get('window');


export default class Prepare extends React.Component {
   render() {
      return (
         <SafeAreaView style={{flex:1}}>
            <ImageBackground source={page1} style={styles.backgroundImage} >
            <View style={{flex:1}}>
               <Text style={styles.textstyle}>One last step...</Text>
               <Text style={styles.tagline}>Please submit the information below</Text>
               
               <View style={{justifyContent:'center',alignItems:'center'}}>
                  
               <View 
               style={{
                  marginTop:'5%',
                  backgroundColor:'white',
                  borderRadius:10,
                  width:'80%',
                  height:'68%',
                  shadowColor: "#000",
                  shadowOffset: {
                     width: 0,
                     height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,
                  elevation: 4,
                  }}>
                     <View style={{justifyContent:'flex-start',flexDirection:'row',marginTop:22,marginLeft:15}}>
                     <Text style={styles.question}>What are you preparing for</Text>
                                 
                     </View>
                     <View style={{marginLeft:'5%'}}>
                     <TextInput style={styles.InputBox} placeholder="For eg Medical, Engineering, CAT...." />
                    <View style={styles.CheckedItem}>
                        <CheckBox value={true} />
                        <Text style={{marginTop:5}}>Add a Subject</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:'20%'}}>
                    <ImageBackground style={styles.submitbtn} source={require('../assets/images/bgbtn.png')} width={22}>                      
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginTop:'4%',marginRight:'6%'}} >Continue</Text>
                        </ImageBackground>
                    </View>
                     </View>
                    
                  </View>
                
               
               </View>            
            </View>
            
            </ImageBackground>
        </SafeAreaView>
      );
   }
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   backgroundImage:{
      height:height,
      width:width,
    },

   textstyle:{
      top:'6%',
      left:'10%',
      fontFamily:'arial',
      fontSize:29,
      color:'white',
   },

   tagline:{
      top:'6.5%',
      left:'10%',
      fontFamily:'arial',
      fontSize:14,
      color:'white',
      width:'80%',

   },

   question:{
    fontSize:17,
   },
   InputBox:{
       marginTop:10,
       marginLeft:5,
       borderWidth:1,
       borderRadius:10,
       borderColor:'gray',
       width:"85%",
       height:'14%',
       fontSize:12,
   },
   CheckedItem:{
    flexDirection:'row',
        marginTop:'10%',
   },
   submitbtn:{
width:'90%',
height:'52%',
alignItems:'center',
   }
}); 