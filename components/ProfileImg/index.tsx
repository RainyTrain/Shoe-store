import { app, newPhoto } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './profileimg.module.scss';

const ProfileIMg = () => {
  const auth = getAuth(app);
  const clickRef = useRef<any>(null);

  const [url, setUrl] = useState<File | null>(null);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setUrl(e.target.files[0]);
      console.log('files', e.target.files);
    }
  };

  useEffect(() => {
    console.log('url', url);
  }, [url]);

  const changeProfilePhoto = () => {
    const photo = URL.createObjectURL(url!);
    newPhoto(auth, photo);
  };

  return (
    <>
      <div className={style.image}>
        {auth.currentUser?.photoURL ? <img src={auth.currentUser?.photoURL}></img> : null}
      </div>
      <div>
        <button
          onClick={() => {
            clickRef.current.click();
          }}>
          Select
        </button>
        <input
          onChange={handleFiles}
          ref={clickRef}
          type="file"
          accept="image/*"
          className={style.files}
        />
        <button onClick={changeProfilePhoto}>Click!</button>
      </div>
    </>
  );
};

export default ProfileIMg;
