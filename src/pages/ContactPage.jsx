import Instagram from "../components/Instagram";
import Contact from "../components/Contact";
import PageTransition from "../components/fx/PageTransition";
import usePageTitle from "../hooks/usePageTitle";

const ContactPage = () => {
  usePageTitle("Contact");

  return (
    <PageTransition className="pt-20 bg-black min-h-screen">
      <Contact headingLevel="h1" />
      <Instagram />
    </PageTransition>
  );
};

export default ContactPage;
