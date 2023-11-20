import { LOADING } from '../datas/statusConstants';

export function createInfiniteScrollObserver(
  viewport,
  hasMoreProducts,
  loadProductsStatus,
  scrollTarget,
  dispatch,
  actionFunction,
  query
) {
  const options = {
    root: viewport.current,
    threshold: 0,
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        hasMoreProducts &&
        !(loadProductsStatus === LOADING)
      ) {
        dispatch(
          actionFunction({
            query,
          })
        );
      }
    });
  };

  const io = new IntersectionObserver(handleIntersection, options);

  if (scrollTarget.current) {
    io.observe(scrollTarget.current); // 관찰 지정
  }

  return io;
}
