import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfileImage } from '../../actions/user';

const UsersEditMainImage = () => {
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const { uploadedProfileImageName } = useSelector((state) => state.user);

  const openFileInput = useCallback(() => {
    fileInput.current.click();
  }, [fileInput]);

  const onChangeUploadImage = useCallback((e) => {
    const imageFormData = new FormData(); // FormData 형식 객체 생성
    imageFormData.append('image', e.currentTarget.files[0]);
    dispatch(
      uploadProfileImage({
        data: imageFormData,
      })
    );
  }, []);

  return (
    <div className="users-edit-main-image">
      <div className="edit-label">
        <label htmlFor="">프로필 이미지</label>
      </div>
      <div className="edit-input" onClick={openFileInput}>
        <img
          src={`${
            import.meta.env.VITE_BACK_END_DOMAIN
          }/${uploadedProfileImageName}`}
          alt="프로필 이미지"
        />
      </div>
      <input
        type="file"
        className="visually-hidden"
        ref={fileInput}
        onChange={onChangeUploadImage}
      />
    </div>
  );
};

export default UsersEditMainImage;
