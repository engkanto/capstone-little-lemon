import {act} from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import App from './App';

test('renders Little Lemon header', async () => {
  await act(() => {
    render(
      <HelmetProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </HelmetProvider>
    );
  });  
  
  const headerElement = screen.getByText(/About Little Lemon/i);
  expect(headerElement).toBeInTheDocument();
});
