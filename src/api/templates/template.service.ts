import * as templateRepository from "./template.repository.js";

export const createDefault = async (): Promise<any> => {
    // INI NANTI ANY DIGANTI YANG BENER YAHAHA
    const existDefault = await templateRepository.findById("default");
    if (existDefault) {
        return existDefault;
    }

    const defaultTemplate = await templateRepository.createDefaultTemplate();

    return defaultTemplate;
};
