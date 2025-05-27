export default function SpecialsCard({special}) {
    return (
        <div className="specials-card">
            <img src={special.image} alt={special.title} style={{maxWidth:"50%"}}/>
            <h3>{special.title}</h3>
            <p>{special.description}</p>
            <p className="price">${special.price}</p>
        </div>
    );
}