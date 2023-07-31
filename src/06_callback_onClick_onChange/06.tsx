import React, {ChangeEvent, MouseEvent} from 'react'

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        let n = event.currentTarget.value
        alert('Delete')
    }

    const saveUser = () => {
        alert('user saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLost = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed ' + event.currentTarget.value)
    }


    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLost}>Dimych</textarea>
            <input onChange={onAgeChanged}/>
            <button name={'delete'} tabIndex={1} onClick={deleteUser}>delete</button>
            <button name={'save'} tabIndex={2} onClick={saveUser}>save</button>
        </div>
    )
}

