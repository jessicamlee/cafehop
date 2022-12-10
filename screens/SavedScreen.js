import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";

export default function SavedScreen() {
	return (
		<View style={styles.container}>
			<Text h1 style={styles.heading}>
				Placeholder Saved Cafés Screen
			</Text>

			<Text style={styles.pText}>Page under development.</Text>

			<Text style={styles.pText}>Coming soon!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingTop: 30,
	},

	heading: {
		textAlign: "center",
		marginBottom: 30,
	},

	pText: {
		alignSelf: "center",
		padding: 10,
	},
});
