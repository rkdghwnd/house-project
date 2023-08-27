import { Route, Routes } from 'react-router';
import Store from '../pages/Store';
import Ranks from '../pages/Ranks';
import TodayDeals from '../pages/TodayDeals';
import Exhibitions from '../pages/Exhibitions';
import Productions from '../pages/Productions';
import Premium from '../pages/Premium';
import PremiumCategoryMain from '../pages/PremiumCategoryMain';
import PremiumBrand from '../pages/PremiumBrand';
import Notification from '../pages/Notification';
import Cart from '../pages/Cart';
import FinalOrder from '../pages/FinalOrder';
import Category from '../pages/Category';
import Users from '../pages/Users';
import UsersHome from '../pages/UsersHome';
import UserBookmark from '../pages/UserBookmark';
import UserLike from '../pages/UserLike';
import MyShopping from '../pages/MyShopping';
import OrderResult from '../pages/OrderResult';
import ProductionReviews from '../pages/ProductionReviews';
import UsersEdit from '../pages/UsersEdit';
import UsersEditPassword from '../pages/UsersEditPassword';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="category" element={<Category />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/today_deals" element={<TodayDeals />} />
        <Route path="/exhibitions/:id" element={<Exhibitions />} />
        <Route path="/productions/:id" element={<Productions />} />
        <Route path="/premium" element={<Premium />}>
          <Route path="category" element={<PremiumCategoryMain />} />
          <Route path="brand" element={<PremiumBrand />} />
        </Route>
        <Route path="/users/:userId/bookmark" element={<UserBookmark />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/final_order" element={<FinalOrder />} />
        <Route path="/users/:userId" element={<Users />}>
          <Route path="" element={<UsersHome />} />
          <Route path="like" element={<UserLike />} />
          <Route path="edit" element={<UsersEdit />} />
          <Route path="edit_password" element={<UsersEditPassword />} />
        </Route>
        <Route path="/my_shopping" element={<MyShopping />} />
        <Route path="/production_reviews" element={<ProductionReviews />} />
        <Route path="/order_result" element={<OrderResult />} />
      </Routes>
    </>
  );
}

export default App;
