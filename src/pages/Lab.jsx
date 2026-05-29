import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Card from "../components/Card.jsx";
import "../styles/page-css/Lab.css";

const events = [
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
  {
    date: "Jan 2023",
    label: "Duplifolder",
    description: "Duplifolder is cool",
    tags: ["VSCode", "Extension", "Developer Tools"],
    github: "https://github/ly0plx/duplifolder",
    demo: "https://codepen.io/soju22/pen/qEbdVjK",
  },
];
const tagNotes = [
  {
    name: "VSCode",
    notes: ["Is very nice to work with"],
  },
  {
    name: "Extension",
    notes: ["Needs to be maintained due to updates to IDE"],
  },
  {
    name: "Developer Tools",
    notes: ["Yum", "yup"],
  },
];

export default function LabPage() {
  const [archiveExpanded, setArchiveExpanded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Lab | LyOPix Coding</title>
        <meta
          name="description"
          content="Lab is where ideas are tested, broken, rebuilt, and sometimes abandoned."
        />
        <link rel="canonical" href="https://lyopix.com/lab" />
        <meta property="og:title" content="LyOPix Lab" />
        <meta
          property="og:description"
          content="Lab is where ideas are tested, broken, rebuilt, and sometimes abandoned."
        />
        <meta property="og:url" content="https://lyopix.com/lab" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="lab-top">
        <h1>LyOPix Sandbox Lab</h1>
        <p>
          Lab is where ideas are tested, broken, rebuilt, and sometimes
          abandoned. This page tracks experiments, prototypes, and technical
          investigations behind LyOPix projects.
        </p>
      </div>

      <div className="lab-timeline">
        <div className="timeline-line"></div>

        <div className="marquee-track">
          {[...events, ...events].map((event, index) => (
            <div className="timeline-event" key={index}>
              <span className="date">{event.date}</span>
              <span className="dot"></span>
              <span className="connector"></span>
              <span className="label">{event.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`archive ${archiveExpanded ? "expanded" : ""}`}>
        <div className="archive-content">
          <h2>Experiment Archive</h2>
          <div className="archive-card-list">
            {events.map((event, index) => (
              <div className="archive-card" key={index}>
                <div className="row">
                  <h3>{event.label}</h3>
                  <h3>{event.date}</h3>
                </div>
                <p>{event.description}</p>
                <div className="row">
                  <div className="archive-card-tags">
                    {event.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div>
                    <a href={event.github} className="button">
                      GitHub
                    </a>
                    <a href={event.demo} className="button">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!archiveExpanded && (
          <div
            className="archive-expand"
            onClick={() => setArchiveExpanded(true)}
          />
        )}
      </div>

      <div className="notes">
        <div className="notes-content">
          <h3>Notes</h3>
          <div className="notes-list">
            {tagNotes.map((tag, index) => (
              <Card
                key={index}
                title={tag.name}
                content={
                  <ul>
                    {tag.notes.map((note, noteIndex) => (
                      <li key={noteIndex}>{note}</li>
                    ))}
                  </ul>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
