import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

import {GConfig} from '../AuthConfig/GConfig';

export class Google {
  constructor() {}
  async GoogleLogin() {
    // Get the users ID token
    try {
      const {idToken} = await GoogleSignin.signIn();
      // console.log(idToken);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
      this.props.navigation.navigate('Login');
    }
  }
}
