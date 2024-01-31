import {
	authSlice,
	checkingCredentials,
	login,
	logout,
} from '../../../src/store/auth/authSlice';
import {
	authenticatedState,
	demoUser,
	initialState,
} from '../../fixtures/authFixtures';

describe('Pruebas en authSlice', () => {
	test('Debe de regresar el estado inicial y llamarse "auth"', () => {
		expect(authSlice.name).toBe('auth');
		const state = authSlice.reducer(initialState, {});
		expect(state).toEqual(initialState);
	});

	test('debe de realizar la autenticacion', () => {
		const state = authSlice.reducer(initialState, login(demoUser));
		expect(state).toEqual({
			status: 'authenticated',
			uid: demoUser.uid,
			email: demoUser.email,
			displayName: demoUser.displayName,
			photoURL: demoUser.photoURL,
			errorMessage: null,
		});
	});

	test('debe de realizar el logout sin argumentos', () => {
		const state = authSlice.reducer(authenticatedState, logout());

		expect(state).toEqual({
			status: 'non-authenticated',
			uid: null,
			email: null,
			displayName: null,
			photoURL: null,
			errorMessage: undefined,
		});
	});
	test('debe de realizar el logout y mostrar un mensaje de error', () => {
		const errorMessage = 'Credenciales no son correctas';

		const state = authSlice.reducer(
			authenticatedState,
			logout({ errorMessage: errorMessage })
		);
<<<<<<< HEAD
=======
>>>>>>> fc60422427dde166821e71b6eafdf993a368e659

		expect(state).toEqual({
			status: 'non-authenticated',
			displayName: null,
			email: null,
			errorMessage: errorMessage,
			photoURL: null,
			uid: null,
		});
	});

	test('debe de cambiar el estado a checking', () => {
		const state = authSlice.reducer(authenticatedState, checkingCredentials());

		expect(state.status).toBe('checking');
	});
});
