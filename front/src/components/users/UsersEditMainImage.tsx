import React, { ChangeEvent, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfileImage } from '../../actions/user';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const UsersEditMainImage = () => {
  const dispatch = useAppDispatch();
  const fileInput = useRef<HTMLInputElement>(null);
  const uploadedProfileImageName = useSelector(
    (state: RootState) => state.user.uploadedProfileImageName
  );

  const openFileInput = useCallback(() => {
    if (!fileInput.current) {
      return;
    }
    fileInput.current.click();
  }, [fileInput]);

  const onChangeUploadImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.files) {
        return;
      }
      const imageFormData = new FormData(); // FormData 형식 객체 생성
      imageFormData.append('image', e.currentTarget.files[0]);
      dispatch(
        uploadProfileImage({
          data: imageFormData,
        })
      );
    },
    []
  );

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
