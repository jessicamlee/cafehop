// need both if we want to set & use state variables
import React, { useEffect, useState } from "react";

import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Image, Chip, Button } from "@rneui/themed";

export default function CafeDetailScreen({ route, navigation }) {
	// usually if setting state, do so at the top of the function
	// reminder ==> 1st index is variable name to *get*, 2nd is function name to *set*
	// instead of a spinner we effectively hide the icon by making it white if the state is null
	const [isFavorite, setIsFavorite] = useState(false);

	const [currentCafe, setCurrentCafe] = useState(null);

	// get the params from the route
	const { detailId } = route.params;

	const uri =
		"https://cafehopshops.jessicamlee.dev/api/v1/locations/read.php";

	useEffect(() => {
		const data = fetch(`${uri}?id=${detailId}`)
			.then((res) => {
				if (res.status >= 400 && res.status < 600) {
					throw new Error("Bad response from server");
				}
				return res.json();
			})
			.then(
				(json) => {
					console.log("Success");
					setCurrentCafe(json.locations[0]);
				},
				(err) => {
					console.error(err);
				}
			)
			.catch((err) => {
				Promise.reject(err);
			});
	}, [uri]);

	return (
		<View style={styles.container}>
			{currentCafe && (
				<ScrollView>
					<View style={styles.headingContainer}>
						<Text style={styles.cafeName}>{currentCafe.name}</Text>
					</View>

					<Image
						style={styles.cafeImage}
						source={{ uri: currentCafe.cover_img }}
					/>

					<Text h3>Matched Features</Text>
					<View style={styles.funcBtns}>
						<Button
							icon={{
								type: "ionicon",
								size: 35,
								name: "bookmark",
								color:
									isFavorite !== false
										? "#ca9393"
										: "#626262",
							}}
							onPress={() => setIsFavorite(!isFavorite)}
						/>
						<Button
							icon={{
								type: "ionicon",
								size: 35,
								name: "arrow-redo",
								color:
									isFavorite !== false
										? "#ca9393"
										: "#626262",
							}}
							onPress={() => setIsFavorite(!isFavorite)}
						/>
					</View>
					<View style={styles.detailsContainer}>
						<ScrollView horizontal={true} marginTop={8}>
							<View style={styles.tagContainer}>
								{currentCafe &&
									currentCafe.tags.map((currTags) => (
										// how we are mapping it
										<View style={styles.tags}>
											<Chip
												key={currTags.tag_id}
												containerStyle={{
													marginVertical: 8,
												}}
												titleStyle={{
													fontFamily:
														"ElMessiri_400Regular",
													fontSize: 16,
													color: "#000",
												}}
											>
												{currTags.tag}
											</Chip>
										</View>
									))}
							</View>
						</ScrollView>
					</View>

					<Text h3>Address</Text>

					{/* in the future, want this to be a link */}
					<Text style={styles.cafeAddress}>
						{`${currentCafe.address.street}, ${currentCafe.address.city}, ${currentCafe.address.region}`}
					</Text>
					<Text style={styles.cafeAddress}>
						{currentCafe.address.code}
					</Text>

					<Text h3>Phone</Text>
					<Text>{currentCafe.phone}</Text>

					<Text h3>Website</Text>
					<Text>{currentCafe.website}</Text>
				</ScrollView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingVertical: 35,
		paddingHorizontal: 20,
	},

	headingContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	cafeName: {
		fontFamily: "ElMessiri_500Medium",
		fontSize: 30,
	},

	cafeImage: {
		width: "100%",
		height: 240,
		borderRadius: 7,
		borderWidth: 0.5,
		borderColor: "#626262",
		marginBottom: 12,
	},

	detailsContainer: {
		width: "107%",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	tagContainer: {
		flex: 1,
		flexDirection: "row",
	},

	tags: {
		marginRight: 8,
	},

	funcBtns: {
		marginLeft: "auto",
		flex: 0.28,
		flexDirection: "column",
	},

	pText: {
		color: "#7e5d41",
		fontSize: 18,
	},

	ftrContainer: {
		flex: 1,
		// flexDirection: 'row',
	},

	cafeAddress: {
		fontSize: 20,
		fontFamily: "ElMessiri_500Medium",
		color: "#7e5d41",
		textDecorationLine: "underline",
		paddingLeft: 12,
	},
});
