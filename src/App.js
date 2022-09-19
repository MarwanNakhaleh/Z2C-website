import Hero from "./components/Hero"
import Header from "./components/Header"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import DontPayForInfo from "./components/DontPayForInfo"
import FlexibleBootcamps from "./components/FlexibleBootcamps";

// text for A/B testing
import { dontPayForInfo0 } from './text/DontPayForInfo';
import { flexibleBootcamps0 } from "./text/FlexibleBootcamps";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <DontPayForInfo text={dontPayForInfo0} />
      <FlexibleBootcamps text={flexibleBootcamps0} />
      <ContactUs />
      <Footer />
      </ThemeProvider>
    </>

  );
}

export default App;
