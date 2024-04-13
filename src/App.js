import './App.css';
import FeatureComponent from './components/FeatureComponent/FeatureComponent';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import featureIcon from "./assets/landingpage-assets/Icons/HK-01.svg"
import SectionWithVideo from './components/ColoredSection/SectionWtihVideo/SectionWithVideo';
import SectionWithImage from './components/ColoredSection/SectionWithImage/SectionWithImage';
import SectionWithImageAndText from './components/ColoredSection/SectionWithImageAndText/SectionWithImageAndText';
import ProfileImage from './components/profileImage/profileImage';
import JessicaProfile from './components/Profile/JessicaProfile/JessicaProfile';
import jessicaImage from './assets/landingpage-assets/Team-funny/jessica.png';
import ContactForm from './components/ContactForm/ContactForm';
import { FormThemeProvider } from 'react-form-component'
import SecondSection from './components/SecondSection/SecondSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import MeetMyTeamSection from './components/MeetMyTeamSection/MeetMyTeamSection';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <SecondSection />
      <FeatureSection />
      <MeetMyTeamSection />
      <FormThemeProvider>
      <ContactForm />
      </FormThemeProvider>
      <Footer />
    
      {/* <SectionWithVideo />
      <SectionWithImage />
      <SectionWithImageAndText /> */}
      {/* <FeatureComponent featureTitle="Daily Task Dashboard" featureDescription="Track and filter tasks, and notify the team when complete. " featureIcon={featureIcon}/> */}
    </div>
  );
}

export default App;
