import { createSlice } from '@reduxjs/toolkit';
import {
  getStoreHotdeals,
  getStorePopularProducts,
  getCategoryProducts,
  getCategoryBrandList,
  getRanksProducts,
  getTodayDealsProducts,
  getSearchProducts,
  getSearchBrandList,
  getWeeklyPromotion,
} from '../actions/product';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';
import { categoryButtonsFilter, productsSortFilter } from '../datas/filter';
import { CartItem, ProductSlice } from '../types/stateTypes';

const initialState: ProductSlice = {
  storeHotdeals: [],
  getStoreHotdealsStatus: 'idle',
  getStoreHotdealsError: null,
  popularProducts: [],
  getStorePopularProductsStatus: 'idle',
  loadPopularProductsStatus: 'idle',
  loadPopularProductsError: null,
  hasMorePopularProducts: true,
  popularProductsFilter: [
    {
      content: '무료배송만 보기',
      filterProperty: 'free_delivery',
      isOn: false,
      button: 'toggle',
    },
  ],
  popularProductsSortFilter: productsSortFilter,
  modalFilters: {
    title: '',
    filterList: [],
    thunkName: '',
    filterActionName: '',
    productsFilter: [],
    productsSortFilter: [],
  },
  categoryProducts: [],
  hasMoreCategoryProducts: true,
  loadCategoryProductsStatus: 'idle',
  loadCategoryProductsError: null,
  categoryProductsFilter: categoryButtonsFilter,
  categoryProductsSortFilter: productsSortFilter,
  productTotalCount: 0,
  getCategoryBrandListStatus: 'idle',
  getCategoryBrandListError: null,
  ranksProducts: [],
  getRanksProductsStatus: 'idle',
  getRanksProductsError: null,
  hasMoreRanksProducts: true,
  ranksTime: null,
  todayDealsProducts: [],
  getTodayDealsProductsStatus: 'idle',
  getTodayDealsProductsError: null,
  hasMoreTodayDealsProducts: true,
  searchProducts: [],
  loadSearchProductsStatus: 'idle',
  loadSearchProductsError: null,
  hasMoreSearchProducts: true,
  searchProductsFilter: categoryButtonsFilter,
  searchProductsSortFilter: productsSortFilter,
  weeklyPromotionProducts: [],
  getWeeklyPromotionStatus: 'idle',
  getWeeklyPromotionError: null,
  browserCart: [],
  browserCartProductCount: 0,
  checkedBrowserCartIds: [],
  getSearchBrandListStatus: 'idle',
  getSearchBrandListError: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updatePopularProductsFilter(state, action) {
      state.popularProductsFilter = action.payload.productsFilter;
      state.popularProductsSortFilter = action.payload.productsSortFilter;
      state.hasMorePopularProducts = true;
    },
    updateCategoryFilter(state, action) {
      const queryDatas: string[][] = action.payload.locationSearch
        .slice(1)
        .split('&')
        .map((el: string) => el.split('=')); // [ [], [], []...]

      state.categoryProductsFilter.forEach((button) => {
        button.isOn = false;
      });
      queryDatas.forEach((singleQuery) => {
        if (singleQuery[0] === 'is_departure_today') {
          const departureButton = state.categoryProductsFilter.find(
            (button) => button.filterProperty === 'is_departure_today'
          );
          if (!departureButton) {
            return;
          }
          departureButton.isOn = true;
        }
        if (singleQuery[0] === 'is_special_price') {
          const specialPriceButton = state.categoryProductsFilter.find(
            (button) => button.filterProperty === 'is_special_price'
          );
          if (!specialPriceButton) {
            return;
          }
          specialPriceButton.isOn = true;
        }
        if (singleQuery[0] === 'free_delivery') {
          const freeDeliveryButton = state.categoryProductsFilter.find(
            (button) => button.filterProperty === 'free_delivery'
          );
          if (!freeDeliveryButton) {
            return;
          }
          freeDeliveryButton.isOn = true;
        }
        if (singleQuery[0] === 'price') {
          const priceButton = state.categoryProductsFilter.find(
            (button) => button.filterProperty === 'price'
          );
          if (!priceButton || !priceButton.subFilter) {
            return;
          }
          const [minPrice, maxPrice] = JSON.parse(singleQuery[1]);
          if (typeof minPrice === 'number' && typeof maxPrice === 'number') {
            priceButton.isOn = true;

            priceButton.subFilter.forEach((radioButton) => {
              const [radioButtonMinPrice, radioButtonMaxPrice] = JSON.parse(
                radioButton.filterProperty
              );
              if (
                radioButtonMinPrice === minPrice &&
                radioButtonMaxPrice === maxPrice
              ) {
                radioButton.isOn = true;
              } else {
                radioButton.isOn = false;
              }
            });
          }
        }
        if (singleQuery[0] === 'brand_name') {
          const brandButton = state.categoryProductsFilter.find(
            (button) => button.filterProperty === 'brand_name'
          );
          if (!brandButton || !brandButton.subFilter) {
            return;
          }
          brandButton.isOn = false;
          const brandNames = JSON.parse(decodeURIComponent(singleQuery[1]));
          brandButton.subFilter.forEach((checkbox) => {
            checkbox.isOn = false;
            if (brandNames.includes(checkbox.content)) {
              checkbox.isOn = true;
              brandButton.isOn = true;
            }
          });
        }
        if (singleQuery[0] === 'overseas_purchase') {
          const overseasButton = state.categoryProductsFilter.find(
            (button) => button.filterProperty === 'overseas_purchase'
          );
          if (!overseasButton || !overseasButton.subFilter) {
            return;
          }
          overseasButton.isOn = false;
          const overseasNames = JSON.parse(decodeURIComponent(singleQuery[1]));
          overseasButton.subFilter.forEach((checkbox) => {
            checkbox.isOn = false;
            if (overseasNames.includes(checkbox.content)) {
              checkbox.isOn = true;
              overseasButton.isOn = true;
            }
          });
        }
      });

      // 업데이트된 정렬필터 데이터 만들기
      const orderSingleQuery = queryDatas.find((el) => el[0] === 'order');
      if (orderSingleQuery) {
        state.categoryProductsSortFilter?.forEach((radioButton) => {
          radioButton.isOn = radioButton.filterProperty === orderSingleQuery[1];
        });
      }

      state.hasMoreCategoryProducts = true;
    },
    updateModalFilter(state, action) {
      state.modalFilters = {
        title: action.payload.title,
        filterList: action.payload.filterList,
        thunkName: action.payload.thunkName,
        filterActionName: action.payload.filterActionName,
        productsFilter: action.payload.productsFilter,
        productsSortFilter: action.payload.productsSortFilter,
      };
    },
    togglePanelFilter(state, action) {
      state.categoryProductsFilter.forEach((button, index) => {
        button.isSubFilterOn =
          index === action.payload.index ? !button.isSubFilterOn : false;
      });
      state.searchProductsFilter.forEach((button, index) => {
        button.isSubFilterOn =
          index === action.payload.index ? !button.isSubFilterOn : false;
      });
    },
    closePanelFilter(state, action) {
      state.categoryProductsFilter.forEach((filter) => {
        if (filter.isSubFilterOn && filter.isSubFilter) {
          filter.isSubFilterOn = false;
        }
      });
      state.searchProductsFilter.forEach((filter) => {
        if (filter.isSubFilterOn && filter.isSubFilter) {
          filter.isSubFilterOn = false;
        }
      });
    },
    updateSearchFilter(state, action) {
      const queryDatas = action.payload.locationSearch
        .slice(1)
        .split('&')
        .map((el: string) => el.split('=')); // [ [], [], []...]

      state.searchProductsFilter.forEach((button) => {
        button.isOn = false;
      });
      queryDatas.forEach((singleQuery: string[]) => {
        if (singleQuery[0] === 'is_departure_today') {
          const departureButton = state.searchProductsFilter.find(
            (button) => button.filterProperty === 'is_departure_today'
          );
          if (!departureButton) {
            return;
          }
          departureButton.isOn = true;
        }
        if (singleQuery[0] === 'is_special_price') {
          const specialPriceButton = state.searchProductsFilter.find(
            (button) => button.filterProperty === 'is_special_price'
          );
          if (!specialPriceButton) {
            return;
          }
          specialPriceButton.isOn = true;
        }
        if (singleQuery[0] === 'free_delivery') {
          const freeDeliveryButton = state.searchProductsFilter.find(
            (button) => button.filterProperty === 'free_delivery'
          );
          if (!freeDeliveryButton) {
            return;
          }
          freeDeliveryButton.isOn = true;
        }
        if (singleQuery[0] === 'price') {
          const priceButton = state.searchProductsFilter.find(
            (button) => button.filterProperty === 'price'
          );
          if (!priceButton || !priceButton.subFilter) {
            return;
          }
          const [minPrice, maxPrice] = JSON.parse(singleQuery[1]);
          if (typeof minPrice === 'number' && typeof maxPrice === 'number') {
            priceButton.isOn = true;
            priceButton.subFilter.forEach((radioButton) => {
              const [radioButtonMinPrice, radioButtonMaxPrice] = JSON.parse(
                radioButton.filterProperty
              );
              if (
                radioButtonMinPrice === minPrice &&
                radioButtonMaxPrice === maxPrice
              ) {
                radioButton.isOn = true;
              } else {
                radioButton.isOn = false;
              }
            });
          }
        }
        if (singleQuery[0] === 'brand_name') {
          const brandButton = state.searchProductsFilter.find(
            (button) => button.filterProperty === 'brand_name'
          );
          if (!brandButton || !brandButton.subFilter) {
            return;
          }
          brandButton.isOn = false;
          const brandNames = JSON.parse(decodeURIComponent(singleQuery[1]));
          brandButton.subFilter.forEach((checkbox) => {
            checkbox.isOn = false;
            if (brandNames.includes(checkbox.content)) {
              checkbox.isOn = true;
              brandButton.isOn = true;
            }
          });
        }
        if (singleQuery[0] === 'overseas_purchase') {
          const overseasButton = state.searchProductsFilter.find(
            (button) => button.filterProperty === 'overseas_purchase'
          );
          if (!overseasButton || !overseasButton.subFilter) {
            return;
          }
          overseasButton.isOn = false;
          const overseasNames = JSON.parse(decodeURIComponent(singleQuery[1]));
          overseasButton.subFilter.forEach((checkbox) => {
            checkbox.isOn = false;
            if (overseasNames.includes(checkbox.content)) {
              checkbox.isOn = true;
              overseasButton.isOn = true;
            }
          });
        }
      });

      // 업데이트된 정렬필터 데이터 만들기
      const orderSingleQuery = queryDatas.find(
        (el: string[]) => el[0] === 'order'
      );
      if (orderSingleQuery) {
        state.searchProductsSortFilter?.forEach((radioButton) => {
          radioButton.isOn = radioButton.filterProperty === orderSingleQuery[1];
        });
      }

      state.hasMoreSearchProducts = true;
    },
    addProductInBrowserCart(state, action) {
      const newCartItem: CartItem = {
        id: action.payload.productions.id,
        product_name: action.payload.productions.product_name,
        brand_name: action.payload.productions.brand_name,
        image_url: action.payload.productions.image_url,
        free_delivery: action.payload.productions.free_delivery,
        selling_price: action.payload.productions.selling_price,
        Cart_product: action.payload.cartOptionDatas.map(
          (option: {
            optionCount: number;
            optionName: string;
            productId: number;
          }) => {
            return {
              product_count: option.optionCount,
              product_option: option.optionName,
              productId: option.productId,
            };
          }
        ),
      };

      const browerCartItems: CartItem[] = JSON.parse(
        localStorage.getItem('cart') || '[]'
      );

      if (!browerCartItems) {
        return;
      }

      const prevCartItem = browerCartItems.find(
        (product) => product.id === newCartItem.id
      );

      if (prevCartItem) {
        // 이미 존재하는 옵션이면 -> 카운트만 늘리기
        prevCartItem.Cart_product.forEach((prevOption) => {
          newCartItem.Cart_product.forEach(
            (newOption: {
              product_count: number;
              product_option: string;
              productId?: number;
              updated?: boolean;
            }) => {
              if (prevOption.product_option === newOption.product_option) {
                prevOption.product_count += newOption.product_count;
                newOption.updated = true;
              }
            }
          );
        });
        // 이미 존재하지 않으면 -> 새로추가
        prevCartItem.Cart_product.push(
          ...newCartItem.Cart_product.filter(
            (option: {
              product_count: number;
              product_option: string;
              productId?: number;
              updated?: boolean;
            }) => !option.updated
          )
        );
      } else {
        // 새로운 production 추가
        browerCartItems.push(newCartItem);
      }

      localStorage.setItem('cart', JSON.stringify(browerCartItems));
    },
    updateBroswerCartProductCount(state, action) {
      const browerCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      const browserCartItemsCount = browerCartItems.reduce(
        (acc: number, cur: CartItem) => {
          return (
            acc +
            cur.Cart_product?.reduce((accOptionCount, curOption) => {
              return accOptionCount + curOption.product_count;
            }, 0)
          );
        },
        0
      );
      state.browserCartProductCount = browserCartItemsCount;
    },
    getBrowserCart(state, action) {
      state.browserCart = JSON.parse(localStorage.getItem('cart') || '[]');
    },
    removeBrowserCartProduct(state, action) {
      // browserCart 업데이트
      state.browserCart = state.browserCart.filter(
        (product) => !action.payload.productIds.includes(product.id)
      );
      localStorage.setItem('cart', JSON.stringify(state.browserCart));
      // browserCartProductCount 업데이트
      const browserCartItemsCount = state.browserCart.reduce(
        (acc: number, cur) => {
          return (
            acc +
            cur.Cart_product?.reduce((accOptionCount, curOption) => {
              return accOptionCount + curOption.product_count;
            }, 0)
          );
        },
        0
      );
      state.browserCartProductCount = browserCartItemsCount;
      // checkedBrowserCartIds 업데이트
      state.checkedBrowserCartIds = state.checkedBrowserCartIds.filter(
        (productId) => !action.payload.productIds.includes(productId)
      );
    },
    handleAllCheckBrowserCartItems(state, action) {
      if (action.payload.checked) {
        state.checkedBrowserCartIds = state.browserCart.map(
          (product) => product.id
        );
      } else {
        state.checkedBrowserCartIds = [];
      }
    },
    handleSingleCheckBrowserCartItems(state, action) {
      if (action.payload.checked) {
        state.checkedBrowserCartIds.push(action.payload.productId);
      } else {
        state.checkedBrowserCartIds = state.checkedBrowserCartIds.filter(
          (item) => item !== action.payload.productId
        );
      }
    },
    removeProductOptionInBrowserCart(state, action) {
      // browserCart에서 Cart_product 찾아서 삭제
      // Cart_product가 비어있는 browserCart요소(Product)가 있으면 요소 삭제
      state.browserCart = state.browserCart
        .map((product) => {
          const filteredCartProduct = product.Cart_product.filter(
            (option) => option.product_option !== action.payload.optionName
          );
          product.Cart_product = filteredCartProduct;
          return product;
        })
        .filter((product) => product.Cart_product.length !== 0);
      // localStorage 업데이트
      localStorage.setItem('cart', JSON.stringify(state.browserCart));

      // 장바구니 count 업데이트
      state.browserCartProductCount = state.browserCart.reduce((acc, cur) => {
        const totalCount = cur.Cart_product.reduce((acc, cur) => {
          return acc + cur.product_count;
        }, 0);
        return acc + totalCount;
      }, 0);

      // 변화를 하면서 checked 배열도 변화 반영해야함
      // 갱신된 browserCart의 productId를 모아서 해당 요소에 속하는지 확인 후 필터
      state.checkedBrowserCartIds = state.checkedBrowserCartIds.map(
        (productId) => {
          const allIds = state.browserCart.map((product) => product.id);
          if (allIds.includes(productId)) {
            return productId;
          }
        }
      ) as number[];
    },
    updateProductOptionCountInBrowserCart(state, action) {
      // browserCart에서 Cart_product 찾아서 count 갱신
      // count 가 0 이면 해당 Cart_product 제거
      // Cart_product가 비어있는 browserCart요소(Product)가 있으면 요소 삭제

      state.browserCart = state.browserCart
        .map((product) => {
          const updatedCartProduct = product.Cart_product.map((option) => {
            if (option.product_option === action.payload.optionName) {
              option.product_count += action.payload.count;
            }
            return option;
          }).filter((option) => option.product_count > 0);

          product.Cart_product = updatedCartProduct;
          return product;
        })
        .filter((product) => product.Cart_product.length !== 0);

      // localStorage 업데이트
      localStorage.setItem('cart', JSON.stringify(state.browserCart));

      // 장바구니 count 업데이트
      state.browserCartProductCount = state.browserCart.reduce((acc, cur) => {
        const totalCount = cur.Cart_product.reduce((acc, cur) => {
          return acc + cur.product_count;
        }, 0);
        return acc + totalCount;
      }, 0);

      // 변화를 하면서 checked 배열도 변화 반영해야함
      // 갱신된 browserCart의 productId를 모아서 해당 요소에 속하는지 확인 후 필터

      state.checkedBrowserCartIds = state.checkedBrowserCartIds.map(
        (productId) => {
          const allIds = state.browserCart.map((product) => product.id);
          if (allIds.includes(productId)) {
            return productId;
          }
        }
      ) as number[];
    },
  },
  // 비동기 실행인 리듀서
  extraReducers: (builder) =>
    builder
      .addCase(getStoreHotdeals.pending, (state, action) => {
        state.getStoreHotdealsStatus = LOADING;
      })
      .addCase(getStoreHotdeals.fulfilled, (state, action) => {
        state.getStoreHotdealsStatus = SUCCEEDED;
        state.storeHotdeals = action.payload;
      })
      .addCase(getStoreHotdeals.rejected, (state, action) => {
        state.getStoreHotdealsStatus = REJECTED;
        state.getStoreHotdealsError = action.payload;
      })
      .addCase(getStorePopularProducts.pending, (state, action) => {
        state.getStorePopularProductsStatus = LOADING;
      })
      .addCase(getStorePopularProducts.fulfilled, (state, action) => {
        state.getStorePopularProductsStatus = SUCCEEDED;

        if (action.payload.query.page === '1') {
          state.popularProducts = action.payload.products;
        } else {
          state.popularProducts = state.popularProducts.concat(
            action.payload.products
          );
        }

        state.hasMorePopularProducts = action.payload.products.length === 12;
      })
      .addCase(getStorePopularProducts.rejected, (state, action) => {
        state.getStorePopularProductsStatus = REJECTED;
        state.loadPopularProductsError = action.payload;
      })
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.loadCategoryProductsStatus = LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.loadCategoryProductsStatus = SUCCEEDED;

        if (action.payload.query.page === '1') {
          state.categoryProducts = action.payload.products;
        } else {
          state.categoryProducts = state.categoryProducts.concat(
            action.payload.products
          );
        }

        state.productTotalCount = action.payload.count;
        state.hasMoreCategoryProducts = action.payload.products.length === 12;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.loadCategoryProductsStatus = REJECTED;
        state.loadCategoryProductsError = action.payload;
      })
      .addCase(getCategoryBrandList.pending, (state, action) => {
        state.getCategoryBrandListStatus = LOADING;
      })
      .addCase(getCategoryBrandList.fulfilled, (state, action) => {
        state.getCategoryBrandListStatus = SUCCEEDED;

        const BrandList = action.payload.map(
          (brandName: {
            filterProperty: string;
            isOn: boolean;
            content: string;
          }) => {
            return {
              content: brandName,
              filterProperty: 'brand_name',
              isOn: false,
            };
          }
        );

        state.categoryProductsFilter = state.categoryProductsFilter.map(
          (el) => {
            if (el.filterProperty === 'brand_name') {
              el.subFilter = BrandList;
            }
            return el;
          }
        );
      })
      .addCase(getCategoryBrandList.rejected, (state, action) => {
        state.getCategoryBrandListStatus = REJECTED;
        state.getCategoryBrandListError = action.payload;
      })
      .addCase(getRanksProducts.pending, (state, action) => {
        state.getRanksProductsStatus = LOADING;
      })
      .addCase(getRanksProducts.fulfilled, (state, action) => {
        state.getRanksProductsStatus = SUCCEEDED;

        if (action.payload.query.page === '1') {
          state.ranksProducts = action.payload.products;
        } else {
          state.ranksProducts = state.ranksProducts.concat(
            action.payload.products
          );
        }

        state.hasMoreRanksProducts = action.payload.products.length === 12;
        state.ranksTime = action.payload.time;
      })
      .addCase(getRanksProducts.rejected, (state, action) => {
        state.getRanksProductsStatus = REJECTED;
        state.getRanksProductsError = action.payload;
      })
      .addCase(getTodayDealsProducts.pending, (state, action) => {
        state.getTodayDealsProductsStatus = LOADING;
      })
      .addCase(getTodayDealsProducts.fulfilled, (state, action) => {
        state.getTodayDealsProductsStatus = SUCCEEDED;

        if (action.payload.query.page === '1') {
          state.todayDealsProducts = action.payload.products;
        } else {
          state.todayDealsProducts = state.todayDealsProducts.concat(
            action.payload.products
          );
        }
        state.hasMoreTodayDealsProducts = action.payload.products.length === 12;
      })
      .addCase(getTodayDealsProducts.rejected, (state, action) => {
        state.getTodayDealsProductsStatus = REJECTED;
        state.getTodayDealsProductsError = action.payload;
      })
      .addCase(getSearchProducts.pending, (state, action) => {
        state.loadSearchProductsStatus = LOADING;
      })
      .addCase(getSearchProducts.fulfilled, (state, action) => {
        state.loadSearchProductsStatus = SUCCEEDED;

        if (action.payload.query.page === '1') {
          state.searchProducts = action.payload.products;
        } else {
          state.searchProducts = state.searchProducts.concat(
            action.payload.products
          );
        }
        state.hasMoreSearchProducts = action.payload.products.length === 16;
      })
      .addCase(getSearchProducts.rejected, (state, action) => {
        state.loadSearchProductsStatus = REJECTED;
        state.loadSearchProductsError = action.payload;
      })
      .addCase(getSearchBrandList.pending, (state, action) => {
        state.getSearchBrandListStatus = LOADING;
      })
      .addCase(getSearchBrandList.fulfilled, (state, action) => {
        state.getSearchBrandListStatus = SUCCEEDED;

        const BrandList = action.payload.map(
          (brandName: {
            content: string;
            filterProperty: string;
            isOn: boolean;
          }) => {
            return {
              content: brandName,
              filterProperty: 'brand_name',
              isOn: false,
            };
          }
        );

        const brandButton = state.searchProductsFilter.find(
          (button) => button.filterProperty === 'brand_name'
        );
        if (!brandButton) {
          return;
        }
        brandButton.subFilter = BrandList;
      })
      .addCase(getSearchBrandList.rejected, (state, action) => {
        state.getSearchBrandListStatus = REJECTED;
        state.getSearchBrandListError = action.payload;
      })
      .addCase(getWeeklyPromotion.pending, (state, action) => {
        state.getWeeklyPromotionStatus = LOADING;
      })
      .addCase(getWeeklyPromotion.fulfilled, (state, action) => {
        state.getWeeklyPromotionStatus = SUCCEEDED;
        state.weeklyPromotionProducts = action.payload;
      })
      .addCase(getWeeklyPromotion.rejected, (state, action) => {
        state.getWeeklyPromotionStatus = REJECTED;
        state.getWeeklyPromotionError = action.payload;
      }),
});

export default productSlice;
