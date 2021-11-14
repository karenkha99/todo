import react from "react"

function Comp(){
    var text = "";

    function onchangeHandler(e){
        text = e.taget.value;
    }

    return(
        <div>
            <input value="text" onChanges={onchangeHandler}/>
            <h1>{text}</h1>
        </div>
    );
}

export default Comp;