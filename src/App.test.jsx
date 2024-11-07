// eslint-disable-next-line no-unused-vars
import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line no-undef
test('Encrypts and Decrypts text', () => {
  render(<App />);
  
  const input = screen.getByPlaceholderText('Skriv din text här');
  const encryptButton = screen.getByText('Kryptera');
  const decryptButton = screen.getByText('Dekryptera');
  const encryptedText = screen.getByText('Krypterad Text:');
  const decryptedText = screen.getByText('Dekrypterad Text:');
  
  fireEvent.change(input, { target: { value: 'Test' } });
  fireEvent.click(encryptButton);
  // eslint-disable-next-line no-undef
  expect(encryptedText).not.toHaveTextContent('');  // Ensure jest-dom is properly set up
  
  fireEvent.click(decryptButton);
  // eslint-disable-next-line no-undef
  expect(decryptedText).not.toHaveTextContent('');
});
