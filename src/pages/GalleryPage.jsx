import Gallery from "../components/Gallery";
import PageTransition from "../components/fx/PageTransition";
import usePageTitle from "../hooks/usePageTitle";

const GalleryPage = () => {
  usePageTitle("Gallery");

  return (
    <PageTransition className="pt-20 bg-black min-h-screen">
      <Gallery headingLevel="h1" />
    </PageTransition>
  );
};

export default GalleryPage;
