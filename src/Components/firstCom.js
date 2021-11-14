import react from "react"

function comp(){
    var text = "";

    function onchangeHandler(e){
        text = e.taget.value;
    }

    return(
        <div>
            <input onChanges={onchangeHandler}/>
            <h1>{text}</h1>
        </div>
    );
}

export default comp;