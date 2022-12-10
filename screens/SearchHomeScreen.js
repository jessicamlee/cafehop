import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Button } from "react-native";
import { Text, ButtonGroup, Divider } from "@rneui/themed";
import CheckBox from "expo-checkbox";

const arrNoiseTags = ["1", "2", "3", "4", "5"];
const arrNoiseWordTags = [
	"very quiet",
	"quiet",
	"average",
	"loud",
	"very loud",
];
const arrDecorTags = [
	"Modern",
	"Minimal",
	"Cozy",
	"Vintage",
	"Indusgtrial",
	"Artsy",
];
const arrMusicTags = ["Jazz", "Pop", "k-Indie", "Japanese", "Chinese", "Lofi"];
const arrFeatureTags = [
	"Wifi",
	"Outlets",
	"Food options",
	"Untimed seating",
	"Free parking",
	"Transit-access",
];

export default function SearchHomeScreen({ navigation }) {
	// state for each button group
	const [noiseTagIndex, setNoiseTagIndex] = useState(0);
	const [decorTagIndex, setDecorTagIndex] = useState(0);
	const [musicTagIndex, setMusicTagIndex] = useState(0);
	const [featureTagIndex, setAmenTagIndex] = useState(0);

	const [checkedWifi, setCheckedWifi] = useState(false);
	const [checkedOutlets, setCheckedOutlets] = useState(false);
	const [checkedFood, setCheckedFood] = useState(false);
	const [checkedSeats, setCheckedSeats] = useState(false);
	const [checkedTransit, setCheckedTransit] = useState(false);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.pText}>I would like a café with...</Text>

				<View style={styles.groupContainer}>
					<Text style={styles.longTitleBackground}>Noise Level</Text>
					<View style={styles.space}>
						<ButtonGroup
							buttons={arrNoiseTags}
							selectedIndex={noiseTagIndex}
							onPress={(value) => {
								setNoiseTagIndex(value);
							}}
						/>
					</View>
				</View>

				<View style={styles.groupContainer}>
					<Text style={styles.shortTitleBackground}>Decor</Text>
					<ButtonGroup
						buttons={arrDecorTags}
						selectedIndex={decorTagIndex}
						onPress={(value) => {
							setDecorTagIndex(value);
						}}
					/>
				</View>

				<View style={styles.groupContainer}>
					<Text style={styles.shortTitleBackground}>Music</Text>
					<ButtonGroup
						buttons={arrMusicTags}
						selectedIndex={musicTagIndex}
						onPress={(value) => {
							setMusicTagIndex(value);
						}}
					/>
				</View>
				<View style={styles.groupContainer}>
					<Text style={styles.mediumTitleBackground}>Features</Text>
					<View style={styles.wrapper}>
						<CheckBox
							style={styles.checkboxContainer}
							value={checkedWifi}
							onValueChange={() => setCheckedWifi(!checkedWifi)}
							color={checkedWifi ? "#7E5D41" : undefined}
							onPress={(value) => {
								featureTagIndex(value);
							}}
							// selectedIndex={featureTagIndex}
						/>
						<Text style={styles.text}>{arrFeatureTags[0]}</Text>
					</View>
				</View>
				<View style={styles.groupContainer}>
					<View style={styles.wrapper}>
						<CheckBox
							style={styles.checkboxContainer}
							value={checkedOutlets}
							onValueChange={() =>
								setCheckedOutlets(!checkedOutlets)
							}
							color={checkedOutlets ? "#7E5D41" : undefined}
							onPress={(value) => {
								featureTagIndex(value);
							}}
						/>
						<Text style={styles.text}>{arrFeatureTags[1]}</Text>
					</View>
				</View>
				<View style={styles.groupContainer}>
					<View style={styles.wrapper}>
						<CheckBox
							style={styles.checkboxContainer}
							value={checkedFood}
							onValueChange={() => setCheckedFood(!checkedFood)}
							color={checkedFood ? "#7E5D41" : undefined}
							onPress={(value) => {
								featureTagIndex(value);
							}}
						/>
						<Text style={styles.text}>{arrFeatureTags[2]}</Text>
					</View>
				</View>
				<View style={styles.groupContainer}>
					<View style={styles.wrapper}>
						<CheckBox
							style={styles.checkboxContainer}
							value={checkedSeats}
							onValueChange={() => setCheckedSeats(!checkedSeats)}
							color={checkedSeats ? "#7E5D41" : undefined}
							onPress={(value) => {
								featureTagIndex(value);
							}}
						/>
						<Text style={styles.text}>{arrFeatureTags[3]}</Text>
					</View>
				</View>
				<View style={styles.groupContainer}>
					<View style={styles.wrapper}>
						<CheckBox
							style={styles.checkboxContainer}
							value={checkedTransit}
							onValueChange={() =>
								setCheckedTransit(!checkedTransit)
							}
							color={checkedTransit ? "#7E5D41" : undefined}
							onPress={(value) => {
								featureTagIndex(value);
							}}
						/>
						<Text style={styles.text}>{arrFeatureTags[4]}</Text>
					</View>
				</View>
				<Divider style={styles.divLine} />

				<View style={styles.btnContainer}>
					<Button
						title="See Results ->"
						color="#000000"
						onPress={() => {
							let tagArr = buildTagFilterObject(
								noiseTagIndex,
								decorTagIndex,
								musicTagIndex,
								featureTagIndex
							);

							const payload = {
								sort_term: "location-name-desc",
								tag_filter_type: "ANY",
								tags: tagArr,
							};

							fetch(
								"https://cafehopshops.jessicamlee.dev/api/v1/locations/searchbytag.php",
								{
									method: "POST",
									body: JSON.stringify(payload),
									headers: {
										"Content-type":
											"application/json; charset=UTF-8",
									},
								}
							)
								.then((res) => {
									if (res.status >= 400 && res.status < 600) {
										throw new Error(
											"Bad response from server"
										);
									}
									return res.json();
								})
								.then(
									(json) => {
										console.log("Success");
										navigation.navigate("SearchByMaps", {
											cafes: json,
											postSuccess: true,
										});
										return;
									},
									(err) => {
										console.error(err);
									}
								)
								.catch((err) => {
									Promise.reject(err);
								});
						}}
					/>
				</View>
				<View style={styles.btnContainer}>
					<Button
						title="Cancel"
						color="#000000"
						onPress={() => {
							// reset
							setNoiseTagIndex(0);
							setDecorTagIndex(0);
							setMusicTagIndex(0);
							setAmenTagIndex(0);
						}}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

