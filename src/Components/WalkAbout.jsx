// React component for WalkAbout tab
// Needs a button to add steps for today
// Needs a button to add steps for yesterday
// Graph to show step count over time
// Daily step goal
// Needs to connect to firebase to get and store data
import { getFirestore } from "firebase/firestore";
const firestore = getFirestore();

export const WalkAbout = () => {
    return (
        <section>
            <h4>WalkAbout</h4>
            <button>Add Step Count</button>
        </section>
    )
}