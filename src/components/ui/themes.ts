export interface Theme {
	primary: {
		text: string;
		bg: string;
		link: string;
		border: string;
		hover: string;
		focus: string;
	},
	modal: {
		bg: string;
		layoutBg: string;
	},
	layout: {
		page: {
			text: string;
			bg: string;
		},
		border: string;
	},
	paragraph: {
		correct: {
			text: string;
			bg: string;
		},
		error: {
			text: string;
			bg: string;
		},
		defaultText: string;
		border: string;
		bg: string;
	},
	input: {
		primary: string;
		bg: string;
		border: string;
		text: string;
		hover: {
			border: string;
		},
		focus: {
			border: string;
		},
	},
}

export const themeDark: Theme = {
	primary: {
		text: "#eee",
		bg: "#4b4bc4",
		link: "#ffdc54",
		border: "#4b4bc4",
		hover: "#3737ab",
		focus: "#2c2c9f",
	},
	layout: {
		page: {
			text: "#eee",
			bg: "#112744",
		},
		border: "#999",
	},
	modal: {
		bg: "#00469d",
		layoutBg: "rgba(0, 0, 0, 0.4)",
	},
	paragraph: {
		correct: {
			text: "#ddd",
			bg: "#0a0",
		},
		error: {
			text: "#ddd",
			bg: "#a00",
		},
		defaultText: "#ddd",
		border: "#2f2fc1",
		bg: "#3737c4",
	},
	input: {
		primary: "#eee",
		bg: "#000",
		border: "#999",
		text: "#999",
		hover: {
			border: "#9696e8",
		},
		focus: {
			border: "#4c4cda",
		},
	},
};
