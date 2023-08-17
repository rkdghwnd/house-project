import { Route, Routes } from 'react-router';
import Store from '../pages/Store';
import Ranks from '../pages/Ranks';
import TodayDeals from '../pages/TodayDeals';
import Exhibitions from '../pages/Exhibitions';
import Productions from '../pages/Productions';
import SpecialExhibitions from '../pages/SpecialExhibitions';
import Premium from '../pages/Premium';
import PremiumCategoryMain from '../pages/PremiumCategoryMain';
import PremiumBrand from '../pages/PremiumBrand';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/today_deals" element={<TodayDeals />} />
        <Route path="/exhibitions/:id" element={<Exhibitions />} />
        <Route path="/productions/:id" element={<Productions />} />
        <Route path="/special_exhibitions" element={<SpecialExhibitions />} />
        <Route path="/premium" element={<Premium />}>
          <Route path="category" element={<PremiumCategoryMain />} />
          <Route path="brand" element={<PremiumBrand />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
