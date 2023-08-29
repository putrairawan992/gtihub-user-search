import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import App from './App';
import { persistedReducer } from './stores'; // Adjust the import based on your actual file structure

const mockStore = createStore(persistedReducer, applyMiddleware(thunk));

describe('App', () => {
  it('should render GitHub User Search title', () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    expect(screen.getByText('GitHub User Search')).toBeInTheDocument();
  });

  it('should handle search term input', () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Search GitHub users');
    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect((inputElement as HTMLInputElement).value).toBe('John');
  });

  it('should handle Enter key press', () => {
    // You need to mock your actions and dispatch here. 
    // This is just a simple example to demonstrate key press event.
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Search GitHub users');
    userEvent.type(inputElement, 'John{enter}');
  });

  // Add more test cases like:
  // - Should display loading text when loading
  // - Should fetch data when Search button is clicked
  // - etc.
});
