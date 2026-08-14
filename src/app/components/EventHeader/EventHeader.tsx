"use client";
import Image from "next/image";
import React from "react";
import styles from "./EventHeader.module.scss";
import { appStrings } from "../../appstrings";

interface EventHeaderProps {
  title: string;
  date: string;
  location: string;
  img: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  title,
  date,
  location,
  img,
}) => {
  const handleEditEvent = () => {
    console.log("edit event clicked");
  };

  const {
    wrapper,
    header,
    details,
    imageAndTitle,
    eventSetupGuideBox,
    subheader,
  } = styles;

  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={imageAndTitle}>
          <Image src={`/${img}`} width="100" height="100" alt={`${img}`} />

          <div>
            <h1>{title}</h1>
            <p className={details}>{date}</p>
            <p className={details}>{location}</p>
          </div>
        </div>
        <button onClick={handleEditEvent}>Edit event</button>
      </div>

      <div className={eventSetupGuideBox}>
        <h2>{appStrings.eventSetupGuideHeader}</h2>
        <p className={subheader}>{appStrings.eventSetupGuideSubtitle}</p>
      </div>
    </div>
  );
};
