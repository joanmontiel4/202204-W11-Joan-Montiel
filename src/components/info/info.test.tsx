import { render, screen } from '@testing-library/react';
import { Info } from './info';

// gherkins - GWT
describe('Given the component Info', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have a title received by props', () => {
            const expectedNumSelectedGent = '0';
            render(<Info numSelectedGent={expectedNumSelectedGent}></Info>);
            const element = screen.getByText(/0 gentlemen pointing at you/i);
            expect(element).toBeInTheDocument();
        });
    });
});
