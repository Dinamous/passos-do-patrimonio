import {StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex:1,
        // paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight + 20,
        backgroundColor:'#FFF'
        
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        
    },
    headerText:{
        fontSize:22,
        color:'#FFF',
        marginLeft:10
        
    },
    botao:{
        backgroundColor:'#FF5050',
        flexDirection:'row',
        padding:10,
        borderRadius:8,
        paddingRight:20
    },
    titulo:{
        alignItems:'center',
        color:'#707070',
        fontSize:26,
        flexDirection:'row',
        textAlign:'center',
        fontFamily:'Roboto',
        fontWeight:'bold',
        marginTop:5,
    },
    subtitulo:{
        color:'#AFAFAF',
        textAlign:'center',
        marginTop:5,
        fontSize:18,
        marginBottom:20
    },
    tombamento:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    tombamentoTitulo:{
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
        color:'#707070'

    },
    DescricaoTitulo:{
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
        color:'#707070',
        
    },
    descricao:{
        justifyContent:'center',
        alignItems:'center'
    },
    descricaoTexto:{
        color:'#AFAFAF',
        textAlign:'justify',
        marginTop:5,
        fontSize:16,
        marginBottom:20,
        paddingHorizontal:20
    }
    // local:{
    //     padding:15,
    //     backgroundColor:'#F9F9F9',
    //     marginTop:10,
    //     borderRadius:8
    // },
    // localNome:{
    //     color:'#707070',
    //     fontSize:18,
    //     fontWeight:'bold'
    // },
    // localEndereco:{
    //     color:'#AFAFAF',
    //     marginTop:5,
    //     fontWeight:'bold',
    //     fontSize:16,
    // },
   
});