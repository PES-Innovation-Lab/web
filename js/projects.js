const Aux = (props) => props.children; // Auxilliary component

const ProjectCard = (props) => {
    return (
        <Aux>
            <div id={props.unique} class="modal modal-fixed-footer">
                <div class="modal-content">
                    <h4>{props.project.name}</h4>
                    <blockquote align="left">{props.project.description}</blockquote>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-red btn-flat">Close</a>
                </div>
            </div>
            <div class="col m4 item">
                <div class="card">
                    <div class="card-image">
                        <img src={props.project.imageURL}/>                    
                        <a class="btn-floating halfway-fab waves-effect waves-light green modal-trigger" href={'#'+props.unique}><div class="material-icons">?</div></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title grey-text activator text-darken-4">{props.project.name}<i class="material-icons right">more_vert</i></span>                        
                    </div>
                    <div class="card-reveal">
                        <blockquote class="card-title grey-text text-darken-4">{props.project.name}<i class="material-icons right">close</i></blockquote>
                        <br></br>
                        <h5 align="left" class="grey-text text-darken-3">Mentors</h5>
                        <ul align="left" className="mentor-list">                            
                            {props.project.mentors.map((mentor) => <li>{mentor}</li>)}                            
                        </ul>
                        <h5 align="left" class="grey-text text-darken-3">Interns</h5>
                        <ul align="left" className="intern-list">                            
                            {props.project.interns.map((intern) => <li>{intern}</li>)}                            
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
        fetch('../database/projects.json')
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
            body = Object.keys(this.state.projects).map((key) => <ProjectCard unique={key} project={this.state.projects[key]}/> );            
        }
        return(
            <div class="row">
                {body}
            </div>            
        )        
    }
}

ReactDOM.render (<ProjectsContainer/>, document.getElementById("projects2019"));
ReactDOM.render (<ProjectsContainer/>, document.getElementById("projects2018"));