import React, { useEffect, useRef } from 'react';
import InquiryCard from './InquiryCard';
import { useDispatch } from 'react-redux';
import scrollSlice from '../../reducers/scrollSlice';

const ProductInquiry = () => {
  const dispatch = useDispatch();
  const productInquiry = useRef();

  useEffect(() => {
    const scrollY = productInquiry.current.offsetTop + 360;
    dispatch(scrollSlice.actions.updateProductInquiryScrollY(scrollY));
  }, [productInquiry]);

  return (
    <>
      <section
        className="product-section product-inquiry is-open"
        id="product-inquiry"
        role="tabpanel"
        ref={productInquiry}
      >
        <header className="product-section-header">
          <h1 className="title">문의</h1>
          <strong className="badge" aria-label="96개">
            96
          </strong>

          <a className="text-button" href="/">
            문의하기
          </a>
          <button
            className="icon-button sm-only"
            type="button"
            aria-label="더보기"
          >
            <i className="ic-chevron" aria-hidden></i>
          </button>
        </header>

        <div className="product-section-content">
          <ol className="inquiry-list">
            <li className="inquiry-item">
              <InquiryCard />
            </li>

            {/* <!-- NOTE: 비밀글일 경우 --> */}
            <li className="inquiry-item">
              <article className="inquiry-card">
                <header className="inquiry-card-header">
                  <h3 className="visually-hidden">지* 님이 남기신 문의</h3>

                  <dl className="detail">
                    <dt className="visually-hidden">구매 여부</dt>
                    <dd>비구매</dd>
                    <dt className="visually-hidden">문의 유형</dt>
                    <dd>상품</dd>
                    <dt className="visually-hidden">답변 여부</dt>
                    <dd>미답변</dd>
                  </dl>

                  <div className="misc">
                    <strong>홍시*</strong>
                    <time dateTime="2021-01-01 01:01">
                      2021년 1월 1일 01시 01분
                    </time>
                  </div>
                </header>

                <div className="inquiry-card-body">
                  <div className="inquiry-content">
                    <span aria-label="문의 내용">Q</span>
                    <p>
                      <i className="ic-lock" aria-hidden></i>
                      비밀글입니다.
                    </p>
                  </div>
                </div>
              </article>
            </li>

            {/* <!-- NOTE: 답변이 달린 경우 --> */}
            <li className="inquiry-item">
              <article className="inquiry-card">
                <header className="inquiry-card-header">
                  <h3 className="visually-hidden">지* 님이 남기신 문의</h3>

                  <dl className="detail">
                    <dt className="visually-hidden">구매 여부</dt>
                    <dd>비구매</dd>
                    <dt className="visually-hidden">문의 유형</dt>
                    <dd>배송</dd>
                    <dt className="visually-hidden">답변 여부</dt>
                    <dd className="is-answered">답변완료</dd>
                  </dl>

                  <div className="misc">
                    <strong>샤*</strong>
                    <time dateTime="2020-12-24 09:03">
                      2020년 12월 24일 09시 03분
                    </time>
                  </div>
                </header>

                <div className="inquiry-card-body">
                  <div className="inquiry-content">
                    <span aria-label="문의 내용">Q</span>
                    <p>
                      화이트 재입고 날짜 알려 주세요 그리고 4평 남짓 방에 두려고
                      하는데 너무 가까울까요
                    </p>
                  </div>

                  <div className="inquiry-content">
                    <span aria-label="답변 내용">A</span>
                    <div className="seller">
                      <strong>OA</strong>
                      <time dateTime="2020-12-24 19:30">
                        2020년 12월 24일 19시 30분
                      </time>
                    </div>
                    <p>
                      안녕하세요 고객님, 보아르입니다:)
                      <br />
                      현재 고객님의 주문 정보가 확인되지 않아 바로 안내드리지
                      못하는 점 양해 부탁드립니다.
                      <br />
                      문의하신 제품의 경우 현재 주문폭주로 인한 예약 판매중으로
                      순차 발송 진행되고 있습니다.
                      <br />
                      주문 시 최대한 빠른 발송 진행될 수 있도록 노력하겠습니다.
                      <br />
                      감사합니다.
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ol>

          <div className="pagination">
            <ol className="page-list">
              <li className="page-item is-active">
                <a href="/">1</a>
              </li>
              <li className="page-item">
                <a href="/">2</a>
              </li>
              <li className="page-item">
                <a href="/">3</a>
              </li>
              <li className="page-item">
                <a href="/">4</a>
              </li>
              <li className="page-item">
                <a href="/">5</a>
              </li>
            </ol>
            <button className="page-control page-next" type="button">
              <i className="ic-chevron"></i>
            </button>
          </div>
        </div>
      </section>
      <div className="product-section-divider sm-only" aria-hidden></div>
    </>

    // {/* <!-- NOTE: 문의가 0개일 경우 -->
    //       <!-- <section
    //         className="product-section product-inquiry is-open"
    //         id="product-inquiry"
    //         role="tabpanel"
    //       >
    //         <header className="product-section-header">
    //           <h1 className="title">문의</h1>
    //           <strong className="badge" aria-label="0개">0</strong>

    //           <a className="text-button" href="/">문의하기</a>
    //           <button
    //             className="icon-button sm-only"
    //             type="button"
    //             aria-label="더보기"
    //           >
    //             <i className="ic-chevron" aria-hidden></i>
    //           </button>
    //         </header>

    //         <div className="product-section-content">
    //           <p className="inquiry-empty">문의 내역이 없습니다.</p>
    //         </div>
    //       </section>
    //       <div className="product-section-divider sm-only" aria-hidden></div> --> */}
  );
};

export default ProductInquiry;
