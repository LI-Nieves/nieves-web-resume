function LangButton(props) {
    return (
        <>
            <button className="buttonSpace" onClick={() => props.setLang(props)}>
                {props.name}
            </button>
            <div className="space"> </div>
        </>
    )

}

export default LangButton;