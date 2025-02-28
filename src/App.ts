import { Client, Contact, LocalAuth, Message, MessageContent } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import EnviarPacote from "./events/EnviarPacote";

class App {
    public client: Client = new Client(
        {
            authStrategy: new LocalAuth(),
            restartOnAuthFail: true,
            puppeteer: {
                headless: true,
            }
        }
    );
    constructor(){
        this.middlewares();
        this.events();
    }


    middlewares = () => {

        this.client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true })
        })

        this.client.on('authenticated', (qr) => {
            console.log("Conta whatsapp Web auteticada!");
        })

        this.client.on('ready', async () => {
            const versao = await this.client.getWWebVersion();
            console.log(`Bot iniciado 🤖⚙️ \nVersão do Whatsapp Web: ${versao}`);
        })
    } 

    events = () => {
        this.client.on('message', EnviarPacote)
    }
}

export default new App().client;