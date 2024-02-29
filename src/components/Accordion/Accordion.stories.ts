import Accordion from "./Accordion";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

const sampleData = [
  {
    title: "React.js Basics",
    paragraph:
      "React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.",
  },
  {
    title: "Node.js Server Setup",
    paragraph:
      "Node.js is a runtime that allows server-side JavaScript execution. Setting up a Node.js server involves installing dependencies, configuring routes, and handling HTTP requests.",
  },
  {
    title: "RESTful API Design",
    paragraph:
      "Designing RESTful APIs involves creating a set of conventions for structuring endpoints and using HTTP methods. It helps in building scalable and maintainable web services.",
  },
];

export const Basic = {
  args: {
    accordionData: sampleData,
    allowMultipleOpen: false,
  },
} satisfies Meta<typeof Accordion>;

export const MultipleOpen = {
  args: {
    accordionData: sampleData,
    allowMultipleOpen: true,
  },
} satisfies Meta<typeof Accordion>;

export const DefaultOpenIndex = {
  args: {
    accordionData: sampleData,
    allowMultipleOpen: true,
    defaultOpenIndex: 1,
  },
} satisfies Meta<typeof Accordion>;
