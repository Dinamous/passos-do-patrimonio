import React from 'react';
import { StyleSheet, Text,ScrollView, View,FlatList, Dimensions,TouchableOpacity } from 'react-native';

import styles from './styles';
import {useNavigation,useRoute} from '@react-navigation/native';
import ImageSlider from 'react-native-image-slider';
import { SliderBox } from "react-native-image-slider-box";
import {Feather} from '@expo/vector-icons';

export default function Places(){
    const route = useRoute();
    const place = route.params.local;
    
    const images=[
        'https://www.imagemhost.com.br/images/2020/04/23/code2.png',
        'https://www.imagemhost.com.br/images/2020/04/23/code1.png',
        'https://www.imagemhost.com.br/images/2020/04/23/undraw_directions_x53j-1.png'
      ];

    return (
       console.log(place),
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <TouchableOpacity
                style={styles.botao}>
                    <Feather name="arrow-left" size={26} color="#FFF"/>
                    <Text style={styles.headerText}>Voltar</Text>
                </TouchableOpacity>
                
            </View> */}

            
            <SliderBox
            images={place.imagens}
            sliderBoxHeight={150}
            dotColor="#FF5050"
            inactiveDotColor="#90A4AE" 
           
            
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
            }}
            dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "#FF5050"
            }}
            ImageComponentStyle={{borderRadius: 15, width: '80%',}}
            imageLoadingColor="#FF5050"
            />
                
        <Text style={styles.titulo}>{place.name}</Text>    
        <Text style={styles.subtitulo}>{place.endereco}</Text>    

        <View style={styles.tombamento}>
            <Feather name="calendar" size={18} color="#707070" />
            <Text style={styles.tombamentoTitulo}>Data do Tombamento:</Text>
            
        </View>    
        <Text style={styles.subtitulo}>{place.data}</Text>

        <View style={styles.descricao}>
        <Text style={styles.DescricaoTitulo}>História do Local:</Text>
        <Text style={styles.descricaoTexto}>
            {place.descricao}
        </Text>

        </View>
        </View>
    );
  
}
