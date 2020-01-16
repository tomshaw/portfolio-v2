// ==========================================================================
// App
// ==========================================================================
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import Layout from './components/layout';

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)

export default App;