import React from "react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#003369] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 bg-white px-2">
              <img src="/logo.png" alt="" />
            </h2>

            {/* Language selector can be added here */}
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider">
              {t("footer.organizations.title")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.organizations.gypsum")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.organizations.insulation")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.organizations.ceiling")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider">
              {t("footer.resources.title")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.resources.all_products")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.resources.download_center")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider">
              {t("footer.contact.title")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.contact.contact_us")}
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  {t("footer.contact.social")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="mb-4">{t("footer.address")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300">
                <FaTelegramPlane />
              </a>

              <a
                href="https://www.instagram.com/startmix_uz?igsh=M2xibGNqYnRlb2U4"
                target="_blank"
                className="text-2xl hover:text-gray-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
