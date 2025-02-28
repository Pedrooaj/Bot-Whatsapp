import { Message } from "whatsapp-web.js";
class EnviarPacote{
    public destino: string = "";
    public data: string = new Date().toLocaleDateString("pt-BR");
    public descricao: string = "";

    start = async (msg: Message) => {
        const mensagem: string = msg.body.toLocaleLowerCase();
        
    }


    }

export default new EnviarPacote().start;