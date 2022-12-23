type KeyButtonProps = {
    text: string;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
}

export default function KeyButton({text, handleClick, className}: KeyButtonProps) {
    return <button onClick={handleClick} className={className}>{text}</button>
}