"use client";
import React from "react";
import styles from "./BaseSettings.module.scss";

export type Setting = {
  title: string;
  subtitle: string;
};

interface BaseSettingsProps {
  settings: Setting[];
}

const { wrapper, settingBox, title } = styles;

export const BaseSettings: React.FC<BaseSettingsProps> = ({
  settings,
}) => {
  return (
    <div className={wrapper}>
      {settings?.map((setting, i) => (
        <div className={settingBox} key={i}>
          <p className={title}>{setting.title}</p>
          <p>{setting.subtitle}</p>
        </div>
      ))}
    </div>
  );
};
