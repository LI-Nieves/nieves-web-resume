function LangButton(props) {
    return (
        <>
            <button 
                className="langButton" 
                aria-pressed={props.isPressed}
                onClick={()=> props.setLang(props)}
            >
                {props.name}
            </button>
            <div className="space"> </div>
        </>
    )
}

export default LangButton;