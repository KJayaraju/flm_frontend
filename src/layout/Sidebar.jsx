import { useState } from "react";
import Modal from "../components/Modal";
import "./Sidebar.css";

export default function Sidebar({ setFilters, setPage }) {
  const [active, setActive] = useState("all");
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false); 

    if (item === "all") {
      setFilters({
        search: "",
        location: "",
        industry: "",
        sort: "name",
        order: "asc",
      });
      setPage(1);
      setModalType(null);
    } else {
      setModalType(item);
    }
  };

  const closeModal = () => setModalType(null);

  return (
    <>
      
      <div className="topbar">
         <h2 className="brand">FLM EduTech</h2>
  <button
    className="menu-btn"
    onClick={() => setIsOpen(!isOpen)}
  >
    ☰
  </button>

  
</div>

  
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

     
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>FLM EduTech</h2>

        <ul>
          <li
            className={active === "all" ? "active" : ""}
            onClick={() => handleClick("all")}
          >
            All Companies
          </li>

          <li
            className={active === "lists" ? "active" : ""}
            onClick={() => handleClick("lists")}
          >
            My Lists
          </li>

          <li
            className={active === "saved" ? "active" : ""}
            onClick={() => handleClick("saved")}
          >
            Saved Filters
          </li>

          <li
            className={active === "settings" ? "active" : ""}
            onClick={() => handleClick("settings")}
          >
            Settings
          </li>
        </ul>
      </div>

      
      {modalType === "lists" && (
        <Modal title="My Lists" onClose={closeModal}>
          <p>My panel coming soon.</p>
        </Modal>
      )}

      {modalType === "saved" && (
        <Modal title="Saved Filters" onClose={closeModal}>
          <p>Saved filters panel coming soon.</p>
        </Modal>
      )}

      {modalType === "settings" && (
        <Modal title="Settings" onClose={closeModal}>
          <p>Settings panel coming soon.</p>
        </Modal>
      )}
    </>
  );
}