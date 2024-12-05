import { Route, Routes } from 'react-router';
import Store from './pages/Store';
import Ranks from './pages/Ranks';
import TodayDeals from './pages/TodayDeals';
import Exhibitions from './pages/Exhibitions';
import Productions from './pages/Productions';
import Premium from './pages/Premium';
import PremiumCategoryMain from './pages/PremiumCategoryMain';
import PremiumBrand from './pages/PremiumBrand';
import Notification from './pages/Notification';
import Cart from './pages/Cart';
import FinalOrder from './pages/FinalOrder';
import Category from './pages/Category';
import DeliveryStatus from './components/my_shopping/DeliveryStatus';
import DeliveryList from './components/my_shopping/DeliveryList';
import NotFound from './components/common/NotFound';
import { lazy, Suspense } from 'react';

const Users = lazy(() => import('./pages/Users'));
const UsersUserId = lazy(() => import('./pages/UsersUserId'));
const UsersHome = lazy(() => import('./pages/UsersHome'));
const UserLike = lazy(() => import('./pages/UserLike'));
const UsersEdit = lazy(() => import('./pages/UsersEdit'));
const UserBookmark = lazy(() => import('./pages/UserBookmark'));
const MyShopping = lazy(() => import('./pages/MyShopping'));
const MyInquiry = lazy(() => import('./components/my_shopping/MyInquiry'));
const UsersReviews = lazy(() => import('./pages/UsersReviews'));
const UsersReviewsWrite = lazy(() => import('./pages/UsersReviewsWrite'));
const MyReviews = lazy(() => import('./pages/MyReviews'));
const OrderResult = lazy(() => import('./pages/OrderResult'));
const SearchResult = lazy(() => import('./pages/SearchResult'));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </>
  );
}

export default App;
