import { StyleSheet, View } from "react-native";
import { Text, Button, Icon } from "@rneui/themed";

export default function OnboardScreenTwo({ navigation }) {
	return (
		<View style={styles.container}>
			<Text h1 style={styles.heading}>
				Café Hop
			</Text>

			<View style={styles.shadowProp}>
				<Icon type="ionicon" name="cafe" color="#D17F7F" size={36} />
			</View>

			<Text h2 style={styles.subHeading}>
				Find the Optimal Café for You
			</Text>

			<Text style={styles.pText}>
				Filter your search to find a café with Wifi connection, Outlets
				to charge your devices, various Food Options, and the ambience
				you want.
			</Text>

			<Button
				title="Next"
				buttonStyle={{
					backgroundColor: "#CBA885",
					width: 100,
					height: 40,
					paddingLeft: 0,
					borderRadius: 5,
				}}
				titleStyle={{
					color: "#463629",
				}}
				onPress={() => navigation.navigate("OnboardThree")}
			/>
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
		marginBottom: 160,
		textTransform: "uppercase",
	},

	subHeading: {
		textAlign: "center",
		width: "50%",
		marginTop: 44,
		marginBottom: 27,
	},

	pText: {
		alignSelf: "center",
		textAlign: "center",
		width: "70%",
		marginBottom: 195,
	},
});
