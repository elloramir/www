import App from './App.svelte';

// TODO(ellora): Add routes instead of just rendering the app
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	},
});

window.app = app;

export default app;