import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { categories } from "../../config-data/categories";
import { FiSearch, FiChevronRight } from "react-icons/fi";

const CategoryPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const activeCategory = useMemo(
    () =>
      categories.find((c) => c.id === (Number(categoryId) || categories[0].id)),
    [categoryId]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryId]);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return [];
    return activeCategory.products.filter((p) =>
      p.name[i18n.language as keyof typeof p.name]
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm, i18n.language]);

  if (!activeCategory) {
    return <div className="text-center py-10">{t("category.not_found")}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 flex-shrink-0 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {t("catalog.title")}
          </h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/category/${cat.id}`}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    activeCategory.id === cat.id
                      ? "bg-red-50 shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:text-[#003369]"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {/* Placeholder for icon */}
                    <span className="w-8 h-8 text-red-500">{cat.icon}</span>
                    <span className="font-medium">
                      {cat.name[i18n.language as keyof typeof cat.name]}
                    </span>
                  </div>
                  <FiChevronRight className="w-5 h-5" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {
              activeCategory.name[
                i18n.language as keyof typeof activeCategory.name
              ]
            }
          </h1>

          {/* Search and Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 z-30">
            <div className="relative">
              <input
                type="text"
                placeholder={`${
                  activeCategory.name[
                    i18n.language as keyof typeof activeCategory.name
                  ]
                }`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003369] focus:border-transparent transition"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  navigate(`/category/${activeCategory.id}/${product.id}`)
                }
                className="bg-white rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.mainImage}
                    alt={product.name.en}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 truncate mb-1">
                    {product.name[i18n.language as keyof typeof product.name]}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {
                      product.description[
                        i18n.language as keyof typeof product.description
                      ]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">{t("category.no_products")}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
