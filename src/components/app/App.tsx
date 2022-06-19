import { Button } from '../button/button';
import { Header } from '../header/header';
import { Info } from '../info/info';
import { Gentleman } from '../gentleman/gentleman';
import { useState } from 'react';
import { gentlemenData } from '../../data/gentlemenData';

import '../../css/styles.css';

function App() {
    const appTitle = 'The pointing gentlemen';
    const [gentData, setGentData] = useState(gentlemenData);

    const handleSelectButton = (selectedValue: boolean): void => {
        setGentData(
            gentData.map((item) => ({ ...item, selected: selectedValue }))
        );
    };

    const handleCheckButton = (gentId: number) => {
        setGentData(
            gentData.map((item) =>
                item.id === gentId
                    ? { ...item, selected: !item.selected }
                    : item
            )
        );
    };

    const selectedGentCounter = () => {
        let countGent = 0;
        gentData.forEach((item) => {
            item.selected && countGent++;
        });
        return countGent.toString();
    };

    const handleDeleteButton = (gentId: number) => {
        setGentData(gentData.filter((item) => item.id !== gentId && item));
    };

    return (
        <>
            <Header appTitle={appTitle}></Header>
            <section className="controls">
                <Info numSelectedGent={selectedGentCounter()}></Info>
                <Button
                    areAllSelected={gentData.every((item) => item.selected)}
                    handleSelectButton={handleSelectButton}
                ></Button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    <Gentleman
                        gentData={gentData}
                        handleCheckButton={handleCheckButton}
                        handleDeleteButton={handleDeleteButton}
                    ></Gentleman>
                </ul>
            </main>
        </>
    );
}

export default App;
