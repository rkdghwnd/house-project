import { ChangeEvent } from 'react';

const UsersEditMainHomepage = ({
  onChangeHomepage,
  homepage,
}: {
  onChangeHomepage: (e: ChangeEvent<HTMLInputElement>) => void;
  homepage: string;
}) => {
  return (
    <div className="users-edit-main-homepage">
      <div className="edit-label">
        <label htmlFor="">홈페이지</label>
      </div>
      <div className="edit-input">
        <input
          type="text"
          placeholder="https://ohou.ses"
          className="input-secondary"
          onChange={onChangeHomepage}
          value={homepage}
        />
      </div>
    </div>
  );
};

export default UsersEditMainHomepage;
