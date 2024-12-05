import { AiFillExclamationCircle } from 'react-icons/ai';

const UsersEditPassword = () => {
  return (
    <section className="users-edit-password">
      <header className="users-edit-password-header">
        <h2>비밀번호 변경</h2>
      </header>
      <div className="users-edit-password-input">
        <label htmlFor="">새 비밀번호</label>
        <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
        <div className="password-box">
          <input type="password" />
          <p className="users-edit-password-error">
            <AiFillExclamationCircle className="circle-icons" />
            필수 입력 항목입니다.
          </p>
        </div>
      </div>
      <div className="users-edit-password-input">
        <label htmlFor="">새 비밀번호 확인</label>
        <div className="password-box">
          <input type="password" />
          <p className="users-edit-password-error">
            <AiFillExclamationCircle className="circle-icons" />
            비밀번호가 일치하지 않습니다.
          </p>
        </div>
      </div>
      <button className="btn-48 btn-primary">비밀번호 변경</button>
    </section>
  );
};

export default UsersEditPassword;
