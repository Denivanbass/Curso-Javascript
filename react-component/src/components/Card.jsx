
function Card (src, title, description, alt) {
    return (
    <div>
        <img src={src} alt={alt} />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    )
}
export default Card