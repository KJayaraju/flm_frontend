import { useState, useRef, useEffect } from "react";
import "./CustomDropdown.css";

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder,
  name,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
     
      <div
        className="dropdown-btn"
        onClick={() => setOpen(!open)}
      >
        {value || placeholder}
      </div>

      
      {open && (
        <div className="dropdown-menu">
          <div
            className={`dropdown-item ${!value ? "active" : ""}`}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            {placeholder}
          </div>

          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-item ${
                value === option ? "active" : ""
              }`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}