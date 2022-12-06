import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, ButtonGroup, Divider } from "@rneui/themed";

const arrNoiseTags = ["1", "2", "3", "4", "5"];
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
const arrPriceTags = ["any", "$", "$$", "$$$"];

let snapshot = [0, 0, 0, 0, 0];

export default function SearchHomeScreen({
	isVisible,
	setIsVisible,
	setTagFilter,
}) {
	// state for each button group
	const [noiseTagIndex, setNoiseTagIndex] = useState(0);
	const [decorTagIndex, setDecorTagIndex] = useState(0);
	const [musicTagIndex, setMusicTagIndex] = useState(0);
	const [featureTagIndex, setAmenTagIndex] = useState(0);

	return (
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
				<ButtonGroup
					buttons={arrFeatureTags}
					selectedIndex={featureTagIndex}
					onPress={(value) => {
						setFeatureTagIndex(value);
					}}
				/>
			</View>

			<Divider style={styles.divLine} />

			<View style={styles.btnContainer}>
				<Button
					title="Apply"
					icon={{
						name: "filter",
						type: "font-awesome",
						size: 15,
						color: "white",
					}}
					onPress={() => {
						// build the return object
						let tagObj = buildTagFilterObject(
							noiseTagIndex,
							decorTagIndex,
							musicTagIndex,
							featureTagIndex
						);

						// also take a snapshot, this will allow a reset the next time around
						takeSnapshot(
							noiseTagIndex,
							decorTagIndex,
							musicTagIndex,
							featureTagIndex
						);

						//console.log(JSON.stringify(ret));
						//console.log('snap:' + JSON.stringify(snapshot));

						// set back in the parent
						setTagFilter(tagObj);

						// hide the overlay
						setIsVisible(false);
					}}
				/>
			</View>
			<View style={styles.btnContainer}>
				<Button
					title="Cancel"
					icon={{
						name: "close",
						type: "font-awesome",
						size: 15,
						color: "white",
					}}
					onPress={() => {
						// reset to snapshot
						setNoiseTagIndex(snapshot[0]);
						setDecorTagIndex(snapshot[1]);
						setMusicTagIndex(snapshot[2]);
						setAmenTagIndex(snapshot[3]);
						setPriceTagIndex(snapshot[4]);

						// don't need to return anything since it should be the same as the current fetch
						setIsVisible(false);
					}}
				/>
			</View>
		</View>
	);
}

function takeSnapshot(
	noiseTagIndex,
	decorTagIndex,
	musicTagIndex,
	amenTagIndex,
	priceTagIndex
) {
	snapshot[0] = noiseTagIndex;
	snapshot[1] = decorTagIndex;
	snapshot[2] = musicTagIndex;
	snapshot[3] = amenTagIndex;
	snapshot[4] = priceTagIndex;
}

function buildTagFilterObject(
	noiseTagIndex,
	decorTagIndex,
	musicTagIndex,
	amenTagIndex,
	priceTagIndex
) {
	let retFilterObj = [];

	// 0 is any, so don't add
	if (noiseTagIndex !== 0) {
		let temp = {
			category: "noise",
			tag: arrNoiseTags[noiseTagIndex],
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
			category: "decor",
			tag: arrMusicTags[musicTagIndex],
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

	if (priceTagIndex !== 0) {
		let temp = {
			category: "price",
			tag: arrPriceTags[priceTagIndex],
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

	divLine: {
		marginTop: 10,
		marginBottom: 10,
	},

	pText: {
		fontSize: 20,
		paddingBottom: 10,
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
});
