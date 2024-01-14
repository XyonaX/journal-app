import { Link as RouterLink } from 'react-router-dom';

import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
	password: [
		(value) => value.length >= 6,
		'El password debe de tener 6 o mas caracteres',
	],
	displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
};

export const RegisterPage = () => {
	const dispatch = useDispatch();
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === 'checking',
		[status]
	);
	const {
		displayName,
		email,
		password,
		onInputChange,
		formState,
		isFormValid,
		emailValid,
		passwordValid,
		displayNameValid,
	} = useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		setFormSubmitted(true);
		if (!isFormValid) return;
		dispatch(startCreatingUserWithEmailPassword(formState));
	};
	return (
		<AuthLayout title="Register">
			<h1>FormValid: {isFormValid ? 'Válido' : 'Incorrecto'}</h1>
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Nombre Completo"
							type="text"
							placeholder="John Doe"
							fullWidth
							required
							name="displayName"
							value={displayName}
							onChange={onInputChange}
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Correo"
							type="email"
							placeholder="correo@gmail.com"
							fullWidth
							required
							name="email"
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Contraseña"
							type="password"
							placeholder="contraseña123"
							fullWidth
							required
							name="password"
							value={password}
							onChange={onInputChange}
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
						/>
						<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
							<Grid item xs={12} display={!errorMessage ? 'none' : ''}>
								<Alert severity="error">{errorMessage}</Alert>
							</Grid>
							<Grid item xs={12}>
								<Button
									disabled={isCheckingAuthentication}
									type="submit"
									variant="contained"
									fullWidth
								>
									Crear cuenta
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid container direction="row" justifyContent="end">
						<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
						<Link component={RouterLink} color="inherit" to="/auth/login">
							ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
