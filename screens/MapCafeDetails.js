// need both if we want to set & use state variables
import React, { useState } from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Image, Chip, Icon, Button } from '@rneui/themed';

// data file used to mock requests
import { getCafeById } from '../data/cafe-data';

export default function CafeDetailScreen({ route, navigation }) {

  // usually if setting state, do so at the top of the function
  // reminder ==> 1st index is variable name to *get*, 2nd is function name to *set*
  // instead of a spinner we effectively hide the icon by making it white if the state is null
  const [isFavorite, setIsFavorite] = useState(false);

  // get the params from the route
  const { detailId } = route.params;

  // use the helper function in the data file to get a specific cafe
  const currCafe = getCafeById(detailId);

  // cafe tags map (loop) here
  const cafeTags = currCafe.tags.map((currTags) => 
    // how we are mapping it 
    // currTags.key & currTags.value are coming from the key & value in the tags array [] in cafe-data.js
    <View style={styles.tags}> 
      <Chip
        key={currTags.key}
        containerStyle={{ 
          marginVertical: 8,
        }}
        titleStyle={{
          fontFamily: 'ElMessiri_400Regular',
          fontSize: 16,
          color: '#000'
        }}
      >
        {currTags.value}
      </Chip>
    </View>
  )

  // cafe features map (loop) here
  const cafeFeatures = currCafe.features.map((currFeatures) => 
  // how we are mapping it 
  // currFeatures.key & currFeatures.value are coming from the key & value in the features array [] in resort-data.js
  <View key={currFeatures.key} style={{flexDirection: 'row', backgroundColor: '#d5c1b7', marginRight: 10, marginBottom: 30, padding: 8, borderRadius: 8, width: 225}}>
    <Icon 
      type='ionicon'
      name='checkbox'
      color='#fff'
      size={28}
      marginLeft={10}
      marginRight={5}
    />
    <Text style={{color: '#453B3B', fontSize: 18}}>{currFeatures.value}</Text>
  </View>
  )  

  return (

    <View style={styles.container}>
      
      <ScrollView>

        <View style={styles.headingContainer}>
          <Text style={styles.cafeName}>{currCafe.name}</Text>
          <Text h2 style={{color: '#7e5d41'}}>{currCafe.distance}</Text>
        </View>

        <Image
          style={styles.cafeImage}
          source={{ uri: currCafe.keyImage }}
        />

        <View style={styles.detailsContainer}>
          
          <View style={styles.tagContainer}>
            {cafeTags}
          </View>

          <View style={styles.funcBtns}>
            <Button
              icon={{
                type: 'ionicon',
                size: 35,
                name: 'bookmark',
                color: isFavorite !== false ? '#ca9393' : '#626262',
              }}
              onPress={() => setIsFavorite(!isFavorite) }
            />
            <Button
              icon={{
                type: 'ionicon',
                size: 35,
                name: 'arrow-redo',
                color: isFavorite !== false ? '#ca9393' : '#626262',
              }}
              onPress={() => setIsFavorite(!isFavorite) }
            />
          </View>

        </View>

        <View style={styles.hours}>
          <Text h3>Hours:</Text>
          <Text style={styles.pText}>{currCafe.hours}</Text>
        </View>

        <Text h3>Matched Features:</Text>

        <ScrollView horizontal={true} marginTop={8}>
          {cafeFeatures}
        </ScrollView>

        <Text h3>Address:</Text>
        
        {/* in the future, want this to be a link */}
        <Text style={styles.cafeAddress}>{currCafe.address}</Text> 

      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 35,
    paddingHorizontal: 20
  },

  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cafeName: {
    fontFamily: 'ElMessiri_500Medium',
    fontSize: 30,
  },

  cafeImage: {
    width: '100%',
    height: 240,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor:'#626262',
    marginBottom: 12
  },

  detailsContainer: {
    width: '107%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  tagContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  
  tags: {
    marginRight: 8
  },
  
  funcBtns: {
    flex: 0.28,
    flexDirection: 'column'
  },
  
  hours: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30
  },
  
  pText: {
    color: '#7e5d41',
    fontSize: 18,
  },
  
  ftrContainer: {
    flex: 1,
    // flexDirection: 'row',
  },

  cafeAddress: {
    fontSize: 20,
    fontFamily: 'ElMessiri_500Medium',
    color: '#7e5d41',
    textDecorationLine: 'underline',
    paddingLeft: 12
  }

});