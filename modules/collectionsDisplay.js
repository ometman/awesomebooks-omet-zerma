/* eslint-disable no-use-before-define */
import { body } from './header.js';

export const collection = document.createElement('section');
collection.className = 'collection';
collection.style.display = 'none';
collection.innerHTML = ` <h2>All Awesome Books</h2>
    <div id="show-bks"></div>`;
body.appendChild(collection);

export { collection as default };
