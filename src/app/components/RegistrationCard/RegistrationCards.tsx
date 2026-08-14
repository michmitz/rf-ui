"use client";
import React from "react";
import Image from "next/image";
import styles from "./RegistrationCards.module.scss";
import { appStrings } from "@/app/appstrings";

export type Card = {
  title?: string;
  subtitle?: string;
  icon?: string;
  addWorkflow?: boolean;
};

interface RegistrationCardsProps {
  cards: Card[];
}

const { cardContainer, wrapper, addWorkflow, iconTitleBox, title } = styles;
const { addRegistrationWorkflow } = appStrings;

export const RegistrationCards: React.FC<RegistrationCardsProps> = ({
  cards,
}) => {
  return (
    <div className={wrapper}>
      {cards.map((card, i) => (
        <div className={cardContainer} key={i}>
          {card.addWorkflow ? (
            <div className={addWorkflow}>
              <Image
                src="icons/add-workflow.svg"
                alt="add-workflow-card"
                width="24"
                height="24"
              />
              <p>{addRegistrationWorkflow}</p>
            </div>
          ) : (
            <div>
              <div className={iconTitleBox}>
                {card.icon && (
                  <Image
                    src={`icons/${card.icon}`}
                    alt={`${card.icon}`}
                    width="24"
                    height="24"
                  />
                )}
                <p className={title}>{card.title}</p>
              </div>

              <p>{card.subtitle}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
