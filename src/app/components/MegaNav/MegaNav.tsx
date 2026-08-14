"use client";
import React from "react";
import Image from "next/image";
import styles from "./MegaNav.module.scss";
import { IconNav } from "./IconNav";

export type NavItem = { label: string; subNavItems?: string[] };

interface MegaNavProps {
  header: string;
  location: string;
  date: string;
  navItems: NavItem[];
}

export const MegaNav: React.FC<MegaNavProps> = ({
  header,
  location,
  date,
  navItems,
}) => {
  const [searchInputValue, setSearchInputValue] = React.useState<string>("");
  const [isActiveIndex, setIsActiveIndex] = React.useState<number>(0);

  const handleSetActiveIndex = (id: number) => {
    if (isActiveIndex === id) {
      return;
    }
    setIsActiveIndex(id);
  };

  const {
    wrapper,
    rightNav,
    headerLabel,
    details,
    searchInputContainer,
    searchIcon,
    searchInput,
    navItem,
    activeNav,
    navLabel,
    subNavItem,
  } = styles;

  return (
    <div className={wrapper}>
      <IconNav />

      <div className={rightNav}>
        <div>
          <p className={headerLabel}>{header}</p>

          <div className={details}>
            <p>{location}</p> • <p>{date}</p>
          </div>

          <div className={searchInputContainer}>
            <Image
              src="icons/magnifying-glass.svg"
              width="12"
              height="12"
              alt="magnifying-glass.svg"
              className={searchIcon}
            />
            <input
              type="text"
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder="Search"
              className={searchInput}
            ></input>
          </div>
        </div>

        {navItems.map((item, i) => {
          const activeIndex = isActiveIndex === i;

          return (
            <div key={item.label}>
              <button
                onClick={() => handleSetActiveIndex(i)}
                className={`${navItem} ${activeIndex && activeNav}`}
              >
                <Image
                  src={`icons/${activeIndex ? "active-nav-item.svg" : "inactive-nav-item.svg"}`}
                  width="24"
                  height="24"
                  alt={`${activeIndex ? "active-nav-item.svg" : "inactive-nav-item.svg"}`}
                />
                <p className={navLabel}>{item.label}</p>
              </button>

              {activeIndex &&
                item.subNavItems?.map((subItem) => {
                  return (
                    <div key={subItem} className={subNavItem}>
                      {subItem}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
