const rootElement = document.getElementById('root')

const Aux = (props) => props.children; // Auxilliary component

const MemberCard = (props) => {
    return (
        <div class="col m3">
            <div class="card">
                <div class="card-image">
                    <img src={props.member.imageURL}/>
                </div>
                <div class="card-content">
                    <div style={{"color":"#7cb342", "fontSize":"1.2rem"}}>{props.member.name}</div>                    
                    <span>{props.member.branch} | Batch of {props.member.graduationYear}</span>                    
                </div>
                <div class="card-action">
                    {props.member.name.split(" ")[0]} interned in {props.member.internshipYear}
                </div>
            </div>
        </div>
    );
}

class MembersContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            members:null
        }
    }
    componentDidMount(){
        const self = this;
        fetch('../database/members.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(responseJson) {
                self.setState({members:responseJson});
            })
            .catch(function(err){
                console.log(err);
            })
    }
    render(){
        let body = <h2 align="center" style={{"color":"white", "margin-top":"200px"}}>Coming soon...</h2>; // FIXME: Should replace with a better loading indicator.
        if(this.state.members){
            body = Object.keys(this.state.members).map((key) => <MemberCard member={this.state.members[key]}/> );
        }
        return(
            <div class="row">
                {body}
            </div>
        )
    }
}

ReactDOM.render (<MembersContainer/>, rootElement)