import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

// gherkins - GWT
describe('Given the component Button', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have a conditional text when true', () => {
            const expectedAllSelected = true;
            render(
                <Button
                    areAllSelected={expectedAllSelected}
                    handleSelectButton={() => {}}
                ></Button>
            );
            const element = screen.getByText(/Unselect all/i);
            expect(element).toBeInTheDocument();
        });
        test('Then screen should have a conditional text when false', () => {
            const expectedAllSelected = false;
            render(
                <Button
                    areAllSelected={expectedAllSelected}
                    handleSelectButton={() => {}}
                ></Button>
            );
            const element = screen.getByText(/Select all/i);
            expect(element).toBeInTheDocument();
        });

        // TO BE REVIEWED  ////////////////////////////////////////////////////
        test('Then when user clicks the button a handle fn is called', () => {
            const handleSelectedMock = jest.fn();
            const testSelectedValue = true;
            render(
                <Button
                    areAllSelected={testSelectedValue}
                    handleSelectButton={handleSelectedMock(false)}
                ></Button>
            );
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            userEvent.click(button);
            expect(handleSelectedMock).toHaveBeenCalledWith(false);
        });
        ////////////////////////////////////////////////////////////////////////
    });
});
