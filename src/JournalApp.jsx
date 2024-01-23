import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const JournalApp = () => {
	return (
		<AppTheme>
			<AppRouter />
			<SpeedInsights />
		</AppTheme>
	);
};
