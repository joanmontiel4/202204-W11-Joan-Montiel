import { Button } from '../button/button';
import { Header } from '../header/header';
import { Info } from '../info/info';
import { useEffect, useState } from 'react';

import '../../css/styles.css';
import GentleList from '../gentlelist/gentlelist';
import { gentlemenInfo } from '../../interfaces/gentlemanInfo';
// import { getGentlemen } from '../../services/mock.api';
import * as api from '../../services/http-gentlemen';

function App() {
    const appTitle = 'The pointing gentlemen';
    const initialState: gentlemenInfo = [];
    const [gentData, setGentData] = useState(initialState);

    useEffect(() => {
        //  WITH MOCK-API //////////////////////////////////
        // getGentlemen().then((data) => setGentData(data));
        ////////////////////////////////////////////////////
        api.getAllGentlemen().then((data) => setGentData(data));
    }, []);

    const handleSelectButton = (selectedValue: boolean): void => {
        setGentData(
            gentData.map((item) => ({ ...item, selected: selectedValue }))
        );
    };

    const selectedGentCounter = () => {
        let countGent = 0;
        gentData.forEach((item) => {
            item.selected && countGent++;
        });
        return countGent.toString();
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
                <GentleList
                    gentData={gentData}
                    setGentData={setGentData}
                ></GentleList>
            </main>
        </>
    );
}

export default App;
