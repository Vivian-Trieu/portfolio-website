import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import AllProjectsPage from "./components/AllProjectsPage";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <AlertProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <LandingSection />
                <ProjectsSection />
                <ContactMeSection />
                <Footer />
                <Alert />
              </main>
            }
          />

          <Route
            path="/all-projects"
            element={<AllProjectsPage />}
          />
        </Routes>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
