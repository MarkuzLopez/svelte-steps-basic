import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Markuz',
		lastName: 'Lopez'
	}
});

export default app;