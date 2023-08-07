import { useState, useEffect } from 'react';
import useUserSelect from 'utils/userSelectStore';
import useProgressStore from 'utils/progressStore';
import styles from './Cards.module.scss';
import bilndness from 'assets/svg/Partner/bilndness.svg';
import deafness from 'assets/svg/Partner/deafness.svg';
import elderly from 'assets/svg/Partner/elderly.svg';
import infant from 'assets/svg/Partner/infant.svg';
import physical from 'assets/svg/Partner/physical.svg';

interface Kind {
  id: number;
  name: string;
};

interface Props {
  partnerData: Kind[];
};

interface IClassname {
  [key: string]: boolean;
};

const classNames = (classes: IClassname) => 
  Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');

const Cards: React.FC<Props> = ({ partnerData }) => {
  const [active, setActive] = useState<number[]>([]);
  console.log(partnerData);
  const { setPartnerSelect } = useProgressStore();
  const { setPartner } = useUserSelect();

  const handleClick = (id: number) => {
    if (active.includes(id)) {
      setActive(active.filter((activeId) => activeId !== id));
      setPartner(active.filter((activeId) => activeId !== id));
      //id가 배열에 들어 있으면 필터링해서 안들어있는 애들로 배열을 다시 만듬
    } else {
      setActive([...active, id]);
      setPartner([...active, id]);
      //id가 배열에 없다면 그냥 배열에 넣기 
    }
  }
  useEffect(()=> {
    if (active.length > 0) {
      setPartnerSelect(true);
    } else {
      setPartnerSelect(false);
    }
  }, [active])

  return (
    <div>
      <div className={styles.container}>
        {
          partnerData.map((data,index) => (
            <div className={classNames({
            [styles['card']]: true,
            [styles['card__active']]: active.includes(data.id),
            })} onClick={() => handleClick(data.id)}>
              <div className={styles['card__image']}>
              {index === 0 && <img src={physical} alt="icon" />}
              {index === 1 && <img src={bilndness} alt="icon" />}
              {index === 2 && <img src={deafness} alt="icon" />}
              {index === 3 && <img src={infant} alt="icon" />}
              {index === 4 && <img src={elderly} alt="icon" />}
              </div>
              <div key={data.id} className={styles['card__title']}>{data.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
