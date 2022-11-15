// importing libraries & components
import { StyleSheet, ScrollView, FlatList } from 'react-native'; // core components from React Native library
import { Text } from '@rneui/themed'; // UI components from React Native Elements library

// importing RNE <list item> component/template file, which will be rendered using the static data fed in through cafe-data.js file
import ListItemTemplate from '../components/ListItemTemplate';

// importing static cafe-data file (to act as API requests)
import { getAllCafes } from '../data/cafe-data';

export default function SearchBMapsScreenList({ navigation }) {
  
    const renderItem = ({ item }) => (
        <ListItemTemplate itemData={item} navigatorRef={navigation} />
    );

    return (
        <ScrollView style={styles.container}>

          <Text h2 style={styles.subHeading}>Cafés near you:</Text>

          <FlatList
              data={getAllCafes()}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 20
  },

  subHeading: {
    alignSelf: 'flex-start',
    paddingTop: 20,
    marginBottom: 0
  },

});