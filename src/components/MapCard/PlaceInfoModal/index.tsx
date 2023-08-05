import React from 'react';
import useSelectedPlace from 'utils/selectPlace';
import ModalFrame from 'components/Modal/ModalFrame';
import * as api from 'api';
import styles from './PlaceInfoModal.module.scss';

type Props = {
  setOnModal: (state: boolean) => void;
  firstImage: string;
  title: string;
  description: string;
  address: string;
  mapX: string;
  mapY: string;
  contentId: string
};


export default function PlaceInfoModal (props: Props) {
  const {setOnModal, firstImage, title, description, address, contentId} = props;
  const [info, setInfo] = React.useState<any>();
  const { selectedPlace, setAddSelectedPlace } = useSelectedPlace();
  const onClickAdd = () => {
    setAddSelectedPlace({ 
      image: firstImage, 
      title: title,
      address: address,
      contentId: contentId,
      parking: info?.parking.length > 0 ? true : false,
      wheelChair:info?.wheelchair.length > 0 ? true : false,
      dotBlock:info?.braileblock.length > 0 ? true : false,
      audioGuide: info?.audioguide?.length > 0 ? true : false,
      helpDog: info?.helpdog.length > 0 ? true : false,
      signGuide:info?.signguide.length > 0 ? true : false,
      videoGuide: info?.videoguide.length > 0 ? true : false,
      babySpareChair: info?.babysparechair.length > 0 ? true : false,
      lactationRoom: info?.lactationroom.length > 0 ? true : false,
      stroller: info?.stroller.length > 0 ? true : false,
    });
  }

  React.useEffect(() => {
    const getContentData = async () => {
      const data = await api.plan.getDisabilityService(contentId);
      console.log(data.response.body.items.item[0]);
      setInfo(data.response.body.items.item[0]);
      console.log(info);
    }
    getContentData();
  }, [])
  return (
    <ModalFrame setOnModal={setOnModal}>
      <div className={styles.container}>
        <img className={styles.container__image} src={firstImage}/>
        <div className={styles.container__content}>
          <div className={styles.content}>
            <div className={styles.content__title}>{title}</div>
            <div className={styles.content__address}>{address}</div>
            <div className={styles.content__description}>
              {description}
            </div>
            <div className={styles.footer}>
              <button className={styles.button} onClick={() => onClickAdd()}>
                추가하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalFrame>
  )
};