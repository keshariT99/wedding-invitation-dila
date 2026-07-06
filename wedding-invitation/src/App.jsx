import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EntryGate from './components/EntryGate';
import MusicPlayer from './components/MusicPlayer';
import Petals from './components/Petals';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Story from './components/Story';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import LocationSection from './components/LocationSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!entered && <EntryGate onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Petals density={22} fixed />
          <Hero />
          <Countdown />
          <Story />
          <VideoSection />
          <Gallery />
          <EventDetails />
          <RSVP />
          <LocationSection />
          <Contact />
          <Footer />
          <MusicPlayer />
        </motion.main>
      )}
    </>
  );
}
