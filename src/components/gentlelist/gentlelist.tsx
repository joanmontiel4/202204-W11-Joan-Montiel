/* eslint-disable array-callback-return */
import { Gentleman } from '../gentleman/gentleman';
import { gentlemanInfo, gentlemenInfo } from '../../interfaces/gentlemanInfo';
import { Add } from '../add/add';
import { addGentleman } from '../../services/mock.api';

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
        setGentData(gentData.filter((item) => item.id !== gentId && item));
    };

    const handleAdd = (singleGentData: Partial<gentlemanInfo>) => {
        // Backend
        // api.addTask(task).then((data) =>
        //     // estado
        //     setTasks([...tasks, data])
        // );
        addGentleman(singleGentData).then((list) => {
            setGentData(list);
            // console.log(list);
        });
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
