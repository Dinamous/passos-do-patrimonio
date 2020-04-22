import React,{useState,useEffect} from 'react';
import MapView,{ Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import locais from '../../service/places.json'

export default function Map(){

// const [locais,setLocais] = useState([]);

// useEffect(()=>{
//     setLocais(locais);
// },[])

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
        {locais.map(marker => (
            <Marker
            key={marker.id}
            coordinate={marker.LatLang}
            title={marker.name}
            description={marker.endereco}
            image={require('../../assets/pin.png')}
            />
        ))
        }
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