import './gentleman.css';
import { gentlemenInfo } from '../../interfaces/gentlemanInfo';

export function Gentleman({
    gentData,
    handleCheckButton,
    handleDeleteButton,
}: {
    gentData: gentlemenInfo;
    handleCheckButton: (gentId: number) => void;
    handleDeleteButton: (gentId: number) => void;
}) {
    return (
        <>
            {gentData.map((item) => {
                return (
                    <li
                        className={
                            'gentleman' + (item.selected ? ' selected' : '')
                        }
                    >
                        <div className="gentleman__avatar-container">
                            <img
                                className="gentleman__avatar"
                                src={'img/' + item.picture}
                                alt={item.alternativeText}
                            />
                            <span className="gentleman__initial">
                                {item.picture[0].toUpperCase()}
                            </span>
                        </div>
                        <div className="gentleman__data-container">
                            <h2 className="gentleman__name">{item.name}</h2>
                            <ul className="gentleman__data-list">
                                <li className="gentleman__data">
                                    <span className="gentleman__data-label">
                                        Profession:
                                    </span>
                                    {item.profession}
                                </li>
                                <li className="gentleman__data">
                                    <span className="gentleman__data-label">
                                        Status:
                                    </span>
                                    {item.status}
                                </li>
                                <li className="gentleman__data">
                                    <span className="gentleman__data-label">
                                        Twitter:
                                    </span>
                                    {item.twitter}
                                </li>
                            </ul>
                        </div>
                        <i
                            className="icon gentleman__icon fas fa-check"
                            onClick={() => handleCheckButton(item.id)}
                        ></i>
                        <i
                            className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                            onClick={() => handleDeleteButton(item.id)}
                        ></i>
                    </li>
                );
            })}
        </>
    );
}
