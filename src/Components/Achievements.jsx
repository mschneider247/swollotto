
export const Achievements = (props) => {

    const { user } = props;

    return (
        <section>
            <h3>Hey {user.name}!</h3>
            <h3>level: {user.level}</h3>
            <button
                onClick={() => {console.log("You have Achieved!")}}
            >BOOM SHAKA LAKA</button>
        </section>
    )
}