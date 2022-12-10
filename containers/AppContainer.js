// importing RN Stack Navigator library for nested Stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importing screens (for Stack navigation)
import OnboardScreenOne from "../screens/OnboardScreenOne";
import OnboardScreenTwo from "../screens/OnboardScreenTwo";
import OnboardScreenThree from "../screens/OnboardScreenThree";
import MainContainer from "./MainContainer";

// Instantiating Stack navigator component (as a constant) to reference in the first page/screen of the app launch
const Stack = createNativeStackNavigator();

export default function AppContainerStackNav() {
	return (
		<Stack.Navigator initialRouteName="OnboardOne">
			<Stack.Screen
				name="OnboardOne"
				component={OnboardScreenOne}
				options={{
					title: "",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="OnboardTwo"
				component={OnboardScreenTwo}
				options={{
					title: "",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="OnboardThree"
				component={OnboardScreenThree}
				options={{
					title: "",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Main"
				component={MainContainer}
				options={{
					title: "",
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
