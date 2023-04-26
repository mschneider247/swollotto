import { useState } from 'react';

const terms = ['Terms and Conditions: Swollotto doesn\'t care about your personal data. Only the bare minimum will be kept and only at your express consent.',
              ' For example, if you\'d like updates or notifications sent. Otherwise no marketing, no spamming, can leave at any time, no guilt trips.',
              ' Swollotto will not sell your data, will not share your data, will not use your data for anything other than what you explicitly allow.',
              ' Your data can be deleted or downloaded at any time.',
              ' Swollotto will do its best to provide a safe and secure environment for you to track your fitness goals.',
              ' In return you agree to consult with a physician before using this application. You agree to never hold this app or its creator liable for',
              ' any damages, real or imagined, that may occur as a result of using this app. Be safe, be smart and have fun!'];

export const FirstTimeLogin = (props) => {

    return (
        <section>
            <h1>Welcome to Swollotto!</h1>
            <input placeholder="What name do you prefer?" />
            <p>
                {terms}
            </p>
            <p>I {props.props.displayName}, agree in full</p>
            <input placeholder='Accept Terms and Conditions' type='checkbox' />
        </section>
    )
};