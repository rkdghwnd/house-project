import React from 'react';

const UsersEditMainNickname = ({
  nicknameError,
  nickname,
  onChangeNickname,
}) => {
  return (
    <div className="users-edit-main-nickname">
      <div className="edit-label">
        <label htmlFor="">별명</label>
      </div>
      <div className="users-edit-main-nickname-input">
        <div className="edit-input">
          <input
            type="text"
            className={`input-secondary${nicknameError ? ' is-error' : ''}`}
            value={nickname}
            onChange={onChangeNickname}
          />
        </div>
        {nicknameError && (
          <div className="nickname-error">
            닉네임은 2글자 이상이여야 합니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersEditMainNickname;
