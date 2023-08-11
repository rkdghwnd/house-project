import { Route, Routes } from 'react-router';
import Store from '../pages/Store';
import { Link } from 'react-router-dom';
import Ranks from '../pages/Ranks';
import TodayDeals from '../pages/TodayDeals';
import Exhibitions from '../pages/Exhibitions';
import Productions from '../pages/Productions';

function App() {
  return (
    <>
      <Link to="/store">store</Link>
      <Link to="/ranks">ranks</Link>
      <Link to="/today_deals">today_deals</Link>
      <Link to="/exhibitions/1">refur_market</Link>
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/today_deals" element={<TodayDeals />} />
        <Route path="/exhibitions/:id" element={<Exhibitions />} />
        <Route path="/productions/:productId" element={<Productions />} />
        {/* <Route path="/special_exhibitions" elment={}/> */}
      </Routes>
    </>
  );
}

export default App;
