
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import Expenses from './routes/Expenses/expenses';
import Invoices from './routes/Invoices/invoices';
import NotFound from './routes/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="*" element={<NotFound />}
        />
      </Route>
    </Routes>

  </BrowserRouter>
)
