const Aux = (props) => props.children; // Auxilliary component

const ProjectCard = (props) => { //"unique" attribute in props to associate each card to respective modal
    return (
        <Aux>
            <div id={props.unique} class="modal modal-fixed-footer">
                <div class="modal-content">
                    <h4>{props.project.Name}</h4>
                    <br></br>
                    <blockquote className="project_description" align="left">{props.project["Project description"]}</blockquote>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-red btn-flat">Close</a>
                </div>
            </div>
            <div class="col m4">
                <div class="card">
                    <div class="card-image">
                        {
                            props.project.imageURL ? <img src={props.project.imageURL}/> : <img src="../images/mlab/no_project_image.png"/>
                        }
                        <a class="btn-floating halfway-fab waves-effect waves-light green modal-trigger" href={'#'+props.unique}><i class="material-icons">help_outline</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title grey-text activator text-darken-4"><i class="material-icons left">more_vert</i>{props.project.Name}</span>
                    </div>
                    <div class="card-reveal">
                        <blockquote class="card-title grey-text text-darken-4">{props.project.Name}<i class="material-icons right">close</i></blockquote>
                        <p class="card-title grey-text text-darken-4">{props.project["short summary"]}</p>
                        <br></br>
                        <h5 align="left" class="grey-text text-darken-3">Mentors</h5>
                        <ul align="left" className="mentor-list">
                            {props.project.mentors.split(",").map((mentor) => <li class="card-title grey-text text-darken-3">{mentor}</li>)}
                        </ul>
                        <h5 align="left" class="grey-text text-darken-3">Interns</h5>
                        <ul align="left" className="intern-list">
                            {props.project.interns.split(",").map((intern) => <li class="card-title grey-text text-darken-3">{intern}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

class ProjectsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects:null
        }
    }
    componentDidMount(){
        const self = this;
        fetch('../database/projects_data.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(responseJson) {
                self.setState({projects:responseJson});
            })
            .catch(function(err){
                console.log(err);
            })
    }
    componentDidUpdate(){
        $('.modal').modal();
    }
    render(){
        let body = <h2 align="center" style={{"color":"white", "margin-top":"200px"}}>Coming soon...</h2>;
        if(this.state.projects){
            /*
                What's happening in this block?
                Good question, unless I figure out how to support rows with unequal column heights (to be able to stack them properly),
                I'm clubbing up projects in groups of 3, nesting that group inside a new row element, and stacking rows within a row.
            */
            const projectsOfRequiredYear = body = Object.keys(this.state.projects).filter((key) => this.state.projects[key].year == this.props.year);
            var projectsInRows = []
            for(let i = 0; i < projectsOfRequiredYear.length / 3; ++i){
                const projectRow = []
                for(let j = i * 3; j < i * 3 + 3 && j < projectsOfRequiredYear.length; ++j){
                    projectRow.push(<ProjectCard unique={projectsOfRequiredYear[j]} project={this.state.projects[projectsOfRequiredYear[j]]}/>);
                }
                projectsInRows.push(
                    <div className="row">
                        {projectRow}
                    </div>
                )
            }
        }
        return(
            <div class="row" style={{"marginBottom":"40px"}}>
                {projectsInRows}
            </div>
        )
    }
}

ReactDOM.render (<ProjectsContainer year="2019"/>, document.getElementById("projects2019"));
ReactDOM.render (<ProjectsContainer year="2018"/>, document.getElementById("projects2018"));
ReactDOM.render (<ProjectsContainer year="2017"/>, document.getElementById("projects2017"));
ReactDOM.render (<ProjectsContainer year="2016"/>, document.getElementById("projects2016"));