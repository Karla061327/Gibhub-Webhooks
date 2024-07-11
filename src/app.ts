import express from 'express';
import { envs } from './config';
import { GithubController } from './config/presentation/github/controller';

import bodyParser from 'body-parser';


(() => {
    main();
})();

function main() {
    const app = express();
    const controller = new GithubController();

    app.use(express.json());
    app.use(bodyParser.json());
    app.post('/api/github', controller.webhookHandler);

    app.listen(envs.PORT, () => {
        console.log(`App running on port ${envs.PORT}` );
        
    })
}