import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlesPage';
import ArticleListPage from './pages/ArticleListPage';
import { BrowserRouter  ,Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import NavBar from './NavBar';

const App = () => {
    return (
        <>
            
                <BrowserRouter>
                    <div className="app">
                    <NavBar />
                    <div id="page-body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/articles" element={<ArticleListPage />} />
                        <Route path="/articles/:id" element={<ArticlePage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    </div>
                    </div>
                    
                </BrowserRouter>
                
            
        </>


    )
};
export default App;




// dummy database
// article page display
// add links to articles