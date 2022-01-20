"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
require("./index");
var _config = _interopRequireDefault(require("config"));
var _compression = _interopRequireDefault(require("compression"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _helmet = _interopRequireDefault(require("helmet"));
var _hpp = _interopRequireDefault(require("hpp"));
var _morgan = _interopRequireDefault(require("morgan"));
var _mongoose = require("mongoose");
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _databases = require("./databases");
var _errorMiddleware = _interopRequireDefault(require("./middlewares/error.middleware"));
var _logger = require("./utils/logger");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let App = class App {
    listen() {
        this.app.listen(this.port, ()=>{
            _logger.logger.info(`=================================`);
            _logger.logger.info(`======= ENV: ${this.env} =======`);
            _logger.logger.info(`🚀 App listening on the port ${this.port}`);
            _logger.logger.info(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
    connectToDatabase() {
        if (this.env !== 'production') {
            (0, _mongoose).set('debug', true);
        }
        (0, _mongoose).connect(_databases.dbConnection.url, _databases.dbConnection.options);
    }
    initializeMiddlewares() {
        this.app.use((0, _morgan).default(_config.default.get('log.format'), {
            stream: _logger.stream
        }));
        this.app.use((0, _cors).default({
            origin: _config.default.get('cors.origin'),
            credentials: _config.default.get('cors.credentials')
        }));
        this.app.use((0, _hpp).default());
        this.app.use((0, _helmet).default());
        this.app.use((0, _compression).default());
        this.app.use(_express.default.json());
        this.app.use(_express.default.urlencoded({
            extended: true
        }));
        this.app.use((0, _cookieParser).default());
    }
    initializeRoutes(routes) {
        routes.forEach((route)=>{
            this.app.use('/', route.router);
        });
    }
    initializeSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'REST API',
                    version: '1.0.0',
                    description: 'Example docs'
                }
            },
            apis: [
                'swagger.yaml'
            ]
        };
        const specs = (0, _swaggerJsdoc).default(options);
        this.app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(specs));
    }
    initializeErrorHandling() {
        this.app.use(_errorMiddleware.default);
    }
    constructor(routes){
        this.app = (0, _express).default();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV || 'development';
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }
};
var _default = App;
exports.default = _default;

//# sourceMappingURL=app.js.map