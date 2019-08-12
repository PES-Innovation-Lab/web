const rootElement = document.getElementById('root')

const Aux = (props) => props.children; // Auxilliary component

const MemberCard = (props) => {
    return (
        <div class="ui raised card">
            <div class="image">
                <img src={props.member.imageURL}/>
            </div>
            <div class="content">
                <div class="ui header green">{props.member.name}</div>
                <div class="meta">
                    <span class="date">{props.member.branch} | {props.member.graduationYear}</span>
                </div>
            </div>
            <div class="extra content">
                {props.member.name} interned in {props.member.internshipYear}
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
        let body = <p>Loading</p>; // FIXME: Should replace with a better loading indicator.
        if(this.state.members){
            body = Object.keys(this.state.members).map((key) => <MemberCard member={this.state.members[key]}/> );
        }
        return(
            <div class="ui three stackable cards">
                {body}
            </div>
        )
    }
}

ReactDOM.render (<MembersContainer/>, rootElement)