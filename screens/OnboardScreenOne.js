import { StyleSheet, View } from "react-native";
import { Text, Button, Icon } from "@rneui/themed";

export default function OnboardScreenOne({ navigation }) {
	return (
		<View style={styles.container}>
			<Text h1 style={styles.heading}>
				Café Hop
			</Text>

			<View style={styles.shadowProp}>
				<Icon type="ionicon" name="time" color="#D17F7F" size={36} />
			</View>

			<Text h2 style={styles.subHeading}>
				Live Café Tracking for Busy Times
			</Text>

			<Text style={styles.pText}>
				Check in advance if a café is busy to plan your trip efficiently
				and avoid wait times when you arrive at your destination.
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
				onPress={() => navigation.navigate("OnboardTwo")}
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
		width: "80%",
		marginBottom: 195,
	},
});
