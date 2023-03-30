
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import Expenses from './routes/Expenses';
import Invoice from './routes/Invoices/Invoice';
import Invoices from './routes/Invoices';
import NotFound from './routes/NotFound';
import InvoicesIndex from './routes/Invoices/InvoicesIndex';
import IndexinitialPage from './routes/IndexInitialPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={<InvoicesIndex />}
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />}
        />
        <Route path="/" element={<IndexinitialPage />}>
        </Route>
      </Route>
    </Routes>

  </BrowserRouter>
)
