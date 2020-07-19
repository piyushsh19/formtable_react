class Application extends React.Component {
    constructor() {
    super();
  
    this.state = {
      firstName : '',
      lastName : '',
      phone :'',
      items: []
    }
    };
  
    
  
    handleFormSubmit =(e) => {
      e.preventDefault();
  
      let items = [...this.state.items];
  
      items.push({firstName: this.state.firstName, lastName: this.state.lastName,phone:this.state.phone});
  
      this.setState({
        items,
        firstName:'',
        lastName:'',
        phone: ''
      });
    };
  
    handleInputChange =(e) => {
      let input = e.target;
      let name = e.target.name;
      let value =input.value;
  
      this.setState({
        [name]: value
      })
    };
  
    render(){
    return (
      <section>
        <PhoneBookForm handleFormSubmit = {this.handleFormSubmit} 
        handleInputChange ={this.handleInputChange}
        newFirstName={this.state.firstName}
        newLastName = {this.state.lastName}
        newPhone = {this.state.phone}
         />
        <InformationTable items = {this.state.items} />
      </section>
    );
  }
  }
  
  ReactDOM.render(
    <Application />,
    document.getElementById('root')
  );
  