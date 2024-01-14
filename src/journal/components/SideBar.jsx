import { TurnedInNot } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

export const SideBar = ({ drawerWidth = 240 }) => {
	return (
		<Box
			component="nav"
			sx={{
				width: { sm: drawerWidth },
				flexShrink: { sm: 0 },
			}}
		>
			<Drawer
				variant="permanent"
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				<Toolbar sx={{ backgroundColor: 'primary.main', color: 'white' }}>
					<Typography variant="h6" noWrap component="div">
						John Doe
					</Typography>
				</Toolbar>
				<Divider />

				<List>
					{['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText
										primary={text}
										sx={{ color: 'parrafos.white' }} // Aplica el color blanco al texto principal
									/>
									<ListItemText
										secondary={
											"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
										}
										sx={{ color: 'parrafos.main' }} // Aplica el color blanco al texto secundario (Lorem Ipsum)
									/>
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

SideBar.propTypes = {
	drawerWidth: PropTypes.number.isRequired,
};
