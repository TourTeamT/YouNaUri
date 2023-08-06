import React from "react";
import useSelectedPlace from "utils/store/selectPlaceStore";
import {ReactComponent as Delete} from 'assets/svg/SelectPlace/delete_icon.svg';
import {ReactComponent as Parking} from 'assets/svg/SelectPlace/parking.svg';
import {ReactComponent as AudioGuide} from 'assets/svg/SelectPlace/audioGuide.svg';
import {ReactComponent as BabySpareChair} from 'assets/svg/SelectPlace/babySpareChair.svg';
import {ReactComponent as DotBlock} from 'assets/svg/SelectPlace/dotBlock.svg';
import {ReactComponent as HelpDog} from 'assets/svg/SelectPlace/helpDog.svg';
import {ReactComponent as LactationRoom} from 'assets/svg/SelectPlace/lactationRoom.svg';
import {ReactComponent as SignGuide} from 'assets/svg/SelectPlace/signGuide.svg';
import {ReactComponent as Stroller} from 'assets/svg/SelectPlace/stroller.svg';
import {ReactComponent as VideoGuide} from 'assets/svg/SelectPlace/videoGuide.svg';
import {ReactComponent as WheelChair} from 'assets/svg/SelectPlace/wheelChair.svg';
import styles from './PlaceCard.module.scss';

type PlaceCardProps = {
  image: string | undefined,
  title: string | undefined,
  address: string | undefined,
  contentId: string | undefined,
  parking: boolean;
  wheelChair: boolean;
  dotBlock: boolean;
  audioGuide: boolean;
  helpDog: boolean;
  signGuide: boolean;
  videoGuide: boolean;
  babySpareChair: boolean;
  lactationRoom: boolean;
  stroller: boolean;
  index: number,
}

export default function PlaceCard(props: PlaceCardProps) {
  const { 
    image, 
    title, 
    address, 
    contentId,
    parking,
    wheelChair,
    dotBlock,
    audioGuide,
    helpDog,
    signGuide,
    videoGuide,
    babySpareChair,
    lactationRoom,
    stroller,
    index,
  } = props;
  const { setRemoveSelectedPlace } = useSelectedPlace();

  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt='썸네일' />
      <div className={styles.card__info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.address}>{address}</div>
        <div className={styles.info}>
          { parking &&  <Parking className={styles.info__tag} />}
          { wheelChair &&  <WheelChair className={styles.info__tag} />}
          { dotBlock &&  <DotBlock className={styles.info__tag} />}
          { audioGuide &&  <AudioGuide className={styles.info__tag} />}
          { helpDog &&  <HelpDog className={styles.info__tag} />}
          { signGuide &&  <SignGuide className={styles.info__tag} />}
          { videoGuide &&  <VideoGuide className={styles.info__tag} />}
          { babySpareChair &&  <BabySpareChair className={styles.info__tag} />}
          { lactationRoom &&  <LactationRoom className={styles.info__tag} />}
          { stroller &&  <Stroller className={styles.info__tag} />}
        </div>
      </div>
      <div className={styles.card__delete} onClick={() => setRemoveSelectedPlace(index)}>
        <Delete  />
      </div>
    </div>
  )
}