import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import modalSlice from '../../reducers/modalSlice';
import CopyToClipMessage from './CopyToClipMessage';
import useScript from '../../hooks/useScript';

const ShareModal = () => {
  const dispatch = useDispatch();
  const { copyToClipMessageVisible, shareModalVisible } = useSelector(
    (state) => state.modal
  );

  // kakao SDK import하기
  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
      }
    }
  }, [status]);

  const currentUrl = window.location.href;
  const handleKakaoButton = useCallback(() => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  }, [currentUrl]);

  const onStopEventBubbling = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onClickClipButton = useCallback(() => {
    dispatch(modalSlice.actions.openCopyToClipMessage());
    // 클립복사 툴팁 보이기
    setTimeout(() => {
      dispatch(modalSlice.actions.closeCopyToClipMessage());
    }, 900);
  }, []);

  return (
    <div
      className={`share-modal${shareModalVisible ? ' is-active' : ''}`}
      onClick={onStopEventBubbling}
    >
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>

      <div onClick={onClickClipButton}>
        <CopyToClipboard text={currentUrl}>
          <div className="url-share-button">URL</div>
        </CopyToClipboard>
        {copyToClipMessageVisible && <CopyToClipMessage />}
      </div>
      <div className="kakao-share-button">
        <img
          className="kakao-icon"
          src={`https://velog.velcdn.com/images/ghwnd6448/post/415bc0db-40ca-4e70-822a-afbdefe0588c/image.webp`}
          onClick={handleKakaoButton}
          alt="카카오 아이콘"
        ></img>
      </div>
    </div>
  );
};

export default ShareModal;
