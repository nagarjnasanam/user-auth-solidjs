/* @refresh reload */
import { render } from 'solid-js/web';
import { hydrate } from "solid-js/web";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}
// hydrate(() => <App />,root);
render(() => <App />, root);

const dispose = render(() => <App />, document.getElementById('app'));

// Call `dispose` to remove the rendered component from the DOM
// dispose();