function buildTagFilterObject(
	noiseTagIndex,
	decorTagIndex,
	musicTagIndex,
	amenTagIndex
) {
	let retFilterObj = [];

	if (noiseTagIndex !== 0) {
		let temp = {
			category: "noise",
			tag: arrNoiseWordTags[noiseTagIndex],
		};
		retFilterObj.push(temp);
	}

	if (decorTagIndex !== 0) {
		let temp = {
			category: "decor",
			tag: arrDecorTags[decorTagIndex],
		};
		retFilterObj.push(temp);
	}

	if (musicTagIndex !== 0) {
		let temp = {
			category: "music",
			tag: arrMusicTags[musicTagIndex].toLowerCase(),
		};
		retFilterObj.push(temp);
	}

	if (amenTagIndex !== 0) {
		let temp = {
			category: "amenities",
			tag: arrAmenTags[amenTagIndex],
		};
		retFilterObj.push(temp);
	}

	return retFilterObj;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "center",
		padding: 25,
	},

	groupContainer: {
		width: "100%",
		marginTop: 10,
		color: "#fff",
	},

	btnContainer: {
		width: "100%",
		padding: 5,
	},
	shortTitleBackground: {
		backgroundColor: "#CEA885",
		color: "#fff",
		width: "22%",
		borderRadius: 7,
		padding: 3,
		paddingLeft: 10,
		textTransform: "uppercase",
		marginBottom: 25,
	},

	mediumTitleBackground: {
		backgroundColor: "#CEA885",
		color: "#fff",
		width: "29%",
		borderRadius: 7,
		padding: 3,
		paddingLeft: 10,
		textTransform: "uppercase",
		marginBottom: 25,
	},
	longTitleBackground: {
		backgroundColor: "#CEA885",
		color: "#fff",
		width: "35%",
		borderRadius: 7,
		padding: 3,
		paddingLeft: 10,
		textTransform: "uppercase",
		marginBottom: 25,
	},

	divLine: {
		marginTop: 10,
		marginBottom: 10,
	},

	pText: {
		fontSize: 20,
		paddingBottom: 10,
	},

	checkboxContainer: {
		marginLeft: 30,
		marginTop: 10,
	},

	wrapper: {
		height: 45,
		margin: 10,
		flexDirection: "row",
		alignContent: "center",
		backgroundColor: "#F2F2F2",
		borderRadius: 25,
	},
	text: {
		marginLeft: 10,
		marginTop: 10,
		color: "#626262",
	},
});
