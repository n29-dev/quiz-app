export default function Checkox({className, id,htmlfor ,label}) {
    console.log(className)
    return (
        <label htmlFor={htmlfor} className={className}>
            <input type="checkbox" id={id}/>
            <span>{" " + label}</span>
        </label>
    );
}