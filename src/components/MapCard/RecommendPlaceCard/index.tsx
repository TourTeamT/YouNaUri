import React from "react";
import * as api from 'api';
import ModalFrame from "components/Modal/ModalFrame";
import styles from './RecommendPlaceCard.module.scss';
import PlaceInfoModal from "../PlaceInfoModal";

type RecommendPlaceCardProps = {
  contentId: string
  title: string
  firstImage: string
  mapX: string,
  mapY: string,
  contentTypeId: string,
  address: string,
}

export default function RecommendPlaceCard(props: RecommendPlaceCardProps) {
  const {
    contentId,
    title,
    firstImage,
    mapX,
    mapY,
    address,
  } = props;
  const [modalInfo, setModalInfo] = React.useState<any>();
  const [isModal, setIsModal] = React.useState(false);

  const onClickCard = async () => {
    const data = await api.plan.getPlaceInfo(contentId);
    setModalInfo(data.response?.body?.items?.item[0]);
    console.log(data.response?.body?.items?.item[0]);
    console.log(modalInfo);
    setIsModal(true);
  }
  const imageStyle: React.CSSProperties = {
    backgroundImage: firstImage ? `url(${firstImage})` : 'none',
    filter: firstImage ? 'none' : 'blur(200px)',
  };
  return (
    <>
      <div className={styles.card} onClick={() => onClickCard()} key={contentId}>
        { firstImage ? <img className={styles.card__image} src={firstImage} alt="썸네일" style={imageStyle} /> : <div className={styles.card__blur}></div> }
        <div className={styles.card__title}>{title}</div>
      </div>
      {isModal && <PlaceInfoModal 
        setOnModal={(bool) => setIsModal(bool)}
        firstImage={firstImage}
        contentId={contentId}
        title={title}
        mapX={mapX}
        mapY={mapY}
        description={modalInfo?.overview ? modalInfo.overview : 'null'}
        address={address}
      />}       
    </>
  )
}