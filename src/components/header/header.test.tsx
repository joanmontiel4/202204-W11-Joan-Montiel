import { render, screen } from '@testing-library/react';
import { Header } from './header';

// gherkins - GWT
describe('Given the component Header', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have a title received by props', () => {
            const expectedTitle = 'The pointing gentlemen';
            render(<Header appTitle={expectedTitle}></Header>);
            const element = screen.getByText(/The pointing gentlemen/i);
            expect(element).toBeInTheDocument();
        });
    });
});
