import React, { useCallback, useRef, useState } from 'react';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { BsImage } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { uploadReviewImage } from '../../actions/productions';
import productionsSlice from '../../reducers/productionsSlice';
import modalSlice from '../../reducers/modalSlice';

const WritingReviewFormImageAttach = () => {
  const dispatch = useDispatch();
  const { reviewUploadedImage } = useSelector((state) => state.productions);
  const { imagePreviewVisible } = useSelector((state) => state.modal);
  const fileInput = useRef(null);

  const removeUploadImage = useCallback(() => {
    dispatch(
      modalSlice.actions.updateImagePreview({
        visible: false,
      })
    );
    dispatch(productionsSlice.actions.resetReviewUploadedImage());
  }, []);

  const openFileInput = useCallback(() => {
    fileInput.current.click();
  }, [fileInput]);

  const onChangeUploadImage = useCallback((e) => {
    console.log(e.currentTarget.files[0]);
    if (e.currentTarget.files[0]) {
      dispatch(
        modalSlice.actions.updateImagePreview({
          visible: true,
        })
      );

      const imageFormData = new FormData(); // FormData 형식 객체 생성
      imageFormData.append('image', e.currentTarget.files[0]);
      dispatch(
        uploadReviewImage({
          data: imageFormData,
        })
      );
      e.currentTarget.value = null;
    }
  }, []);

  return (
    <div className="writing-review-form-image-attach">
      <h3>사진첨부(선택)</h3>
      <p>사진을 첨부해주세요.(최대 1장)</p>

      {imagePreviewVisible && reviewUploadedImage && (
        <div className="image-box">
          <img src={reviewUploadedImage} alt="image-preview" />
          <button className="btn-32 btn-primary" onClick={removeUploadImage}>
            <BiSolidTrashAlt />
            &nbsp;삭제
          </button>
        </div>
      )}

      <button
        className="btn-48 btn-outlined add-button"
        onClick={openFileInput}
      >
        <BsImage className="image-icon" /> 사진 첨부하기
      </button>
      <input
        type="file"
        className="visually-hidden"
        ref={fileInput}
        onChange={onChangeUploadImage}
      />
    </div>
  );
};

export default WritingReviewFormImageAttach;
