import BasicSearchList from "../../components/BasicSearchList/BasicSearchList";

const dummyData = [
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
];

export default function SearchListPage() {
  return (
    <main>
      <h1>SearchList Page</h1>
      <BasicSearchList data={dummyData} />
    </main>
  );
}
