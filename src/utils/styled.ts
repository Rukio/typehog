export const getTheme = (cb) => {
	return (props) => {
		if (props && Object.keys(props.theme)?.length) {
			return cb(props.theme);
		}
	};
};
