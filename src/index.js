"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const Record_controller_1 = require("./controllers/v1/Record.controller");
const DatabaseConnection_1 = require("./utils/DatabaseConnection");
const morgan_1 = __importDefault(require("morgan"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(body_parser_1.json());
// Rate limiting
const limiter = express_rate_limit_1.default({
    windowMs: 15 * 60 * 1000,
    max: 100 // limit each IP to 100 requests per windowMs
});
// Apply to all requests
app.use(limiter);
// Setup CORS
app.use(cors_1.default());
// Logger
app.use(morgan_1.default('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));
// Database connection
DatabaseConnection_1.connectDatabase();
// Record V1 Controller
app.use('/api/v1', Record_controller_1.recordControllerV1);
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on PORT ${process.env.PORT}`);
});
process.on('SIGINT', () => killProcess("SIGINT"))
    .on('SIGTERM', () => killProcess("SIGTERM"))
    .on('SIGQUIT', () => killProcess("SIGQUIT"))
    .on('uncaughtException', (err) => {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(1);
})
    .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
});
const killProcess = (signal) => {
    console.info(`${signal} signal received. Closing server...`);
    setTimeout(shutdownGracefully, 300);
};
const shutdownGracefully = () => {
    server.close((err) => {
        if (err) {
            console.error(err);
            process.exit(1); // failure
        }
        DatabaseConnection_1.disconnectDatabase();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsNkNBQWlDO0FBQ2pDLDBFQUFzRTtBQUN0RSxtRUFBK0U7QUFDL0Usb0RBQTRCO0FBQzVCLHVDQUF5QjtBQUN6QiwyQ0FBNkI7QUFDN0IsNEVBQTBDO0FBQzFDLGdEQUF1QjtBQUV2QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBSSxFQUFFLENBQUMsQ0FBQztBQUVoQixnQkFBZ0I7QUFDaEIsTUFBTSxPQUFPLEdBQUcsNEJBQVMsQ0FBQztJQUN0QixRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQ3hCLEdBQUcsRUFBRSxHQUFHLENBQUMsNkNBQTZDO0NBQ3pELENBQUMsQ0FBQztBQUVILHdCQUF3QjtBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWpCLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7QUFFaEIsU0FBUztBQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLEVBQUU7SUFDckIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQztDQUNqRixDQUFDLENBQUMsQ0FBQztBQUVKLHNCQUFzQjtBQUN0QixvQ0FBZSxFQUFFLENBQUM7QUFFbEIsdUJBQXVCO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLHNDQUFrQixDQUFDLENBQUM7QUFFdkMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzVDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1RSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMsQ0FBQztBQUVQLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0scUNBQXFDLENBQUMsQ0FBQztJQUM3RCxVQUFVLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7SUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ3RCLElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtTQUM5QjtRQUVELHVDQUFrQixFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7anNvbn0gZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHtyZWNvcmRDb250cm9sbGVyVjF9IGZyb20gJy4vY29udHJvbGxlcnMvdjEvUmVjb3JkLmNvbnRyb2xsZXInO1xuaW1wb3J0IHtjb25uZWN0RGF0YWJhc2UsIGRpc2Nvbm5lY3REYXRhYmFzZX0gZnJvbSAnLi91dGlscy9EYXRhYmFzZUNvbm5lY3Rpb24nO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCByYXRlTGltaXQgZnJvbSAnZXhwcmVzcy1yYXRlLWxpbWl0J1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGpzb24oKSk7XG5cbi8vIFJhdGUgbGltaXRpbmdcbmNvbnN0IGxpbWl0ZXIgPSByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxNSAqIDYwICogMTAwMCwgLy8gMTUgbWludXRlc1xuICAgIG1heDogMTAwIC8vIGxpbWl0IGVhY2ggSVAgdG8gMTAwIHJlcXVlc3RzIHBlciB3aW5kb3dNc1xufSk7XG5cbi8vIEFwcGx5IHRvIGFsbCByZXF1ZXN0c1xuYXBwLnVzZShsaW1pdGVyKTtcblxuLy8gU2V0dXAgQ09SU1xuYXBwLnVzZShjb3JzKCkpO1xuXG4vLyBMb2dnZXJcbmFwcC51c2UobW9yZ2FuKCdjb21tb24nLCB7XG4gICAgc3RyZWFtOiBmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoLmpvaW4oX19kaXJuYW1lLCAnYWNjZXNzLmxvZycpLCB7ZmxhZ3M6ICdhJ30pXG59KSk7XG5cbi8vIERhdGFiYXNlIGNvbm5lY3Rpb25cbmNvbm5lY3REYXRhYmFzZSgpO1xuXG4vLyBSZWNvcmQgVjEgQ29udHJvbGxlclxuYXBwLnVzZSgnL2FwaS92MScsIHJlY29yZENvbnRyb2xsZXJWMSk7XG5cbmNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIFBPUlQgJHtwcm9jZXNzLmVudi5QT1JUfWApO1xufSk7XG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsICgpID0+IGtpbGxQcm9jZXNzKFwiU0lHSU5UXCIpKVxuICAgIC5vbignU0lHVEVSTScsICgpID0+IGtpbGxQcm9jZXNzKFwiU0lHVEVSTVwiKSlcbiAgICAub24oJ1NJR1FVSVQnLCAoKSA9PiBraWxsUHJvY2VzcyhcIlNJR1FVSVRcIikpXG4gICAgLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcigobmV3IERhdGUpLnRvVVRDU3RyaW5nKCkgKyAnIHVuY2F1Z2h0RXhjZXB0aW9uOicsIGVyci5tZXNzYWdlKVxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjaylcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH0pXG4gICAgLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uLCBwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVhc29uLCAnVW5oYW5kbGVkIFJlamVjdGlvbiBhdCBQcm9taXNlJywgcCk7XG4gICAgfSk7XG5cbmNvbnN0IGtpbGxQcm9jZXNzID0gKHNpZ25hbDogYW55KSA9PiB7XG4gICAgY29uc29sZS5pbmZvKGAke3NpZ25hbH0gc2lnbmFsIHJlY2VpdmVkLiBDbG9zaW5nIHNlcnZlci4uLmApO1xuICAgIHNldFRpbWVvdXQoc2h1dGRvd25HcmFjZWZ1bGx5LCAzMDApO1xufVxuXG5jb25zdCBzaHV0ZG93bkdyYWNlZnVsbHkgPSAoKSA9PiB7XG4gICAgc2VydmVyLmNsb3NlKChlcnI6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7IC8vIGZhaWx1cmVcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc2Nvbm5lY3REYXRhYmFzZSgpO1xuICAgIH0pXG59XG4iXX0=