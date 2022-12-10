import { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Image,
	ActivityIndicator,
	ImageBackground,
} from "react-native";
import { Text } from "@rneui/themed";

export default function HomeScreen() {
	const [images, setImages] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	const uri =
		"https://cafehopshops.jessicamlee.dev/api/v1/locations/read.php";

	const imageURL =
		"https://images.unsplash.com/photo-1516743619420-154b70a65fea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

	useEffect(() => {
		fetch(uri)
			.then((response) => response.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setImages(result.locations);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	return (
		<View style={styles.container}>
			<Text h3 style={styles.heading}>
				RECENT SAVES
			</Text>
			<Image style={styles.favoritesImage} source={{ uri: imageURL }} />
			<ImageBackground
				source={uri}
				style={{
					...styles.favoritesImage,
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
				}}
				imageStyle={{ borderRadius: 6 }}
			>
				<View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text h3 style={styles.heading}>
						Ki Tea House
					</Text>
				</View>
			</ImageBackground>

			<Text h3 style={styles.heading}>
				POPULAR CAFES
			</Text>
			{displayDataContainer(error, isLoaded, images)}
		</View>
	);
}

function displayDataContainer(error, isLoaded, dataResult) {
	// since flatlist will be moved to this function we need renderItem in scope
	const renderItem = ({ item }) => (
		<View style={styles.imageCard}>
			<Image style={styles.image} source={{ uri: item.cover_img }} />
			<Text h4 style={styles.h4}>
				{[item.name]}
			</Text>
			<Text h4 style={styles.h4}>
				{[item.likes]}
			</Text>
		</View>
	);

	if (error) {
		// show an error message
		return (
			<View>
				<Text>Error: {error.message}</Text>
			</View>
		);
	} else if (!isLoaded) {
		// show the ActivityIndicator (spinner)
		return (
			<View>
				<Text>Loading...</Text>
				<ActivityIndicator size="large" color="#00ff00" />
			</View>
		);
	} else if (dataResult.length === 0) {
		return (
			<View>
				<Text>No records found for search</Text>
			</View>
		);
	} else {
		// show the data in the FlatList
		return (
			<FlatList
				data={dataResult}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				numColumns={2}
				style={{ width: "100%" }}
				columnWrapperStyle={{ justifyContent: "space-evenly" }}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		paddingLeft: 50,
		paddingRight: 50,
	},

	heading: {
		textAlign: "center",
		color: "#ffffff",
	},

	pText: {
		alignSelf: "flex-start",
		padding: 10,
		color: "#000",
	},

	imageCard: {
		maxWidth: "90%",
		flex: 0.5,
		backgroundColor: "#fff",
		margin: 5,
		borderColor: "#000000",
		borderRadius: 10,
	},

	image: {
		width: "100%",
		height: 130,
		borderRadius: 8,
	},

	favoritesImage: {
		width: "100%",
		height: 160,
		marginBottom: 30,
		marginTop: 10,
		borderRadius: 10,
	},
});
