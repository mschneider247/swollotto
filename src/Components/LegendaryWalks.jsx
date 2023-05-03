// React component for LegendaryWalks tab
// Needs a button to add steps
// Graph to show step count over time
// Daily step goal
// Needs to connect to firebase to get and store data

export const LegendaryWalks = () => {
    return (
        <section>
            <h4>LegendaryWalks</h4>
            <button
                onClick={() => {console.log("Step step step")}}
            >Add Step Count</button>
        </section>
    )
}