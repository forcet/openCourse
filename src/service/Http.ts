export class Http {
    static async getText(url: string): Promise<string> {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        if (res.status === 204) return "";
        return res.text();
      }
}