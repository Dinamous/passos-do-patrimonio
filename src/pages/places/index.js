import React from 'react';
import { StyleSheet, Text, View,FlatList, Dimensions,TouchableOpacity } from 'react-native';

import styles from './styles';
import locais from '../../service/places.json';
import {useNavigation} from '@react-navigation/native'

export default function Places(){

  const navigation = useNavigation();

  function navigateToDetails(local){
  navigation.navigate('PlaceDetails',{local});
  
  }
    return (
      <View style={styles.container}>
       <Text style={styles.titulo}>Pontos Históricos</Text>
       <Text style={styles.subtitulo}>Selecione os pontos turísticos abaixo para saber mais.</Text>
       <View>
          <FlatList
          data = {locais}
          keyExtractor={local => String(local.id)}
          renderItem ={({item:local})=>(
            
            <TouchableOpacity onPress={()=>navigateToDetails(local)}>
              <View style={styles.local}>
                <Text style={styles.localNome}>{local.name}</Text>
                <Text style={styles.localEndereco}>{local.endereco}</Text>
              </View>
            </TouchableOpacity>

          )}
          
          />
       
       </View>
      </View>
    );
  
}
