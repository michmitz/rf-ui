"use client";
import React from "react";
import Image from "next/image";
import styles from "./IconNav.module.scss";

export const IconNav: React.FC = () => {

  const {
    wrapper,
    iconNav,
    iconNavTop,
  } = styles;

  return (
    <div className={wrapper}>
      <div className={iconNav}>

        <div className={iconNavTop}>
        <Image
          src="icons/rainFocus-logo.svg"
          width="32"
          height="32"
          alt="magnifying-glass.svg"
        />
        <Image
          src="Logo.png"
          width="32"
          height="32"
          alt="magnifying-glass.svg"
        />
        </div>

        <Image
          src="icons/nav-user.svg"
          width="48"
          height="48"
          alt="nav-user.svg"
        />
      </div>
    </div>
  );
};
