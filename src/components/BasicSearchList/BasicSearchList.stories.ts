import BasicSearchList from "./BasicSearchList";

export default {
  title: "Components/Basic Search List",
  component: BasicSearchList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Basic = {
  args: {
    data: [
      {
        text: "Google",
        href: "https://google.com/",
      },
      {
        text: "Accordion",
        href: "/accordion",
      },
      {
        text: "Search List",
        href: "/searchList",
      },
    ],
  },
};
export const NoData = {
  args: {
    data: [],
  },
};
