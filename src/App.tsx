import './App.css'
import MoviesPage from "./Components/MoviesPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Routes/HomePage.tsx";
import AboutPage from "./Routes/AboutPage.tsx";
import Layout from "./Layout/Layout.tsx";
import ErrorPage from "./Routes/ErrorPage.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/> }>
                    <Route index element={<HomePage/> }/>
                    <Route path='/my-items' element={<MoviesPage /> }/>
                    <Route path='/about' element={<AboutPage/> }/>
                    <Route path='*' element={<ErrorPage/> }/>
                </Route>
            </Routes>
        </>
    )

}

export default App
