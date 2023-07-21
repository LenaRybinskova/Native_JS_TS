import React, {ChangeEvent, ChangeEventHandler, MouseEvent, MouseEventHandler} from "react"

export const User =()=>{
    const search=(event: MouseEvent<HTMLButtonElement>)=>{
        console.log(event.currentTarget.name)
    }

    const saveUser=()=>{
        alert("user saved")
    }
    //---------------------------------

    const onNameChanged =()=>{
        console.log("name changed")
    }

    const focusLost =()=>{
        console.log("focus lost")
    }

    const onAgeChanged=(event:ChangeEvent<HTMLInputElement>)=>{
        console.log("age changed " + event.currentTarget.value)
    }

    return (
        <div><textarea
            onChange={onNameChanged}
            onBlur={focusLost}
        >Lena</textarea>
            <input onChange={onAgeChanged}/>
            <button name="delete" tabIndex={0} onClick={search} >search</button>

        </div>
    )
}