import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-center justify-center min-h-[700px] overflow-hidden text-white text-center md:text-left">
      <div
        className="absolute top-0 left-0 lg:w-full w-full h-full lg:-skew-x-6 bg-black/80 lg:max-w-2/3 origin-top-left"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute top-0 right-0 w-full h-[120%] bg-cover bg-center opacity-20 origin-top-right md:block"
          // style={{ backgroundImage: "url(/images/header-shape.jpg)" }}
        ></div>
      </div>
      <div
        className="absolute top-0 w-full right-0 h-full bg-cover bg-center opacity-100 origin-top-right md:block"
        style={{ backgroundImage: "url(/images/header-shape.jpg)" }}
      ></div>

      <div className="relative z-10 max-w-7xl text-center px-8 mx-auto w-full">
        <div className="flex items-start lg:pl-20 flex-col">
          <div className="lg:w-1/2 flex flex-col items-center md:pr-8">
            <img
              src="/images/logo-icon.png"
              className="h-80 scale-[1.7]"
              alt=""
            />
            <h1 className="text-lg poppins-bold-italic lg:text-lg italic font-bold uppercase mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg lg:text-xl mb-8 md:max-w-md lg:max-w-2xl mx-auto md:mx-0">
              {t("hero.subtitle")}
            </p>
            {/* <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={onActionModal}
                variant="contained"
                size="large"
                className="!text-red-700 !font-bold"
                sx={{
                  bgcolor: "white",
                  "&:hover": { bgcolor: "#f0f0f0" },
                  px: 4,
                  py: 1.5,
                }}
              >
                {t("hero.button1")}
              </Button>
            </div> */}
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
