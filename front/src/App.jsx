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
import UsersEdit from '../pages/UsersEdit';
import SearchResult from '../pages/SearchResult';
import UsersUserId from '../pages/UsersUserId';
import MyReviews from '../pages/MyReviews';
import UsersReviews from '../pages/UsersReviews';
import UsersReviewsWrite from '../pages/UsersReviewsWrite';
import DeliveryStatus from '../components/my_shopping/DeliveryStatus';
import DeliveryList from '../components/my_shopping/DeliveryList';
import MyInquiry from '../components/my_shopping/MyInquiry';
import NotFound from '../components/common/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/category" element={<Category />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/today_deals" element={<TodayDeals />} />
        <Route path="/exhibitions/:id" element={<Exhibitions />} />
        <Route path="/productions/:id" element={<Productions />} />
        <Route path="/premium" element={<Premium />}>
          <Route path="category" element={<PremiumCategoryMain />} />
          <Route path="brand" element={<PremiumBrand />} />
        </Route>
        <Route path="/notification" element={<Notification />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/final_order" element={<FinalOrder />} />

        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UsersUserId />}>
            <Route path="" element={<UsersHome />} />
            <Route path="like" element={<UserLike />} />
          </Route>
          <Route path="edit" element={<UsersEdit />} />
        </Route>
        <Route path="/users/:userId/bookmark" element={<UserBookmark />} />
        <Route path="/my_shopping" element={<MyShopping />}>
          <Route
            path=""
            element={
              <>
                <DeliveryStatus />
                <DeliveryList />
              </>
            }
          />
          <Route path="inquiry" element={<MyInquiry />} />
        </Route>
        <Route path="/users_reviews" element={<UsersReviews />}>
          <Route path="write" element={<UsersReviewsWrite />} />
          <Route path="" element={<MyReviews />} />
        </Route>
        <Route path="/order_result" element={<OrderResult />} />
        <Route path="/search_result" element={<SearchResult />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
