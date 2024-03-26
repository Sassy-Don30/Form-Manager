import nc from 'next-connect';
import { getSomething } from '../../controller/test/getSomething';

const handler = nc();
handler.get(getSomething);
export default handler;
