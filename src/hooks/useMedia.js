import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useState } from 'react';

export const useMedia = () => {
	const theme = useTheme();
	console.log(theme);
	const [isChanged, setChanged] = useState(false);
	const changeHandler = () => setChanged((o) => !o);

	const matchesMobile = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm));
	const matchesTablet = useMediaQuery(theme.breakpoints.between(theme.breakpoints.values.sm, theme.breakpoints.values.md));
	const matchesLaptop = useMediaQuery(theme.breakpoints.between(theme.breakpoints.values.md, theme.breakpoints.values.lg));
	const matchesDesktop = useMediaQuery(theme.breakpoints.up(theme.breakpoints.values.lg));
	const matchesHD = useMediaQuery(theme.breakpoints.up(theme.breakpoints.values.xl));
	return {
		matchesTablet,
		matchesMobile,
		matchesDesktop,
		matchesLaptop,
		matchesHD,
		isChanged,
		changeHandler,
	};
};