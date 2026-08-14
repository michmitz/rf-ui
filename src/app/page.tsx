import Image from "next/image";
import { EventHeader } from "./components/EventHeader/EventHeader";
import { RegistrationCards } from "./components/RegistrationCard/RegistrationCards";
import { BaseSettings } from "./components/SetupCard/BaseSettings";
import {
  settingsArr,
  registrationCards,
  postRegistrationCards,
  megaNavItems,
} from "./data/data";
import styles from "./page.module.scss";
import { MegaNav } from "./components/MegaNav/MegaNav";
import { appStrings } from "./appstrings";

const {
  stepHeader,
  stepLabel,
  page,
  main,
  eventContainer,
  settingsStepsContainer,
  attendeesHeader,
  stepBlock,
} = styles;

const {
  attendee,
  step1,
  baseSettings,
  step2,
  buildWorkflows,
  step3,
  designExperiences,
} = appStrings;

const StepHeader = ({ step, title }: { step: string; title: string }) => {
  return (
    <div className={stepHeader}>
      <p className={stepLabel}>{`${step}`}:</p>
      <p>{title}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className={page}>
      <main className={main}>
        <MegaNav
          header="RainFocus Summit"
          date="December 15th"
          location="Lehi, UT"
          navItems={megaNavItems}
        />

        <div className={eventContainer}>
          <EventHeader
            title="RainFocus Summit"
            date="December 15th"
            location="Lehi, Utah"
            img="Logo.png"
          />

          <section className={settingsStepsContainer}>
            <div className={attendeesHeader}>
              <Image
                src="/icons/person-portal.svg"
                width="35"
                height="35"
                alt="person-portal.svg"
              />
              <h3>{attendee}</h3>
            </div>

            <div className={stepBlock}>
              <StepHeader step={step1} title={baseSettings} />
              <BaseSettings settings={settingsArr} />
            </div>

            <div className={stepBlock}>
              <StepHeader step={step2} title={buildWorkflows} />
              <RegistrationCards cards={registrationCards} />
            </div>

            <div className={stepBlock}>
              <StepHeader step={step3} title={designExperiences} />
              <RegistrationCards cards={postRegistrationCards} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
