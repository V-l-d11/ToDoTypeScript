import React ,{useState , useRef} from 'react';


interface TodoFormProps{
    onAdd(title:string):void
}


export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {

   // const [title, setTitle]= useState<string>('')
    
    const ref = useRef<HTMLInputElement>(null);
    //const changeHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //    setTitle(event.target.value)
    //}

    const keypressHandler = (event:React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            console.log(ref.current!.value)
             ref.current!.value= ''
      //      console.log(title)
      //      setTitle('')
       }    
    }

    return(
       
<div className="input-field">
            <input
            // onChange={changeHadler}
              //  value={title} type="text" id="title"
                ref={ref}
               onKeyPress={keypressHandler}
            />
            <label htmlFor="title" className="acrive px2">
                Введите название дела
            </label>

        </div>
    )
    }