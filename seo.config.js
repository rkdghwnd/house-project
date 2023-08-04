// next-seo 사용시 기본적으로 적용할 정보들

// import { DefaultSeo } from "next-seo";
// import SEO from "../seo.config";
// <DefaultSeo {...SEO}/> 방식으로 적용
// 이 프로젝트에는 _app.js에 적용해 전역적으로 설정함

export default {
  // %s -> NextSeo 에서 title 속성값이 들어가는 부분
  // 보통 하이픈(-) 으로 구분한다.(예를들어 | 은 I 와 혼동할수 있어 안씀)
  titleTemplate: '%s - 내일의집',
  openGraph: {
    type: 'website',
    site_name: '내일의집',
    images: [{ url: `/favicon.ico` }], // 수정예정
  },
  additionalLinkTags: [],
  additionalMetaTags: [
    // 추가로 필요한 meta tag에 대한 정보를 나열 -> 수정예정
  ],
};
