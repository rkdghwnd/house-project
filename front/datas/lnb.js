export const storeLnb = [
  { href: '/', title: '쇼핑홈', isNew: false },
  { href: '/category?category_id=0', title: '카테고리', inNew: false },
  { href: '/ranks', title: '베스트', isNew: false },
  { href: '/today_deals', title: '오늘의딜', isNew: false },
  { href: '/exhibitions/1', title: '리퍼마켓', isNew: false },
  { href: '/exhibitions/2', title: '빠른배송', isNew: false },
  { href: '/exhibitions/3', title: '셀프인테리어', isNew: false },
  { href: '/premium/category', title: '프리미엄', isNew: true },
];

export const userProfileLnbBar = (userId) => {
  return [
    {
      name: '프로필',
      href: `/users/${userId}`,
    },
    {
      name: '스크랩북',
      href: `/users/${userId}/bookmark`,
    },
    {
      name: '좋아요',
      href: `/users/${userId}/like`,
    },
  ];
};

export const myShoppingLnbBar = [
  {
    name: '주문배송내역 조회',
    href: '/my_shopping',
  },
  { name: '나의문의내역', href: '/my_shopping/inquiry' },
];

export const productionReviewsLnbBar = [
  { name: '리뷰쓰기', href: '/users_reviews/write' },
  {
    name: '내가 작성한 리뷰',
    href: '/users_reviews',
  },
];

export const usersSettingsLnbBar = [
  {
    name: '회원정보수정',
    href: '/users/edit',
  },
  // {
  //   name: '비밀번호 변경',
  //   href: '/users/edit_password',
  // },
];
