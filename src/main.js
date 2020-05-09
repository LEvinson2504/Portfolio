import React from "react";

const details = [
    {
      title: "Python",
      url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e-cLqqzHzMJcoluYeSXkcAHaHa%26pid%3DApi&f=1",
      level: "Intermediate",
    },
    {
      title: "Javascript",
      url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F1200px-Unofficial_JavaScript_logo_2.svg.png&f=1&nofb=1",
      level: "Intermediate",
    } 
];

function Card({ title, url, level}) {
  let divStyle = {
    textAlign: "center",
    padding: "5px"   ,
    backgroundImage: "url(" + url +")",
    backgroundSize: "inherit",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  return (
    <>
      { details.map( item => (
        <div className="card" style={divStyle}>
          <h1> {item.title} </h1>
          <p className="skill"> {item.level} </p>
          <img src={item.url} alt=""/>
      </div>
      ))}
    </>
  );
}

export default function Main() {
  return (
    <>
      <div className="container main">
        {/* create a card component */}
        <Card {...details} />
      </div>
    </>
  );
}
