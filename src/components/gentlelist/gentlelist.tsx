/* eslint-disable array-callback-return */
import { Gentleman } from '../gentleman/gentleman';
import { gentlemanInfo, gentlemenInfo } from '../../interfaces/gentlemanInfo';
import { Add } from '../add/add';
import * as api from '../../services/http-gentlemen';
// import { addGentleman } from '../../services/mock.api';

function GentleList({
    gentData,
    setGentData,
}: {
    gentData: gentlemenInfo;
    setGentData: (gentDataUpdated: gentlemenInfo) => void;
}) {
    const handleCheckButton = (gentId: number) => {
        setGentData(
            gentData.map((item) =>
                item.id === gentId
                    ? { ...item, selected: !item.selected }
                    : item
            )
        );
    };

    const handleDeleteButton = (gentId: number) => {
        api.deleteGentleman(gentId).then((resp) => {
            if (resp.ok) {
                setGentData(gentData.filter((item) => item.id !== gentId));
            }
        });
    };

    const handleAdd = (singleGentData: Partial<gentlemanInfo>) => {
        //    WITH JSON SERVER   ////////////////////////////////
        // Backend
        api.addGentleman(singleGentData).then((data) =>
            // estado
            setGentData([...gentData, data])
        );
        /////////////////////////////////////////////////////////

        //    WITH MOCK-API:
        // addGentleman(singleGentData).then((data) => {
        //     const dataWithId = { ...data, id: gentData.length + 1 };
        //     setGentData([...gentData, dataWithId]);
    };

    return (
        <>
            <Add handleAdd={handleAdd}></Add>
            <ul className="gentlemen">
                {gentData.map((singleGentData) => (
                    <li
                        key={singleGentData.id}
                        className={
                            'gentleman' +
                            (singleGentData.selected ? ' selected' : '')
                        }
                    >
                        <Gentleman
                            singleGentData={singleGentData}
                            handleCheckButton={handleCheckButton}
                            handleDeleteButton={handleDeleteButton}
                        ></Gentleman>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default GentleList;
