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

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />}>
                <Route path=":categoryId" element={<Category />} />
              </Route>
              <Route
                path="/category/:categoryId/:productId"
                element={<ProductDetail />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
