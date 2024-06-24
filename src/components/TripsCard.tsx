export default function TripsCard(props: any) {
    return (
            <div id="TripsCard">
                <img src={props.src} alt={props.alt} />

                <h3>{props.destination}</h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores vero tempora. Optio minus laborum ducimus. Temporibus, quos?
                    Molestias illum earum eius laborum corporis sequi velit nulla nesciunt, quidem consectetur?
                </p>
            </div>
    )
}