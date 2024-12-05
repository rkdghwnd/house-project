import React, { ChangeEvent } from 'react';

const UsersEditMainGender = ({
  onChangeGender,
  gender,
}: {
  onChangeGender: (e: ChangeEvent<HTMLInputElement>) => void;
  gender: string;
}) => {
  return (
    <div className="users-edit-main-gender">
      <div className="edit-label">
        <label htmlFor="">성별</label>
      </div>
      <div className="edit-checkbox">
        <input
          type="radio"
          id="mail"
          name="gender"
          onChange={onChangeGender}
          checked={gender === 'mail'}
        />
        <label htmlFor="mail">남성</label>
        <input
          type="radio"
          id="femail"
          name="gender"
          onChange={onChangeGender}
          checked={gender === 'femail'}
        />
        <label htmlFor="femail">여성</label>
      </div>
    </div>
  );
};

export default UsersEditMainGender;
