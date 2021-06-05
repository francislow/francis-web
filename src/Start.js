import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Main from './screens/main/Main'
import Content from './screens/content/Content'
import projects from './library/assets/catalogue/projectsData';

function Start() {
  function getFirstProjectId() {
    return Object.keys(projects)[0]
  }

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>

          {/* Content Pages */}
          <Route exact path="/main/content">
            <Redirect to={`/main/content/projects/${getFirstProjectId()}`} />
          </Route>

          <Route path="*">
            <Content />
          </Route>
        </Switch>
    </Router>
  );
}

export default Start
