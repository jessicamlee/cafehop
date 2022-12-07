// importing libraries & components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// importing screens (for Tab navigation)
import HomeScreen from "../screens/HomeScreen";
import SearchScreenStackNav from "../screens/SearchScreenStackNav.js";
import SavedScreen from "../screens/SavedScreen";

// importing themes
import { Icon } from "@rneui/themed";

// Instantiating Tab navigator component (as a constant) to reference in the root of the app (as it will be on every page/screen)
// Bottom Tab navigator as app's main global navigation menu
const Tab = createBottomTabNavigator();

export default function MainApp() {
    return (
        <>
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
        </>
    );
}