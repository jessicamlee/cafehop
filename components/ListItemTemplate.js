// need both if we want to set & use state variables
import React, { useState } from "react";

import { Text, Button, ListItem, Avatar, Chip } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

export default function ListItemTemplate({
	itemData,
	navigatorRef,
}) /* itemData will pass through our cafe data */ {
	// usually if setting state, do so at the top of the function
	// reminder ==> 1st index is variable name to *get*, 2nd is function name to *set*
	// instead of a spinner we effectively hide the icon by making it white if the state is null
	const [isFavorite, setIsFavorite] = useState(false);

	// use the helper function in the data file to get a specific flower
	const currCafe = itemData;

	// amenities map here
	const cafeTags = currCafe.tags.map((currTags) => (
		// how we are mapping it
		// currTags.key & currTags.value are coming from the key & value in the amenities array [] in cafe-data.js
		<View>
			<Chip
				key={currTags.key}
				containerStyle={{
					marginVertical: 4,
					// paddingVertical: 0, ==> unsure how to make chip padding less
					height: 38,
				}}
				titleStyle={{
					fontFamily: "ElMessiri_400Regular",
					fontSize: 16,
					color: "#000",
				}}
			>
				{currTags.value}
			</Chip>
		</View>
	));

	return (
		<ListItem containerStyle={{ alignItems: "flex-start" }}>
			<Avatar
				source={{ uri: itemData.keyImage }}
				size={140}
				containerStyle={{ aspectRatio: 1.25 }}
				onPress={() =>
					navigatorRef.navigate("MapCafeDetails", {
						detailId: itemData.id,
					})
				}
			/>

			<ListItem.Content style={styles.contentContainer}>
				<Text
					h3
					style={{
						marginVertical: 0,
						paddingVertical: 0,
						lineHeight: 24,
						width: "120%",
					}}
					onPress={() =>
						navigatorRef.navigate("MapCafeDetails", {
							detailId: itemData.id,
						})
					}
				>
					{itemData.name}
				</Text>

				{cafeTags}

				<View style={styles.hours}>
					<Text h4>Hours:</Text>
					<Text style={styles.pText}>{itemData.hours}</Text>
				</View>
			</ListItem.Content>

			<Button
				buttonStyle={{ paddingVertical: 0 }}
				icon={{
					type: "ionicon",
					size: 30,
					name: "bookmark",
					color: isFavorite !== false ? "#ca9393" : "#626262",
				}}
				onPress={() => setIsFavorite(!isFavorite)}
			/>
		</ListItem>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
	},

	tags: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
	},

	hours: {
		flex: 1,
		flexDirection: "row",
	},

	pText: {
		color: "#7e5d41",
	},
});
