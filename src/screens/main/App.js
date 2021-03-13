import ActionBar from '../../library/components/action_bar/ActionBar'
import Welcome from './sections/welcome/Home'
import About from './sections/about/About'
import Works from './sections/works/Works'

function App() {
  return (
    <div>
      <ActionBar />
      <Welcome />
      <About />
      <Works />
    </div>
  );
}

export default App
