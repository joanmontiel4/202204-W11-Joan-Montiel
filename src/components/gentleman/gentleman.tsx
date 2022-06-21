import './gentleman.css';
import { gentlemanInfo } from '../../interfaces/gentlemanInfo';

export function Gentleman({
    singleGentData,
    handleCheckButton,
    handleDeleteButton,
}: {
    singleGentData: gentlemanInfo;
    handleCheckButton: (gentId: number) => void;
    handleDeleteButton: (gentId: number) => void;
}) {
    return (
        <>
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={
                        singleGentData.id > 3
                            ? singleGentData.picture
                            : 'img/' + singleGentData.picture
                    }
                    alt={singleGentData.alternativeText}
                />
                <span className="gentleman__initial">
                    {singleGentData.picture[0].toUpperCase()}
                </span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{singleGentData.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {singleGentData.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>
                        {singleGentData.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>
                        {singleGentData.twitter}
                    </li>
                </ul>
            </div>
            <i
                className="icon gentleman__icon fas fa-check"
                onClick={() => handleCheckButton(singleGentData.id)}
            ></i>
            <i
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                onClick={() => handleDeleteButton(singleGentData.id)}
            ></i>
        </>
    );
}
