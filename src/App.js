import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { getCountries } from './redux/reducers/dataReducer';
// import Card from './components/Card';
import CardList from './components/CardList';
import Home from './components/Home';
// import Cards from './components/Cards';

function App() {
  const cards = useSelector((state) => state.dataReducer);
  // console.log(cards);
  // console.log("Jasem");
  return (
    <Router>
      <div className="tc">

        <Routes>
          <Route path="/" element={<CardList />} />
          {
            cards.map((card) => (
              <>
                <Route
                  key={card.country}
                  path={card.country}
                  element={<Home country={card} />}
                />
              </>
            ))
          }
        </Routes>

      </div>
    </Router>
  );
}

export default App;
