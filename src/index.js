import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

class PhoneBookForm extends React.Component {
  render() {
  return (
    <form onSubmit={this.props.handleFormSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='firstName' 
        type='text'
        value = {this.props.newFirstName}
        onChange = {this.props.handleInputChange}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='lastName' 
        type='text' 
        value = {this.props.newLastName}
        onChange = {this.props.handleInputChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='phone' 
        type='text'
        value = {this.props.newPhone}
        onChange = {this.props.handleInputChange}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User'
      />
    </form>
  )
  }
}

class InformationTable extends React.Component {

  render(){
    const items = this.props.items;
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {items.map(item => {
          return(
            <tr>
            <td style={style.tableCell}>{item.firstName}</td>
            <td style={style.tableCell}>{item.lastName}</td>
            <td style={style.tableCell}>{item.phone}</td>
            </tr>
          )
        })}
      </thead> 
    </table>
  );
  }
}

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