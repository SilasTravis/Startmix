import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { Link } from "react-router";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-center justify-center min-h-[600px] overflow-hidden text-white text-center md:text-left">
      <div
        className="absolute top-0 left-0 w-2/3 h-full bg-[#0073b1] -skew-x-6 origin-top-left"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute top-0 right-0 hidden w-full h-[120%] bg-cover bg-center opacity-10 origin-top-right md:block"
          style={{ backgroundImage: "url(/images/header-shape.jpg)" }}
        ></div>
      </div>
      <div
        className="absolute top-0 w-1/2 right-0 hidden h-[90%] bg-cover bg-center opacity-100 origin-top-right md:block"
        style={{ backgroundImage: "url(/images/header.jpg)" }}
      ></div>

      <div className="relative z-10 max-w-7xl px-8 mx-auto w-full">
        <div className="flex items-center flex-col">
          <div className="w-full md:pr-8">
            <h1 className="text-4xl poppins-bold-italic lg:text-5xl italic font-bold uppercase mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg lg:text-xl mb-8 md:max-w-md lg:max-w-2xl mx-auto md:mx-0">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Link to={"/category"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: "#f0f0f0" },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  {t("hero.button1")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
