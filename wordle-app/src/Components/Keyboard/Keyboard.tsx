type KeyboardProps = {
    children: React.ReactNode
}

export default function Keyboard({children}:KeyboardProps){
    return (<div className = "keyboard">
      {children}
    </div>)
}



