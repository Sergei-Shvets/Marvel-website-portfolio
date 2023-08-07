import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleComicLayout from "../pages/singleComicLayout/SingleComicLayout";
import SingleCharacterLayout from "../pages/singleCharacterLayout/SingleCharacterLayout";
import SinglePage from "../pages/SinglePage";

import { MainPage, ComicsPage, Page404 } from "../pages";
import AppHeader from "../appHeader/AppHeader";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={<ComicsPage/>}/>
                        <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} />
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;