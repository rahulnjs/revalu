import { v4 as uuidv4 } from "uuid";

const getItem = () => ({
    id: uuidv4(),
    title: 'My Collection',
    description: 'A collection is a grouping of some variable number of data items that have some shared significance to the problem being.',
    count: Math.floor(Math.random() * 100)
})


export const initial_collections = new Array(4).fill(0).map(a => getItem());

