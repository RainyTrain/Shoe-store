import { app, storage, uploadFile } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { ref } from 'firebase/storage';
import { ChangeEvent, useRef, useState } from 'react';
import style from './profileimg.module.scss';

const ProfileIMg = () => {
  const auth = getAuth(app);
  const clickRef = useRef<any>(null);

  const [url, setUrl] = useState<File | null>(null);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUrl(e.target.files[0]);
      console.log('files', e.target.files);
    }
  };

  const uploadImage = () => {
    uploadFile(auth, ref(storage, url!.name), url!);
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
        <button onClick={uploadImage}>Upload!</button>
      </div>
    </>
  );
};

export default ProfileIMg;
