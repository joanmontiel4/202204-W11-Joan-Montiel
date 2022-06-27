import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Add } from './add';

// gherkins - GWT
describe('Given the component Add', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have five text inputs', () => {
            render(<Add handleAdd={() => {}}></Add>);
            const textBoxElements = screen.getAllByRole('textbox');
            expect(textBoxElements[0]).toBeInTheDocument();
            expect(textBoxElements[1]).toBeInTheDocument();
            expect(textBoxElements[2]).toBeInTheDocument();
            expect(textBoxElements[3]).toBeInTheDocument();
            expect(textBoxElements[4]).toBeInTheDocument();
        });
        test('Then screen should have an Add Gentleman button', () => {
            render(<Add handleAdd={() => {}}></Add>);
            const button = screen.getByText(/Add/i);
            expect(button).toBeInTheDocument();
        });
        // TO BE REVIEWED  //////////////////////////////////////////
        test('Then screen should react to submit a gent', () => {
            const handleAddMock = jest.fn();
            render(<Add handleAdd={handleAddMock}></Add>);
            const inputs = screen.getAllByRole('textbox');
            userEvent.type(inputs[0], 'TestName');
            userEvent.type(inputs[1], 'TestProfession');
            userEvent.type(inputs[2], 'TestStatus');
            userEvent.type(inputs[3], 'TestTwitter');
            userEvent.type(inputs[4], 'TestPicture');
            const button = screen.getByText(/Add/i);
            userEvent.click(button);
            expect(handleAddMock).toHaveBeenCalledWith({
                name: 'TestName',
                status: 'TestStatus ',
                profession: 'TestProfession',
                twitter: 'TestTwitter',
                picture: 'TestPicture',
                alternativeText: `TestName is pointing at you`,
                selected: false,
            });
        });
        ////////////////////////////////////////////////////////////
    });
});
