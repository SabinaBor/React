import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from "./Header";

// Так как в последствии мы будем добавлять server-side-rendering надо сделать так, чтобы эта часть кода срабатывала
// только в браузере. Повесить listener на загрузку web страницы. Как только загрузится страница в браузере,
// будем рендерить приложение.
window.addEventListener('load', () => {
    ReactDOM.render(<Header />, document.getElementById('react_root'));
});
