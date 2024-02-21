import React from "react";
import Accordion from "./Accordion";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const accordionData1 = [
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

const accordionData2 = [
  {
    title: "Machine Learning Basics",
    paragraph:
      "Machine learning is a field of artificial intelligence that focuses on creating algorithms and models that enable computers to learn from data. It is widely used in predictive analytics and pattern recognition.",
  },
  {
    title: "Data Science Tools",
    paragraph:
      "Data scientists use various tools such as Python, R, and Jupyter Notebooks for data analysis, visualization, and machine learning. These tools help in extracting meaningful insights from large datasets.",
  },
  {
    title: "Blockchain Technology",
    paragraph:
      "Blockchain is a decentralized and distributed ledger technology that underlies cryptocurrencies like Bitcoin. It provides a secure and transparent way of recording transactions and data.",
  },
];

export default function AccordionPage() {
  // const [accordionItems, setAccordionItems] = useState(accordionItemsTest)

  //   const addItem = () => {
  //     setAccordionItems([
  //       ...accordionItems,
  //       { title: "Titulo 3", paragraph: "Esto es un parrafo" },
  //     ]);
  //   };

  return (
    <main>
      <h1 className="font-semibold">
        <Link to="/" className="inline-block mr-3 ">
          <MdArrowBack color="black" />
        </Link>
        Accordion
      </h1>

      <section className="mt-8">
        <h2 className="font-medium" style={{ margin: "2vh 0 1vh 0" }}>
          Basic Accordion
        </h2>
        <Accordion data={accordionData1} />
      </section>

      <section className="mt-8">
        <h2 className="font-medium">Multiple open</h2>
        <Accordion
          style={{ marginTop: "2vh" }}
          allowMultipleOpen={true}
          data={accordionData2}
        />
      </section>
    </main>
  );
}
