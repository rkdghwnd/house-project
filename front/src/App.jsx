import { Route, Routes } from 'react-router';
import Store from '../pages/Store';
import Ranks from '../pages/Ranks';
import TodayDeals from '../pages/TodayDeals';
import Exhibitions from '../pages/Exhibitions';
import Productions from '../pages/Productions';
import SpecialExhibitions from '../pages/SpecialExhibitions';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/today_deals" element={<TodayDeals />} />
        <Route path="/exhibitions/:id" element={<Exhibitions />} />
        <Route path="/productions/:id" element={<Productions />} />
        <Route path="/special_exhibitions" elment={<SpecialExhibitions />} />
      </Routes>
    </>
  );
}

export default App;
