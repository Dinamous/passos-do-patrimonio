import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native';

import styles from './styles';
export default function Quiz(){
    return (
      <View style={styles.container}>
       <Text style={styles.titulo}>Quiz Históricos</Text>
       <View style={styles.container3}>
       <Text style={styles.subtitulo}>Este quis serve para você afiar seus conhecimentos históricos da sua região.</Text>
       <Text style={styles.subtitulo}>Quer ser um Historiador?</Text>
       <View style={styles.container2}>
         <TouchableOpacity>
           <Text style={styles.botao}>Inciciar Quiz</Text>
         </TouchableOpacity>
       
       </View>
       </View>
      </View>
    );
  
}
