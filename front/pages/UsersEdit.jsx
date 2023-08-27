import React from 'react';

const UsersEdit = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <section className="users-edit">
            <header className="users-edit-header">
              <h2>회원정보수정</h2>
              <button className="btn-ghost btn-32">탈퇴하기</button>
            </header>
            <article className="users-edit-main">
              <div className="users-edit-main-email">
                <div className="edit-label">
                  <label htmlFor="">이메일</label>
                  <span>* 필수항목</span>
                </div>
                <div className="edit-input">
                  <input type="text" />
                  <span>@</span>
                  <select>
                    <option value="" disabled>
                      선택해주세요
                    </option>
                    <option value="">naver.com</option>
                    <option value="">hanmail.net</option>
                    <option value="">daum.net</option>
                    <option value="">gmail.com</option>
                    <option value="">nate.com</option>
                    <option value="">hotmail.com</option>
                    <option value="">outlook.com</option>
                    <option value="">icloud.com</option>
                  </select>
                </div>
              </div>
              <div className="users-edit-main-nickname">
                <div className="edit-label">
                  <label htmlFor="">별명</label>
                </div>
                <div className="edit-input">
                  <input type="text" />
                </div>
              </div>
              <div className="users-edit-main-homepage">
                <div className="edit-label">
                  <label htmlFor="">홈페이지</label>
                </div>
                <div className="edit-input">
                  <input type="text" placeholder="https://ohou.ses" />
                </div>
              </div>
              <div className="users-edit-main-gender">
                <div className="edit-label">
                  <label htmlFor="">성별</label>
                </div>
                <div className="edit-checkbox">
                  <input type="radio" id="mail" name="gender" />
                  <label htmlFor="">남성</label>
                  <input type="radio" id="femail" name="gender" />
                  <label htmlFor="">여성</label>
                </div>
              </div>
              <div className="users-edit-main-birth">
                <div className="edit-label">
                  <label htmlFor="">생년월일</label>
                </div>
                <div className="edit-input">
                  <input type="date" />
                </div>
              </div>
              <div className="users-edit-main-profile-image">
                <div className="edit-label">
                  <label htmlFor="">프로필 이미지</label>
                </div>
                <div className="edit-input">
                  <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/168807753404795190.jpeg?gif=1&w=960&h=960&c=c&webp=1" />
                </div>
              </div>
              <div className="users-edit-main-introduce">
                <div className="edit-label">
                  <label htmlFor="">한줄소개</label>
                </div>
                <div className="edit-input">
                  <input type="text" />
                </div>
              </div>
              <div className="users-edit-main-update-button">
                <button className="btn-40 btn-primary">회원 정보 수정</button>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UsersEdit;
