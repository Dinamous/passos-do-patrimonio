import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight + 20,
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
        fontSize:18,
        marginBottom:20
    },
    local:{
        padding:15,
        backgroundColor:'#F9F9F9',
        marginTop:10,
        borderRadius:8
    },
    localNome:{
        color:'#707070',
        fontSize:18,
        fontWeight:'bold'
    },
    localEndereco:{
        color:'#AFAFAF',
        marginTop:5,
        fontWeight:'bold',
        fontSize:16,
    }
});