import "./styles.css";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../Data/data";

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("name") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices
          .filter((invoice) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoices) => (
            <NavLink
              className={({ isActive }) => isActive ? "dblock nav-red" : "dblock nav-blue"}
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