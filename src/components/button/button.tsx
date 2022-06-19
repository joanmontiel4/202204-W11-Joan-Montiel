import './button.css';

export function Button({
    areAllSelected,
    handleSelectButton,
}: {
    areAllSelected: boolean;
    handleSelectButton: (selectedValue: boolean) => void;
}) {
    return (
        <button
            className="button button--select"
            onClick={() => handleSelectButton(!areAllSelected)}
        >
            {areAllSelected ? 'Unselect all' : 'Select all'}
        </button>
    );
}
