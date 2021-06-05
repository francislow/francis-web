import ActionBar from '../../library/components/action_bar/ActionBar'
import Welcome from './sections/welcome/Home'
import About from './sections/about/About'
import Collab from './sections/collab/Collab'
import Works from './sections/works/Works'
import Footer from '../../library/components/footer/Footer'

function Main() {
  return (
    <div>
      <ActionBar />
      <Welcome />
      <About />
      <Collab />
      <Works />
      <Footer />
    </div>
  );
}

export default Main
