import { app, storage, uploadFile } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { ref } from 'firebase/storage';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './profileimg.module.scss';

const ProfileIMg = () => {
  const auth = getAuth(app);

  const clickRef = useRef<HTMLInputElement | null>(null);

  const [url, setUrl] = useState<File | null>(null);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUrl(e.target.files[0]);
      console.log('files', e.target.files);
    }
  };

  const uploadImage = async () => {
    if (url) {
      await uploadFile(auth, ref(storage, url.name), url);
    }
    setUrl(null);
  };

  useEffect(() => {
    if (url) {
      uploadImage();
    }
  }, [url]);

  return (
    <div className={style.image}>
      {auth.currentUser?.photoURL ? (
        <img
          onClick={() => {
            clickRef.current!.click();
          }}
          src={auth.currentUser?.photoURL}></img>
      ) : null}
      <input
        onChange={handleFiles}
        ref={clickRef!}
        type="file"
        accept="image/*"
        className={style.files}
      />
    </div>
  );
};

export default ProfileIMg;
