import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { connection_uri }: dbConfig = config.get('dbConfig');
export const dbConnection = {
  url: connection_uri,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  
};
