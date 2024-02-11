function SkillGroup(props) {
    function makeSkills(skills) {
        return skills.map((s) => (
            <li key={s.id} className="list-group-item">{s.name}</li>
        ))
    }
    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="card-header">{props.title}</div>
                        <ul className="list-group list-group-flush">
                            {makeSkills(props.skills)}
                        </ul>
                </div>
            </div>
        </>
    )
}

export default SkillGroup;