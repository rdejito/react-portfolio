import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./globals.css";
import Footer from "./components/Footer";

const TABS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contacts" },
];

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("ACTIVE_TAB");
  });

  useEffect(() => {
    localStorage.setItem("ACTIVE_TAB", activeTab);
  }, [activeTab]);

  const [stacks, setStacks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("stacks.json")
      .then((response) => response.json())
      .then((data) => setStacks(data));
  }, [stacks]);

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, [projects]);

  useEffect(() => {
    fetch("contacts.json")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, [contacts]);

  return (
    <div>
      <div className="header">
        <h1>
          {`<`}Fen.{`/>`}
        </h1>

        <nav>
          <div className="header-nav">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="tab-btn active"
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      <main>
        <div>
          {activeTab === "home" && <Home />}
          {activeTab === "about" && <About stacks={stacks} />}
          {activeTab === "projects" && <Projects projects={projects} />}
          {activeTab === "contacts" && <Contacts contacts={contacts} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
