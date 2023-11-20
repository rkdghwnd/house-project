import React from 'react';

const UsersEditMainBirth = ({ onChangeBirth, birth }) => {
  return (
    <div className="users-edit-main-birth">
      <div className="edit-label">
        <label htmlFor="">생년월일</label>
      </div>
      <div className="edit-input">
        <input
          type="date"
          value={birth}
          onChange={onChangeBirth}
          className="input-secondary"
        />
      </div>
    </div>
  );
};

export default UsersEditMainBirth;
