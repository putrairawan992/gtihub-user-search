import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SimpleAccordion } from './SimpleAccordion'; // Update this path to the actual path of your component

describe('<SimpleAccordion />', () => {
  const mockSetOpen = jest.fn();
  const mockFetchRepos = jest.fn();
  const mockUsers = {
    login: 'testUser',
  };
  const mockRepos = [
    { name: 'repo1', description: 'desc1' },
    { name: 'repo2', description: 'desc2' },
  ];

  it('toggles open state and fetches repos when clicked', () => {
    const { getByLabelText } = render(
      <SimpleAccordion
      index={1}
        users={mockUsers}
        repos={mockRepos}
        open={false}
        setOpen={mockSetOpen}
        fetchRepos={mockFetchRepos}
      />
    );

    const label = getByLabelText(mockUsers.login);
    fireEvent.click(label);
  });

  it('displays the correct number of repos', () => {
    const { getAllByText } = render(
      <SimpleAccordion
        users={mockUsers}
        repos={mockRepos}
        open={true}
        setOpen={mockSetOpen}
        fetchRepos={mockFetchRepos}
      />
    );

    const repoNames = getAllByText(/repo/);
    expect(repoNames).toHaveLength(mockRepos.length);
  });
});
