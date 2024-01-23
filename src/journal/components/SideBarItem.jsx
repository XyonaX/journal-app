import { TurnedInNot } from '@mui/icons-material';
import {
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
	const dispatch = useDispatch();
	const {} = useSelector((state) => state.journal.notes);

	const showActiveNote = () => {
		dispatch(setActiveNote({ title, body, id, date, imageUrls }));
	};
	const newTitle = useMemo(() => {
		return title.length > 17 ? title.substring(0, 17) + '...' : title;
	}, [title]);

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={showActiveNote}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText
						primary={newTitle}
						sx={{ color: 'parrafos.white' }} // Aplica el color blanco al texto principal
					/>
					<ListItemText
						secondary={body}
						sx={{ color: 'parrafos.main' }} // Aplica el color blanco al texto secundario (Lorem Ipsum)
					/>
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
