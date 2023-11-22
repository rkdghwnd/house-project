export const makeQuery = (
  page,
  productsFilter = [],
  productsSortFilter = [],
  categoryId
) => {
  let query = '';
  if (page) {
    query = `?page=${page}`;
  }

  if (categoryId !== undefined) {
    query += `&category_id=${categoryId}`;
  }

  for (let i = 0; i < productsFilter.length; i++) {
    if (productsFilter[i].isOn) {
      if (productsFilter[i].filterProperty === 'price') {
        const prices = JSON.parse(
          productsFilter[i].subFilter.find((el) => el.isOn).filterProperty
        );
        query += `&price=[${prices[0] || 0},${prices[1] || 999999999999}]`;
      } else if (productsFilter[i].filterProperty === 'brand_name') {
        const brandNames = productsFilter[i].subFilter
          .filter((el) => el.isOn)
          .map((el) => el.filterProperty);
        query += `&brand_name=${JSON.stringify(brandNames)}`;
      } else if (productsFilter[i].filterProperty === 'overseas_purchase') {
        const overseasCheckedPanel = productsFilter[i].subFilter.filter(
          (el) => el.isOn
        );

        overseasCheckedPanel.forEach((checkbox) => {
          query += `?${checkbox.filterProperty}=true`;
        });
      } else {
        query += `&${productsFilter[i].filterProperty}=true`;
      }
    }
  }

  for (let i = 0; i < productsSortFilter.length; i++) {
    if (productsSortFilter[i].isOn) {
      query += `&order=${productsSortFilter[i].filterProperty}`;
    }
  }

  return query;
};
