import {useState} from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

import decoration from '../../resources/img/vision.png';

const App = () => {
    const [selectedChart, setChar] = useState(null);

    const onChartSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onChartSelected={onChartSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChart}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
                <AppBanner/>
                <ComicsList/>
            </main>
        </div>
    )
}

export default App;