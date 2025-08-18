import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const TELEGRAM_BOT_TOKEN = "8437382888:AAGJv_rF6AtG3XXmkgoagc2vFhLGFdg9Wtc";
const CHAT_ID = "-1002962814278";

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) {
      // Reset form when modal opens
      setFormData({ name: "", phone: "", email: "" });
      setErrors({});
      setStatus({ type: null, message: "" });

      // Add overflow hidden to body when modal is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = t("contactModal.validation_required");
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("contactModal.validation_required");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("contactModal.validation_required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contactModal.validation_email");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const text =
        `👤 *New Client Request*\n\n` +
        `**Name:** ${formData.name}\n` +
        `**Phone:** ${formData.phone}\n` +
        `**Email:** ${formData.email}`;

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setStatus({
        type: "success",
        message: t("contactModal.success_message"),
      });
      setFormData({ name: "", phone: "", email: "" });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ type: "error", message: t("contactModal.error_message") });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-h-[90vh] overflow-auto rounded-2xl shadow-xl w-full max-w-lg p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-4xl font-bold text-center mb-2">
          {t("contactModal.title")}
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-md mx-auto">
          {t("contactModal.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="https://t.me/StartMix0000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#29A9EA] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
          >
            <FaTelegramPlane />
            {t("contactModal.telegram_button")}
          </a>
          <a
            href="tel:+998 98 809 40 44"
            className="flex-1 bg-[#00A75A] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
          >
            <FaPhone />
            {t("contactModal.phone_button")}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500 mb-1"
            >
              {t("contactModal.name_label")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contactModal.name_placeholder")}
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-500 mb-1"
            >
              {t("contactModal.phone_label")}
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contactModal.phone_placeholder")}
              className={`w-full p-3 border ${
                errors.phone ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500 mb-1"
            >
              {t("contactModal.email_label")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contactModal.email_placeholder")}
              className={`w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {status.type && (
            <div
              className={`p-3 rounded-lg ${
                status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 flex items-center justify-center"
          >
            {loading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              t("contactModal.submit_button")
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
