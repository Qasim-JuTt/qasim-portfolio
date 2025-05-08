import "./App.css";
import Navbar from "./pages/Header";
import Hero from "./pages/HeroSection";
import Overview from "./pages/Overview";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import MyProjects from "./pages/Myprojects";
import Testimonials from "./pages/Testimonial";
import ContactForm from "./pages/Contact";
import Footer from "./pages/Footer";
import { ThemeProvider } from "./context/ColorTheme";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <Overview />
        <WorkExperience />
        <Skills />
        <MyProjects />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
