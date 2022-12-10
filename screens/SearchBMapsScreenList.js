// importing libraries & components
import { StyleSheet, ScrollView, FlatList } from "react-native"; // core components from React Native library
import { Text } from "@rneui/themed"; // UI components from React Native Elements library

// importing RNE <list item> component/template file, which will be rendered using the static data fed in through cafe-data.js file
import ListItemTemplate from "../components/ListItemTemplate";

export default function SearchBMapsScreenList({ route, navigation }) {
	const renderItem = ({ item }) => (
		<ListItemTemplate itemData={item} navigatorRef={navigation} />
	);

	const { cafes } = route.params;

	return (
		<ScrollView style={styles.container}>
			<Text h2 style={styles.subHeading}>
				Cafés near you:
			</Text>

			<FlatList
				data={cafes.locations}
				renderItem={renderItem}
				keyExtractor={(item) => item.name}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingLeft: 20,
	},

	subHeading: {
		alignSelf: "flex-start",
		paddingTop: 20,
		marginBottom: 0,
	},
});
