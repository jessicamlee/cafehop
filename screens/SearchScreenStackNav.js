import { View } from "react-native";
import { Icon } from "@rneui/themed";

// importing RN Stack Navigator library for nested Stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importing screens (for Stack navigation)
import SearchHomeScreen from "./SearchHomeScreen";
import SearchAFeaturesScreen from "./SearchAFeatures";
import SearchBMapsScreenList from "./SearchBMapsScreenList";
import CafeDetailScreen from "./MapCafeDetails";

// Instantiating Stack navigator component (as a constant) to reference in the search page/screen of the app
const Stack = createNativeStackNavigator();

export default function SearchScreenStackNav() {
	return (
		<Stack.Navigator
			initialRouteName="SearchHome"
			screenOptions={{
				headerBackTitleStyle: {
					marginLeft: 20,
				},
				headerTitleStyle: {
					fontFamily: "ElMessiri_400Regular",
					fontSize: 26,
				},
			}}
		>
			<Stack.Screen
				name="SearchHome"
				component={SearchHomeScreen}
				options={{
					title: "",
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="SearchByMaps"
				component={SearchBMapsScreenList}
				options={{
					title: "YOUR MAP RESULTS",
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								justifyContent: "flex-start",
								paddingRight: 18,
							}}
						>
							<Icon type="ionicon" name="filter" size={24}></Icon>
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="MapCafeDetails"
				component={CafeDetailScreen}
				options={{ title: "VIEWING" }}
			/>
		</Stack.Navigator>
	);
}
