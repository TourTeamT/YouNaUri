import { useState, useEffect } from 'react';
import useUserSelect from 'utils/userSelectStore';
import useProgressStore from 'utils/progressStore';
import styles from './Cards.module.scss';
import axios from 'axios';
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
  const { setPartnerSelect } = useProgressStore();
  const { setPartner } = useUserSelect();

  const handleClick = (id: number) => {
    if (active.includes(id)) {
      setActive(active.filter((activeId) => activeId !== id));
      setPartner(active.filter((activeId) => activeId !== id));
    } else {
      setActive([...active, id]);
      setPartner([...active, id]);
    }
  }
  useEffect(()=> {
    if (active.length > 0) {
      setPartnerSelect(true);
    } else {
      setPartnerSelect(false);
    }
  }, [active, setPartnerSelect])

const sendDataToApi = async (activePartnerIds: number[]) => {
  try {
    const token = localStorage.getItem('access_token');
    
    if (!token) {
      throw new Error('No access token found');
    }

    const data = { type: activePartnerIds };
    const response = await axios.post('http://3.37.87.24:3000/user-user/user-type', data, {
    headers: {
    'Authorization': `Bearer ${token}`,
      },
    });
    console.log('API:', response.data);
  } catch (error) {
    console.error('오류!:', error);
  }
};


  useEffect(() => {
  sendDataToApi(active);
  }, [active]);

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
