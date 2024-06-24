import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import rj from "../assets/rio-de-janeiro.jpg";
import londres from "../assets/londres.jpg";
import india from "../assets/india.jpg";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function InfoTravel() {
    const query = useQuery();
    const location = query.get('location');

    return (
        <div id="infoTravel">
            <NavBar />
            {location === 'rj' && (
                <form className="infoContainer">
                    <PageTitle title="Rio de Janeiro, Brasil" />

                    <h1> Rio de Janeiro, Brasil</h1>
                    <div>
                        <img className="cardPhoto" src={rj} alt="Foto do Rio de Janeiro, Brasil" />
                    </div>
                    <div className="cardText">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores vero tempora. Optio minus laborum ducimus. Temporibus, quos?
                            Molestias illum earum eius laborum corporis sequi velit nulla nesciunt, quidem consectetur?
                        </p>
                    </div>
                    <div className="todoList">
                        <h4>Coisas a fazer no Rio de Janeiro:</h4>
                        <input type="text" placeholder="Adicionar nova atividade" />
                        <p><input type="checkbox" /> Visitar o Cristo Redentor</p>
                        <p><input type="checkbox" /> Visitar o Pão de Açúcar</p>
                        <p><input type="checkbox" /> Visitar Copacabana</p>
                    </div>

                </form>
            )}
            {location === 'londres' && (
                <form className="infoContainer">
                    <PageTitle title="Londres, Reino Unido" />

                    <h1> Londres, Reino Unido</h1>
                    <div>
                        <img className="cardPhoto" src={londres} alt="Foto do Londres, Reino Unido" />
                    </div>
                    <div className="cardText">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores vero tempora. Optio minus laborum ducimus. Temporibus, quos?
                            Molestias illum earum eius laborum corporis sequi velit nulla nesciunt, quidem consectetur?
                        </p>
                    </div>
                    <div>
                        <h4>Coisas a fazer em Londres:</h4>
                        <input type="text" placeholder="Adicionar nova atividade" />
                        <p><input type="checkbox" /> Visitar o Big Ben</p>
                        <p><input type="checkbox" /> Andar no London Eye</p>
                        <p><input type="checkbox" /> Posar como os Beatles</p>
                    </div>

                </form>
            )}
            {location === 'india' && (
                <form className="infoContainer">
                    <PageTitle title="Agra, India" />

                    <h1> Agra, India</h1>
                    <div>
                        <img className="cardPhoto" src={india} alt="Foto do Agra, India" />
                    </div>
                    <div className="cardText">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores vero tempora. Optio minus laborum ducimus. Temporibus, quos?
                            Molestias illum earum eius laborum corporis sequi velit nulla nesciunt, quidem consectetur?
                        </p>
                    </div>
                    <div>
                        <h4>Coisas a fazer em Agra:</h4>
                        <input type="text" placeholder="Adicionar nova atividade" />
                        <p><input type="checkbox" /> Visitar o Taj Mahal</p>
                        <p><input type="checkbox" /> Visitar o Agra Fort</p>
                        <p><input type="checkbox" /> Visitar a Tumba de Itimad-ud-Daulah</p>
                    </div>

                </form>
            )}
        </div >

    )
}