import { NavItem } from "../components/MegaNav/MegaNav";
import { Card } from "../components/RegistrationCard/RegistrationCards";
import { Setting } from "../components/SetupCard/BaseSettings";

export const settingsArr: Setting[] = [
  {
    title: "General",
    subtitle: "Define Attendee types & attributes",
  },
  {
    title: "Title",
    subtitle:
      "Description that explains the value goes here. Description that explains the value goes here.",
  },
  {
    title: "Title",
    subtitle:
      "Description that explains the value goes here. Description that explains the value goes here.",
  },
];

export const registrationCards: Card[] = [
  {
    icon: "logic-arrow.svg",
    title: "Attendee Registration",
    subtitle: "Start by creating a general registration workflow",
  },
  {
    icon: "logic-arrow.svg",
    title: "Attendee Registration",
    subtitle: "Start by creating a general registration workflow",
  },
  {
    icon: "logic-arrow.svg",
    title: "Attendee Registration",
    subtitle: "Start by creating a general registration workflow",
  },
  {
    addWorkflow: true,
  },
];

export const postRegistrationCards: Card[] = [
  {
    icon: "laptop.svg",
    title: "Attendee Portal",
    subtitle:
      "Manage the portal that attendees will see after they’ve registered for your event.",
  },
];

export const megaNavItems: NavItem[] = [
  { label: "Guide" },
  {
    label: "Attendees",
    subNavItems: [
      "Attendees",
      "Attendee types",
      "Packages",
      "Reg codes",
      "Discounts",
    ],
  },
  { label: "Content" },
  { label: "Exhibitors" },
];
