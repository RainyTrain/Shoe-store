import { FC } from 'react';

type UserMainType = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const UserMain: FC<UserMainType> = ({ selected, setSelected }) => {
  const values = ['Cart', 'History'];

  return (
    <>
      <ul>
        {values.map((item) => {
          return (
            <li
              onClick={() => setSelected(item)}
              key={item}
              style={selected == item ? { color: 'red' } : {}}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserMain;
