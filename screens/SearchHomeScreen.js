import { StyleSheet, View } from 'react-native';
import { Text, Button, SearchBar } from '@rneui/themed';

// notice that navigation is still passed from the outer container, two nodes back
export default function SearchHomeScreen({ navigation }) {

    // const state = {
    //     search: '',
    // };
    
    // const updateSearch = (search) => {
    //     this.setState({ search });
    // };
    
    // const { search } = this.state;  

  return (
    <View style={styles.container}>

      <SearchBar
        platform='android'
        inputStyle={{
          backgroundColor: 'white'
        }}
        containerStyle={{
          backgroundColor: 'white',
          borderWidth: 0.5,
          borderRadius: 12,
          height: 60,
          marginBottom: 20
        }}
        inputContainerStyle={{
          backgroundColor: 'white'
        }}
        placeholder="Type to search"
        // code found online re: updating search bar with users' keyboard input
        // onChangeText={this.updateSearch}
        // value={search}
        />

      <Text style={styles.pText}>
        Search via filters
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title='Help Me Find a Café With...'
          buttonStyle={{
            backgroundColor:'#c9b7b7',
            height: 240,
            borderRadius: 7,
            borderWidth: 0.5,
            borderColor:'black'
          }}
          titleStyle={{
            fontFamily: 'ElMessiri_400Regular',
            textTransform:'uppercase',
            fontSize: 28,
            maxWidth: '85%',
            lineHeight: 45
          }}
          onPress={() => navigation.navigate('SearchByFeatures')}
        />
        </View>

      <Text style={styles.pText}>
        Search via Map
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title='Cafés Around You'
          buttonStyle={{
            backgroundColor:'#9e8570',
            height: 240,
            borderRadius: 7,
            borderWidth: 0.5,
            borderColor:'black'
          }}
          titleStyle={{
            fontFamily: 'ElMessiri_400Regular',
            textTransform:'uppercase',
            fontSize: 28,
            maxWidth: '85%',
            lineHeight: 45
          }}
          onPress={() => navigation.navigate('SearchByMaps')}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
    
    container: {
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    search: {
        width: 100,
        paddingHorizontal: 0,
        backgroundColor: '#fff'
    },
    
  buttonContainer: {
    flex: 1,
    width: '100%',
    padding: 15
  },

  pText: {
    alignSelf: 'flex-start',
  }

});