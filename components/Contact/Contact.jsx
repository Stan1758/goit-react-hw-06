import React from "react";
import s from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <span className={s.name}>
          <RiContactsLine className={s.icon} />
          {name}
        </span>
        <span className={s.number}>
          <BsTelephone className={s.icon} />
          {number}
        </span>
      </div>
      <button
        type="button"
        className={s.deleteButton}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
