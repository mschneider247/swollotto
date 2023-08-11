
export const Achievements = (props) => {

    const { user } = props;

    return (
        <section>
            <h3>Hey {user.name}!</h3>
            <h3>level: {user.level}</h3>
        </section>
    )
}