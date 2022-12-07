import { createTheme } from "@rneui/themed";

// palette is kept as a separate variable to make it easy to change colours
const themePalette = {
	black: "#000000",
	white: "#ffffff",
	primary: "#ca9393",
	primaryLighter: "#d5c1b7",
	grey: "#626262",
	greyLighter: "#dddddd",
};

// a theme follows the pattern: components > [ComponentType] > [ComponentStyle]
export const cafeHopTheme = createTheme({
	components: {
		Button: (buttonProps) => ({
			titleStyle: {
				color: themePalette.white,
			},
			icon: {
				color: buttonProps.disabled
					? themePalette.grey
					: themePalette.primary,
			},
			type: "clear",
		}),
		Text: {
			h1Style: {
				color: themePalette.primary,
				fontFamily: "ElMessiri_700Bold",
				fontWeight: "normal",
				fontSize: 30,
				/*Disabled for web display, add back for iOS/Android, and disable the above if you're not using web
                    fontFamily: (Platform.OS === 'ios') ? 'Baskerville' : 'serif',
                */
			},
			h2Style: {
				fontFamily: "ElMessiri_400Regular",
				fontWeight: "normal",
				fontSize: 24,
				margin: 10,
			},
			h3Style: {
				fontFamily: "ElMessiri_500Medium",
				fontWeight: "normal",
				fontSize: 20,
				margin: 1,
			},
			h4Style: {
				fontFamily: "ElMessiri_700Bold",
				fontWeight: "normal",
				fontSize: 16,
			},
			style: {
				fontFamily: "sans-serif",
				fontWeight: "200",
				fontSize: 16,
				margin: 5,
			},
		},

		Avatar: {
			avatarStyle: {
				borderWidth: 0.5,
				borderColor: themePalette.grey,
				borderBottomLeftRadius: 15,
				borderBottomRightRadius: 15,
				borderTopLeftRadius: 15,
				borderTopRightRadius: 15,
			},
			size: 120,
		},

		Chip: {
			color: themePalette.primaryLighter,
		},

		ButtonGroup: {
			buttonStyle: {
				backgroundColor: themePalette.greyLighter,
				color: themePalette.black,
			},
			selectedButtonStyle: {
				backgroundColor: themePalette.primary,
			},
		},
	},
});
