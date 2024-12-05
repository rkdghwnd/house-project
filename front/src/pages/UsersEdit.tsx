import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import UsersEditHeader from '../components/users/UsersEditHeader';
import UsersEditMainEmail from '../components/users/UsersEditMainEmail';
import UsersEditMainNickname from '../components/users/UsersEditMainNickname';
import UsersEditMainHomepage from '../components/users/UsersEditMainHomepage';
import UsersEditMainGender from '../components/users/UsersEditMainGender';
import UsersEditMainBirth from '../components/users/UsersEditMainBirth';
import UsersEditMainImage from '../components/users/UsersEditMainImage';
import UsersEditMainIntroduce from '../components/users/UsersEditMainIntroduce';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SUCCEEDED } from '../datas/statusConstants';
import useInput from '../hooks/useInput';
import { updateUserProfile } from '../actions/user';
import { useAppDispatch } from '../../reduxToolkitStore';
import { RootState } from '../reducers';

const UsersEdit = () => {
  const dispatch = useAppDispatch();

  const me = useSelector((state: RootState) => state.user.me);
  const getMyInfoStatus = useSelector(
    (state: RootState) => state.user.getMyInfoStatus
  );
  const uploadedProfileImageName = useSelector(
    (state: RootState) => state.user.uploadedProfileImageName
  );
  const navigate = useNavigate();
  const { value: username, handler: _u, setValue: setUsername } = useInput('');
  const { value: domain, handler: _d, setValue: setDomain } = useInput('');
  const [nickname, setNickname] = useState('');
  const {
    value: homepage,
    handler: onChangeHomepage,
    setValue: setHomepage,
  } = useInput('');
  const {
    value: gender,
    handler: onChangeGender,
    setValue: setGender,
  } = useInput('');
  const {
    value: birth,
    handler: onChangeBirth,
    setValue: setBirth,
  } = useInput('');
  const {
    value: introduce,
    handler: onChangeIntroduce,
    setValue: setIntroduce,
  } = useInput('');

  const [nicknameError, setNicknameError] = useState(false);

  useEffect(() => {
    setUsername(me?.email.split('@')[0] || '');
    setDomain(me?.email.split('@')[1] || '');
    setNickname(me?.nickname || '');
    setHomepage(me?.homepage || '');
    setGender(me?.gender || '');
    setBirth(me?.birth || '');
    setIntroduce(me?.introduce || '');
  }, [me]);

  useEffect(() => {
    // 비로그인 상태인 경우
    if (getMyInfoStatus === SUCCEEDED && !me) {
      navigate('/');
    }
  }, [me, getMyInfoStatus]);

  const onChangeNickname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    if (e.currentTarget.value.length < 2) {
      setNicknameError(true);
    } else {
      setNicknameError(false);
    }
  }, []);

  const validateEmail = (username: string, domain: string) =>
    /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
      `${username}@${domain}`
    )
      ? true
      : false;

  const validateNicknameLength = (nickname: string) =>
    nickname.length < 2 ? false : true;

  const onClickProfileUpdate = useCallback(() => {
    if (!validateEmail(username, domain) || !validateNicknameLength(nickname)) {
      return;
    }

    const formData = new FormData();
    formData.append('email', username + '@' + domain);
    formData.append('profile_img', uploadedProfileImageName); // req.body에 들어감(이미지나 파일 아닌 텍스트(이미지경로))
    formData.append('nickname', nickname);
    formData.append('homepage', homepage);
    formData.append('gender', gender);
    formData.append('birth', birth);
    formData.append('introduce', introduce);

    dispatch(
      updateUserProfile({
        data: formData,
      })
    ).then((result) => {
      if (updateUserProfile.fulfilled.match(result)) {
        navigate('/');
      }
    });
  }, [
    username,
    domain,
    uploadedProfileImageName,
    nickname,
    introduce,
    homepage,
    gender,
    birth,
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <section className="users-edit">
            <UsersEditHeader />
            <article className="users-edit-main">
              <UsersEditMainEmail
                username={username}
                setUsername={setUsername}
                domain={domain}
                setDomain={setDomain}
              />
              <UsersEditMainNickname
                nickname={nickname}
                onChangeNickname={onChangeNickname}
                nicknameError={nicknameError}
              />
              <UsersEditMainHomepage
                homepage={homepage}
                onChangeHomepage={onChangeHomepage}
              />
              <UsersEditMainGender
                onChangeGender={onChangeGender}
                gender={gender}
              />
              <UsersEditMainBirth onChangeBirth={onChangeBirth} birth={birth} />
              <UsersEditMainImage />
              <UsersEditMainIntroduce
                introduce={introduce}
                onChangeIntroduce={onChangeIntroduce}
              />
              <div className="users-edit-main-update-button">
                <button
                  className="btn-40 btn-primary"
                  onClick={onClickProfileUpdate}
                >
                  회원 정보 수정
                </button>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UsersEdit;
