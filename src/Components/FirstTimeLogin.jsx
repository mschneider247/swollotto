import { useState } from 'react';
import { buildNewUser } from '../Utils/buildNewUser';

const terms = ['Swollotto cares about data ethics. Only the bare minimum amount will be kept and only at your express consent.',
              ' For example, if you\'d like updates or notifications sent. We conduct no marketing, no spamming. You can leave at any time, no guilt trips.',
              ' Swollotto will not sell your data, will not share your data, will not use your data for anything other than what you explicitly allow.',
              ' Your data can be deleted at any time.',
              ' Swollotto will do its best to provide a safe and secure environment for you to track your health goals.',
              ' In return you agree to consult with a physician before using this application. You agree to never hold this app or its creator liable for',
              ' any damages, real or imagined, that may occur as a result of using this app. Be safe, be smart and have fun!'];

export const FirstTimeLogin = (props) => {

    const [name, setName] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const acceptTermsAndSetName = () => {
        props.setLoggedIn(true);
        const newUser = buildNewUser(props.auth, name);
        props.setUser(newUser);
        props.addUserToDB(newUser);
    };

    return (
        <section>
            <h1>Welcome to Swollotto!</h1>

            { !termsAccepted &&
                <section>
                    <h3>Terms and Conditions</h3>
                    <p>
                        {terms}
                    </p>
                    <p>I {props.auth.displayName}, agree in full</p>
                    <input placeholder='Accept Terms and Conditions' type='checkbox' onChange={setTermsAccepted}/>
                </section>
            }
            
            { termsAccepted &&
                <section>
                    <h4> Great! What name do you prefer?</h4>
                    <input placeholder="What name do you prefer?" type='' onChange={(event) => {setName(event.target.value)}}/>
                    <button onClick={acceptTermsAndSetName}>Submit</button>
                </section>
                
            }
        </section>
    )
};