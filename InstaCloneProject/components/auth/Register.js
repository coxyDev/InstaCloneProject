import React, { useState } from 'react'
import {
    View, 
    Button, 
    TextInput,
} from 'react-native'

//Original tutorial create a Component with constructor.
//Changed to functional component
const Register = () => {
    const [name, setName] = useState(''),
    const [email, setEmail] = useState(''),
    const [password, setPassword] = useState(''),
    const [signUp, setSignUp] = useState(false),
    const onSignUp = () => {
        setSignUp(true)
    }

    return(
        <View>
            <TextInput 
                placeholder='name'
                onChangeText={(name) => setName(name)}
            />
            <TextInput 
                placeholder='email'
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput 
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <Button 
                onPress={onSignUp}
                title='Sign Up'                
            />
       </View>
    );
};



/*export class Register extends Component {   
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }

  render() {
    return (
        <View>
            <TextInput
                placeholder='name'
                onChangeText={(name) => this.setState({name})}
            />
        </View>
      
    )
  }
}*/

export default Register