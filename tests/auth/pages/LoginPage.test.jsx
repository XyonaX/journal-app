import { configureStore } from '@reduxjs/toolkit';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { authSlice } from '../../../src/store/auth';
import { startGoogleSignIn } from '../../../src/store/auth/thunks';
import { MemoryRouter } from 'react-router-dom';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
	startGoogleSignIn: () => mockStartGoogleSignIn,
	startLoginWithEmailPassword: ({ email, password }) => {
		return () => mockStartLoginWithEmailPassword({ email, password });
	},
}));

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	preloadedState: {
		auth: notAuthenticatedState,
	},
});

describe('Pruebas en <LoginPage />', () => {
	beforeEach(() => jest.clearAllMocks());
	test('debe de mostrar el componente correctamente ', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
	});

	test('boton de google debe de llamar el startGoogleSignIn', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const googleBtn = screen.getByLabelText('google-btn');
		fireEvent.click(googleBtn);

		expect(mockStartGoogleSignIn).toHaveBeenCalled();
	});

	test('submit debe de llamar startLoginWithEmailPassword', () => {
		const email = 'jona@gmail.com';
		const password = '123456';

		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const emailField = screen.getByRole('textbox', { name: 'Correo' });
		const passwordField = screen.getByTestId('password');
		const loginForm = screen.getByLabelText('submit-form');

		fireEvent.change(emailField, { target: { name: 'email', value: email } });
		fireEvent.change(passwordField, {
			target: { name: 'password', value: password },
		});

		fireEvent.submit(loginForm);

		expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
			email: email,
			password: password,
		});
	});
});
