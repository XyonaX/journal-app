import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import { AddOutlined, Note } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

export const JournalPage = () => {
	const dispatch = useDispatch();
	const { isSaving, active } = useSelector((state) => state.journal);

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	// const showActiveNote = useMemo(() => active !== null, [active]);

	return (
		<JournalLayout>
			{active !== null ? <NoteView /> : <NothingSelectedView />}

			<IconButton
				disabled={isSaving}
				onClick={onClickNewNote}
				size="large"
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
