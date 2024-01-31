export const initialState = {
	status: 'checking', //'checking','non-authenticated', 'authenticated'
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
};
export const authenticatedState = {
	status: 'autenticated', //'checking','non-authenticated', 'authenticated'
	uid: '123ABC',
	email: 'demo@gooogle.com',
	displayName: 'Demo User',
	photoURL: 'https://demo.jpg',
	errorMessage: null,
};
export const notAuthenticatedState = {
	status: 'non-authenticated', //'checking','non-authenticated', 'authenticated'
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
};

export const demoUser = {
	uid: 'ABC123',
	email: 'demo@google.com',
	displayName: 'Demo User',
	photoURL: 'https://demo.jpg',
};
