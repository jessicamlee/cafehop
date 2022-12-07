import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from '@rneui/themed';


export default function OnboardScreenThree({ navigation }) {
  return (
    <View style={styles.container}>

        <Text h1 style={styles.heading}>Café Hop</Text>

        <View style={styles.shadowProp}>
          <Icon
            type="ionicon"
            name="heart"
            color='#D17F7F'
            size={36}
          />
        </View>

        <Text h2 style={styles.subHeading}>Save your Favourite Cafés</Text>

        <Text style={styles.pText}>
          Save your Favourite Cafes into collections and instantly share them with your friends through the app!
        </Text>

        <Button
          title='Get Started'
          buttonStyle={{
            backgroundColor:'#7E5D41', 
            width: 140,
            height: 40,
            paddingLeft: 0,
            borderRadius: 5
          }}
          titleStyle={{
            color: '#fff'
          }}
          onPress={() => navigation.navigate('Main')}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
},

heading: {
    textAlign: 'center',
    marginBottom: 160,
    textTransform: 'uppercase',
},

subHeading: {
    textAlign: 'center',
    width: '50%',
    marginTop: 44,
    marginBottom: 27
},

pText: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '70%',
    marginBottom: 195
},

});