import React from 'react';
import ProjectItems from './ProjectItems';
  // React Component ↓
class Projects extends React.Component {
  render () {

    let projectItems;

    if(this.props.projects) {

      projectItems = this.props.projects.map(project => {

        return (
          <ProjectItems project={project}/>
        );
      })
    }
    return (
      <div className="Projects">
      {projectItems}
      </div>
    );
    }
  }


export default Projects;
