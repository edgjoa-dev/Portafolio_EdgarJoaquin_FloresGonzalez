import { works } from "../data/works"


export const getWorkByPublisher = (publisher) => {

    const validPublishers = ['projects'];

    if (!validPublishers.includes(publisher)) {
        throw new Error( `${publisher} no es un valor de publisher valido`);
    }

    return works.filter(work => work.publisher === publisher);
}
