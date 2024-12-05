import Spinner from '../../loading/Spinner';
import { LOADING } from '../../datas/statusConstants';

const Loading = ({ loadProductsStatus }: { loadProductsStatus: string }) => {
  return (
    <div className="loading">
      {loadProductsStatus === LOADING && <Spinner fontSize={24} />}
    </div>
  );
};

export default Loading;
