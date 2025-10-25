import { Http } from "./Http";

const url = process.env.NEW_SERVICE || "http://localhost:3000/lucky";
console.log(`Url variable de entorno: ${url}`);

export class LuckyService { 
    async getExternalService(): Promise<string> {
        return await Http.getText(url);
    }
}