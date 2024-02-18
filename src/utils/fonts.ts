import localFont from "next/font/local";

export const sourceSansFont = localFont({
	src: [
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-ExtraLight.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-ExtraLightItalic.ttf",
			weight: "200",
			style: "italic",
		},
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-LightItalic.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../app/fonts/SourceSansPro/SourceSansPro-SemiBoldItalic.ttf",
			weight: "600",
			style: "italic",
		},
	],
});
