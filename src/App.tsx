import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Import components
import Navbar from "./components/navbar";
import Footer from "./components/common/Footer";

// Import page components
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { useState } from "react";
import ContactModal from "./components/ContactModal";

function App() {
  const [actionModal, setActionModal] = useState(false);
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar onActionModal={() => setActionModal(true)} />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={<Home onActionModal={() => setActionModal(true)} />}
              />
              <Route path="/category" element={<Category />}>
                <Route path=":categoryId" element={<Category />} />
              </Route>
              <Route
                path="/category/:categoryId/:productId"
                element={<ProductDetail />}
              />
            </Routes>
          </main>
          <Footer onActionModal={() => setActionModal(true)} />
        </div>
      </Router>
      <ContactModal open={actionModal} onClose={() => setActionModal(false)} />
    </I18nextProvider>
  );
}

export default App;
