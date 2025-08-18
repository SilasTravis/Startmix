import { useTranslation } from "react-i18next";
import Hero from "../../components/home/Hero";
import CatalogSlider from "../../components/home/CatalogSlider";
import ImageWithText from "../../components/common/ImageWithText";
import SectionTitle from "../../components/common/SectionTitle";
import CallToAction from "../../components/home/CallToAction";

const Home = ({ onActionModal }: { onActionModal: () => void }) => {
  const { t } = useTranslation();

  return (
    <>
      ``
      <Hero onActionModal={onActionModal} />
      <CatalogSlider />
      {/* <BrandSlider /> */}
      <SectionTitle title={t("future.title")} subtitle={t("future.subtitle")} />
      <ImageWithText
        title={t("sustainability.title")}
        text={t("sustainability.text")}
        imageUrl="/images/offer1.jpg"
        imagePosition="left"
      />
      <ImageWithText
        title={t("experience.title")}
        text={t("experience.text")}
        imageUrl="/images/offer2.jpg"
        imagePosition="right"
      />
      <ImageWithText
        title={t("technical.title")}
        text={t("technical.text")}
        imageUrl="/images/offer3.jpg"
        imagePosition="left"
      />
      <CallToAction
        onActionModal={onActionModal}
        title={t("cta.title")}
        buttonText={t("hero.button1")}
        imageUrl="/images/original-cement.png"
      />
    </>
  );
};

export default Home;
