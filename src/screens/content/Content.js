import React, {useEffect, useState} from 'react'
import {
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import './content.css'
import ContentActionBar from '../../library/components/action_bar/ContentActionBar';
import Footer from '../../library/components/footer/Footer'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function Content() {
  // let { project_id } = useParams();
  let location = useLocation();
  let [currentProjectId, setCurrentProjectId] = useState();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <ContentActionBar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <div>
            <div class="content_wrapper">
              <LeftPanel activeProjectId={currentProjectId}/>

                <Switch location={location}>
                  <Route path="/main/content/projects/:projectId" children={<RightPanel setCurrentProjectId={setCurrentProjectId}/>} />
                </Switch>
            </div>
            <Footer />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}
