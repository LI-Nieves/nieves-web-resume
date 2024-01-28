function LangButton(props) {
    function btnClick(props) {
        console.log(props.type);
        if (props.desc) {
            props.setLang(props);
        } else {
            props.setSpeak(props);
        }
    }
    return (
        <>
            <button 
                className="langButton" 
                aria-pressed={props.isPressed}
                onClick={()=> btnClick(props)}
            >
                {props.name}
            </button>
            <div className="space"> </div>
        </>
    )
}

export default LangButton;