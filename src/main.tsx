import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App.tsx';
// import { RootLayout } from './RootLayout';
import { ThemedRootLayout } from './ThemedRootLayout';
import { RecipeEditScreen } from './RecipeEdit.tsx';
import { TableScreen } from './Table.tsx';
import { RandomComponentsScreen } from './RandomComponents.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<ThemedRootLayout />}>
          <Route index element={<App />} />
          <Route path="/recipe-edit" element={<RecipeEditScreen />} />
          <Route
            path="/random-components"
            element={<RandomComponentsScreen />}
          />
          <Route path="/table" element={<TableScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
