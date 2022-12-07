// importing libraries & components
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// importing fonts
import { useFonts } from "expo-font";
import {
	ElMessiri_400Regular,
	ElMessiri_500Medium,
	ElMessiri_700Bold,
} from "@expo-google-fonts/el-messiri";

// importing themes
import { Icon, ThemeProvider } from "@rneui/themed";
import { cafeHopTheme } from "./themes/cafeHopTheme";

// importing screens (for Tab navigation)
import HomeScreen from "./screens/HomeScreen";
import SearchScreenStackNav from "./screens/SearchScreenStackNav.js";
import SavedScreen from "./screens/SavedScreen";

// Instantiating Tab navigator component (as a constant) to reference in the root of the app (as it will be on every page/screen)
// Bottom Tab navigator as app's main global navigation menu
const Tab = createBottomTabNavigator();

export default function App() {
	// add the hook that loads the font
	let [loadFonts] = useFonts({
		ElMessiri_400Regular,
		ElMessiri_500Medium,
		ElMessiri_700Bold,
	});

	// add a conditional to show the ActivityIndicator until the font loads
	if (!loadFonts) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#b9c8ff" />
			</View>
		);
	}

	return (
		<SafeAreaProvider>
			{/* root of the app wrapped in <Safe Area Provider> to account for device notches/headers */}
			<ThemeProvider theme={cafeHopTheme}>
				{/* root of the app also wrapped in created theme component */}
				<NavigationContainer>
					{/* Tab Navigator component, referenced by const name defined above */}
					<Tab.Navigator
						screenOptions={{
							tabBarActiveTintColor: "#ca9393",
							tabBarInactiveTintColor: "#626262",
							headerTitleContainerStyle: {
								paddingHorizontal: 10,
							},
						}}
					>
						{/* Home Screen */}
						<Tab.Screen
							name="Home"
							component={HomeScreen}
							options={{
								tabBarIcon: ({ color, size }) => (
									<Icon
										type="ionicon"
										name="home-outline"
										color={color}
										size={size}
									/>
								),
								tabBarShowLabel: false,
							}}
						/>
						{/* Search Screen */}
						<Tab.Screen
							name="FILTER YOUR SEARCH"
							component={SearchScreenStackNav}
							options={{
								tabBarIcon: ({ color, size }) => (
									<Icon
										type="ionicon"
										name="search"
										color={color}
										size={size}
									/>
								),
								tabBarShowLabel: false,
							}}
						/>
						{/* Saved Screen */}
						<Tab.Screen
							name="Saves"
							component={SavedScreen}
							options={{
								tabBarIcon: ({ color, size }) => (
									<Icon
										type="ionicon"
										name="bookmark"
										color={color}
										size={size}
									/>
								),
								tabBarShowLabel: false,
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10,
	},
});
