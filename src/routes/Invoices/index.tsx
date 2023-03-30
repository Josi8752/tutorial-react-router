import { Link, Outlet } from "react-router-dom";
import { getInvoice, getInvoices } from "../../Data/data";

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
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoices.number}`}
            key={invoices.number}
          >
            {invoices.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}