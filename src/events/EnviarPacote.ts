import { Message } from "whatsapp-web.js";
class EnviarPacote{
    public destino: string = "";
    public data: string = new Date().toLocaleDateString("pt-BR");
    public descricao: string = "";
    public estado: number = 0;

    start = async (msg: Message) => {
    const mensagem: string = msg.body.toLocaleLowerCase();
    if(this.estado == 0){
        msg.reply("Digite o Destino do seu envio: ");
        this.destino = mensagem;
        this.estado += 1;
    }else if(this.estado == 1){
        msg.reply(`Deseja enviar o pacote para o Destino: *${this.destino}*\n(S)im \n(N)ão`);
        if(mensagem === "s" || mensagem === "sim"){
            this.estado += 1;
        }else{
            msg.reply("Ops... Valor inválido operação cancelada!")
            this.estado -= 1;
        }
    }else if(this.estado == 2){
        msg.reply("continua...")
    }

        
    }


    }

export default new EnviarPacote().start;
