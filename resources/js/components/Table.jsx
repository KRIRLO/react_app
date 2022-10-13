import React, { Component } from "react";
import ReactDOM from "react-dom";

// costante de la direccion de la tabla  para pasarla por axios  y obtener los datos de la tabla projects
const url = "http://localhost:8000/api/projects/list";

export default class Table extends Component {
// por medio del modelo TableProjects y el controlador TableController se obtiene la informacion de la base de datos
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get(url).then(response => {
            this.setState({
                projects: response.data
            });
        });
    }

    render() {
      return (
          <div className="container">
              <table className="table table-bordered">
                  <thead>
                      <tr>
                          <th>title</th>
                          <th>author</th>
                          <th>description</th>
                          <th>date</th>
                          <th>director</th>
                          <th>adviser</th>
                          <th>tutor</th>
                          <th>codirector</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.projects.map((project) => (
                          <tr key={project.id}>
                              <td>{project.title}</td>
                              <td>{project.author}</td>
                              <td>{project.description}</td>
                              <td>{project.date}</td>
                              <td>{project.director}</td>
                              <td>{project.adviser}</td>
                              <td>{project.tutor}</td>
                              <td>{project.codirector}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      );
  }

    
    


}

if (document.getElementById("table")) {
    ReactDOM.render(<Table />, document.getElementById("table"));
}
