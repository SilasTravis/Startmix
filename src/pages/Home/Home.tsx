import { useTranslation } from "react-i18next";
import Hero from "../../components/home/Hero";
import CatalogSlider from "../../components/home/CatalogSlider";
import BrandSlider from "../../components/home/BrandSlider";
import ImageWithText from "../../components/common/ImageWithText";
import SectionTitle from "../../components/common/SectionTitle";
import CallToAction from "../../components/home/CallToAction";

const Home = ({ onActionModal }: { onActionModal: () => void }) => {
  const { t } = useTranslation();

  return (
    <>
      <Hero onActionModal={onActionModal} />
      <CatalogSlider />
      <BrandSlider />
      <SectionTitle title={t("future.title")} subtitle={t("future.subtitle")} />
      <ImageWithText
        title={t("sustainability.title")}
        text={t("sustainability.text")}
        imageUrl="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
        imagePosition="left"
      />
      <ImageWithText
        title={t("experience.title")}
        text={t("experience.text")}
        imageUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop"
        imagePosition="right"
      />
      <ImageWithText
        title={t("technical.title")}
        text={t("technical.text")}
        imageUrl="https://images.pexels.com/photos/7937662/pexels-photo-7937662.jpeg?auto=compress&cs=tinysrgb&w=600"
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
