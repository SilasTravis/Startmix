import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { findProductInCategory } from "../../utils/productUtils";

const ProductDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { productId, categoryId } = useParams<{
    productId: string;
    categoryId: string;
  }>();

  const { product, category } = useMemo(
    () => findProductInCategory(categoryId, productId),
    [categoryId, productId]
  );

  const currentLang = i18n.language as "en" | "ru" | "uz";

  // State for managing the currently selected image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get all images including main image and gallery
  const allImages = useMemo(() => {
    if (!product) return [];
    if (Array.isArray(product.mainImage)) {
      return [...product.mainImage];
    } else {
      return [product.mainImage, ...(product.gallery || [])];
    }
  }, [product]);

  // Get the currently selected image
  const currentImage = allImages[selectedImageIndex] || allImages[0];

  // Update the URL in the browser's address bar if it doesn't match the expected format
  useEffect(() => {
    const expectedUrl = `/category/${categoryId}/${productId}`;
    if (window.location.pathname !== expectedUrl) {
      window.history.replaceState({}, "", expectedUrl);
    }
  }, [categoryId, productId]);

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {t("product.not_found")}
          </h1>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {t("product.back_to_home")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="container mx-auto">
          <ol className="flex items-center space-x-1 md:space-x-3">
            <li className="flex items-center">
              <Link 
                to="/" 
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                {t("navbar.home")}
              </Link>
            </li>
            
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link 
                to="/category" 
                className="ml-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline md:ml-2"
              >
                {t("navbar.categories")}
              </Link>
            </li>
            
            {category && (
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link
                  to={`/category/${category.id}`}
                  className="ml-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline md:ml-2"
                >
                  {category.name[currentLang]}
                </Link>
              </li>
            )}
            
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                {product.name[currentLang]}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Gallery */}
            <div className="flex space-x-4">
              {/* Thumbnails */}
              <div className="flex flex-col space-y-2 w-20 flex-shrink-0">
                {allImages.map((img: string, index: number) => (
                  <button
                    key={index}
                    className={`relative group overflow-hidden rounded-lg border-2 transition-colors ${
                      index === selectedImageIndex
                        ? "border-blue-500"
                        : "border-transparent hover:border-gray-300"
                    }`}
                    style={{ aspectRatio: "1/1" }}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name[currentLang]} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative">
                <div
                  className="bg-gray-100 rounded-lg overflow-hidden"
                  style={{ aspectRatio: "1/1" }}
                >
                  <img
                    src={currentImage}
                    alt={`${product.name[currentLang]} - ${
                      selectedImageIndex + 1
                    }`}
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name[currentLang]}
              </h1>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {t("product.product_description")}
                </h3>
                <p className="text-gray-600">
                  {product.description[currentLang]}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {t("product.specifications")}
                </h3>
                <div className="space-y-2">
                  {Object.entries(product.characteristics || {}).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b border-gray-100 pb-2"
                      >
                        <span className="text-gray-500">{key}</span>
                        <span className="text-gray-900 font-medium">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button className="py-4 px-6 border-b-2 border-blue-500 text-blue-600 font-medium">
                {t("product.description")}
              </button>
            </nav>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {t("product.product_description")}
            </h3>
            <p className="text-gray-600">{product.description[currentLang]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
