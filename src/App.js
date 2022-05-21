
import{ Routes, Route, BrowserRouter,} from 'react-router-dom';
import { Header } from './components/header/Header';
import { HomePage } from './page/homePage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
     <Routes>
       <Route path='/' element={<HomePage />} />
     </Routes>    
    </div>
    </BrowserRouter>
 
    
  );
}

export default App;
