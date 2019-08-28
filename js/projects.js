const Aux = (props) => props.children; // Auxilliary component

const ProjectCard = (props) => {    
    return (
        <Aux>
            <div id={props.unique} class="modal">
                <div class="modal-content">
                    <h4>{props.project.name}</h4>
                    <p>{props.project.description}</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="ui card">
                    <div class="ui image">
                        <img src={props.project.imageURL} class="visible content"/>                    
                    </div>
                    <div class="content">
                        <a class="header">{props.project.name}</a>                        
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
        let body = <p>Loading</p>; 
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

ReactDOM.render (<ProjectsContainer/>, document.getElementById("projects2018"));
ReactDOM.render (<h2>2018</h2>, document.getElementById("projects2019"));