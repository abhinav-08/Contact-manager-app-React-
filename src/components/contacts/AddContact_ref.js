import React,{Component} from 'react'

class AddContact extends Component{
  constructor(props){
  	super(props);
  	this.nameInput=React.createRef();
  	this.emailInput=React.createRef();
  	this.phoneInput=React.createRef();
  }

  onSubmit=(e)=>{
  	e.preventDefault();
  	const contact={

  		name:this.nameInput.current.value,
  		phone:this.phoneInput.current.value,
  		email:this.emailInput.current.value,
  	}
  }



  static defaultProps={
  	name:'fred smith',
  	email:'fred@yahoo.com',
  	phone:'777-777-7777'
  }

	render(){
		const {name,email,phone}=this.props;
		return(
			<div className="card mb-3">
				<div className="card-header">Add Contact
				</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>

						<div className="form-group">
							<label htmlFor='name'>Name</label><br/>
							<input type="text" 
							name="name" 
							className='form-comtrol form-control-lg'
							placeholder='Enter name' 
							defaultValue={name}
							ref={this.nameInput}
							 />
							
						</div>
						<br/>
						<div className="form-group">
							<label htmlFor='email'>Email</label><br/>
							<input type="email" 
							name='email' 
							className='form-comtrol form-control-lg' 
							placeholder='Enter Email' 
							defaultValue={email}
							ref={this.emailInput}
							 />
						</div>
						<br/>
						<div className="form-group">
							<label htmlFor='tel'>Phone Number</label><br/>
							<input type="tel" 
							name='phone' 
							className='form-comtrol form-control-lg' 
							placeholder='Enter Phone Number' 
							defaultValue={phone}
							ref={this.phoneInput}
							/>
						</div>

					</form>
					<br/>
					<input type="submit" value='Add Contact' className='btn btn-block btn-danger' />
				</div>

				
			</div>
			)
	}
}

export default AddContact;