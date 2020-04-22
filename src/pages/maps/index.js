import React,{useState,useEffect} from 'react';
import MapView,{ Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import locais from '../../service/places.json'

export default function Map(){

const [incidents,setincidents] = useState([]);

useEffect(()=>{
    setincidents(locais);
},[])

  return(
        
      <View style={styles.container}>
        <MapView
        customMapStyle={[
            {
            "featureType": "poi.business",
            "stylers": [
                 {
                     "visibility": "off"
                         }
             ]
             },
             {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
             ]
            }
        ]}
        style={styles.mapStyle}
        initialRegion={{
            latitude: -20.719007,
            longitude: -46.610590,
            latitudeDelta: 0.0312,
            longitudeDelta: 0.0221,
        }}
        
        rotateEnabled={false}
        // maxZoomLevel={500}
        minZoomLevel={12}
        maxZoomLevel={18}
        showsPointsOfInterest={false}
        >
        {locais.map(local =>{
            
            <Marker
            key={local.id}
            coordinate={local.LatLang}
            title={local.name}
            description={local.endereco}
            image={require('../../assets/pin.png')}
          />
        })}
        {/* <Marker
        coordinate={{latitude:-20.719007,longitude:-46.610590}}
        title="local"
        image={require('../../assets/pin.png')}/>*/}
        </MapView> 
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});