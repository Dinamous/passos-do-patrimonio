import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight + 20,
        alignItems:'center'
    },
    titulo:{
        alignItems:'center',
        color:'#FF5050',
        fontSize:35,
        flexDirection:'row',
        textAlign:'center',
        fontFamily:'Roboto',
        fontWeight:'bold'
    },
    subtitulo:{
        color:'#AFAFAF',
        textAlign:'center',
        marginTop:15,
        fontSize:20,
        marginBottom:20
    },
    container2:{
        // flex:1,
        // alignItems:'center',
        justifyContent:'center',
    },
    botao:{
        backgroundColor:'#ff5050',
        color:'#FFF',
        paddingHorizontal:12,
        paddingVertical:10,
        borderRadius:8,
        fontSize:25,
        textAlign:'center',
        marginTop:40,
    },
    container3:{
        paddingTop:80,
    }

});