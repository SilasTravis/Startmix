import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Footer = ({ onActionModal }: { onActionModal: () => void }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#212121] text-white">
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
              {t("footer.resources.title")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <Link to="/category" className="hover:underline">
                  {t("navbar.categories")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider">
              {t("footer.contact.title")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <p onClick={onActionModal} className="hover:underline cursor-pointer">
                  {t("footer.contact.contact_us")}
                </p>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="mb-4">{t("footer.address")}</p>
            <div className="flex space-x-4">
              <a href="https://t.me/StartMix0000" className="text-2xl hover:text-gray-300">
                <FaTelegramPlane />
              </a>

              <a
                href="https://www.instagram.com/startmix_uz?igsh=M2xibGNqYnRlb2U4"
                target="_blank"
                className="text-2xl hover:text-gray-300"
              >
                <FaInstagram />
              </a>

              <a 
                href="https://wa.me/qr/ZXY4VLPQVTGJE1"
                target="_blank"
                className="text-2xl hover:text-gray-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
