import "./styles.css";
import { NavLink } from "react-router-dom";
import {  Outlet } from "react-router-dom";
import { getInvoices } from "../../Data/data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoices) => (
          <NavLink
            className={({isActive})=> isActive ? "dblock nav-red" : "dblock nav-blue"}
            to={`/invoices/${invoices.number}`}
            key={invoices.number}
          >
            {invoices.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}