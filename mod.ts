import { Anime } from './src/api.ts';

const data = await Anime.getById(1);

console.log(data.aired.from.toDateString());
