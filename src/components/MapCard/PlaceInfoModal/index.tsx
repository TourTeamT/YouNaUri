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
  const {
    setOnModal, 
    firstImage,
    title, 
    description, 
    address, 
    contentId,
    mapX,
    mapY,
  } = props;
  const [info, setInfo] = React.useState<any[]>([]);
  const { selectedPlace, setAddSelectedPlace } = useSelectedPlace();
  const onClickAdd = () => {
    setAddSelectedPlace({ 
      latitude: mapY,
      longitude: mapX,
      img: firstImage, 
      title: title,
      address: address,
      hour: 2,
      min: 0,
      category_name: '관광코스',
      contentId: contentId,
      filter: info
    });
  }

  React.useEffect(() => {
    const getContentData = async () => {
      const data = await api.plan.getDisabilityService(contentId);
      const infoData = await api.plan.getDetailCommon(contentId);
      console.log(data.response.body.items.item[0]);
      console.log(infoData);
      const filterData =data.response.body.items.item[0];
      if (filterData?.parking.length > 0) {
        setInfo(() => [...info, '전용주차구역'])
      }
      if (filterData?.wheelchair.length > 0) {
        setInfo(() => [...info, '휠체어대여'])
      }
      if (filterData?.braileblock.length > 0) {
        setInfo(() => [...info, '점자블록'])
      }
      if (filterData?.audioguide.length > 0) {
        setInfo(() => [...info, '오디오가이드'])
      }
      if (filterData?.helpdog.length > 0) {
        setInfo(() => [...info, '보조견동반'])
      }
      if (filterData?.signguide.length > 0) {
        setInfo(() => [...info, '수어안내'])
      }
      if (filterData?.videoguide.length > 0) {
        setInfo(() => [...info, '자막해설'])
      }
      if (filterData?.babysparechair.length > 0) {
        setInfo(() => [...info, '유아용의자'])
      }
      if (filterData?.lactationroom.length > 0) {
        setInfo(() => [...info, '수유실'])
      }
      if (filterData?.stroller.length > 0) {
        setInfo(() => [...info, '유모차대여'])
      }
      
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