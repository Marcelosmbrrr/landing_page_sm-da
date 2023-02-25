import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SnackbarProvider } from 'notistack';
import { Router } from './routes';

library.add(fab, faCircleCheck);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Router />
    </SnackbarProvider>
  </React.StrictMode>,
)
