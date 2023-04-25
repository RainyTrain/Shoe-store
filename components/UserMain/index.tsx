import { useEffect, useState } from 'react';

const UserMain = () => {
  const [isSelected, setSelected] = useState<number>(0);
  const values = ['Cart', 'History'];

  return (
    <>
      <ul>
        {values.map((item, index) => {
          return (
            <li
              onClick={() => setSelected(index)}
              key={index}
              style={isSelected == index ? { color: 'red' } : {}}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserMain;
