import { SyntheticEvent, useState } from 'react';
import { gentlemanInfo } from '../../interfaces/gentlemanInfo';

export function Add({
    handleAdd,
}: {
    handleAdd: (singleGentData: Partial<gentlemanInfo>) => void;
}) {
    const initialState: Partial<gentlemanInfo> = {
        name: '',
        status: '',
        profession: '',
        twitter: '',
        picture: '',
        alternativeText: '',
        selected: false,
    };
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd({
            name: formState.name as string,
            status: formState.status as string,
            profession: formState.profession as string,
            twitter: formState.twitter as string,
            picture: formState.picture as string,
            alternativeText: `${formState.name} is pointing at you`,
            selected: false,
        });
    };

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                id=""
                className="text-box"
                placeholder="Gentleman name"
            />
            <input
                type="text"
                name="profession"
                value={formState.profession}
                onChange={handleChange}
                id=""
                className="text-box"
                placeholder="Profession"
            />
            <input
                type="text"
                name="status"
                value={formState.status}
                onChange={handleChange}
                id=""
                className="text-box"
                placeholder="Status"
            />
            <input
                type="text"
                name="twitter"
                value={formState.twitter}
                onChange={handleChange}
                id=""
                className="text-box"
                placeholder="Twitter"
            />
            <input
                type="text"
                name="picture"
                value={formState.picture}
                onChange={handleChange}
                id=""
                className="text-box"
                placeholder="Picture URL"
            />
            <button type="submit" className="add-button">
                Add gentleman
            </button>
        </form>
    );
}
