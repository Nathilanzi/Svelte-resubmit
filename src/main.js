import './app.css';
import App from './App.svelte';

/**
 * Initializes the Svelte application by creating a new instance of the `App` component.
 * 
 * The `App` component is rendered into the HTML element with the ID `app`.
 * 
 * @type {App}
 */
const app = new App({
  target: document.getElementById('app'),
});

export default app;

