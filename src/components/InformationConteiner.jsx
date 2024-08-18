import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import "../styles/components/informationConteiner.sass"

export const InformationConteiner = () => {
  return (
    <section id="information-conteiner">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(38) 9999-9999</p>
            </div>
        </div>

        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>gabriel@gmail.com</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Montes Claros - MG</p>
            </div>
        </div>
    </section>
  )
}
