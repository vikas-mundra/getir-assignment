"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDatabase = exports.connectDatabase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
let dbConnection;
exports.connectDatabase = () => {
    const uri = '' + process.env.DB_URI;
    if (dbConnection) {
        return;
    }
    mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    dbConnection = mongoose_1.default.connection;
    dbConnection.once('open', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Connected to database ${process.env.DB_NAME}`);
    }));
    dbConnection.on('error', () => {
        console.log(`Error connecting to database ${process.env.DB_NAME}`);
    });
};
exports.disconnectDatabase = () => {
    if (!dbConnection) {
        return;
    }
    mongoose_1.default.disconnect();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2VDb25uZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGF0YWJhc2VDb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLHdEQUFnQztBQUVoQyxJQUFJLFlBQWlDLENBQUM7QUFFekIsUUFBQSxlQUFlLEdBQUcsR0FBRyxFQUFFO0lBQ2hDLE1BQU0sR0FBRyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLFlBQVksRUFBRTtRQUNkLE9BQU87S0FDVjtJQUNELGtCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNsQixlQUFlLEVBQUUsSUFBSTtRQUNyQixrQkFBa0IsRUFBRSxJQUFJO0tBQzNCLENBQUMsQ0FBQztJQUNILFlBQVksR0FBRyxrQkFBUSxDQUFDLFVBQVUsQ0FBQztJQUNuQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFTLEVBQUU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDSCxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7SUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNmLE9BQU87S0FDVjtJQUNELGtCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBkYkNvbm5lY3Rpb246IG1vbmdvb3NlLkNvbm5lY3Rpb247XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0RGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdXJpID0gJycgKyBwcm9jZXNzLmVudi5EQl9VUkk7XG4gICAgaWYgKGRiQ29ubmVjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vbmdvb3NlLmNvbm5lY3QodXJpLCB7XG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgfSk7XG4gICAgZGJDb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICBkYkNvbm5lY3Rpb24ub25jZSgnb3BlbicsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbm5lY3RlZCB0byBkYXRhYmFzZSAke3Byb2Nlc3MuZW52LkRCX05BTUV9YCk7XG4gICAgfSk7XG4gICAgZGJDb25uZWN0aW9uLm9uKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2UgJHtwcm9jZXNzLmVudi5EQl9OQU1FfWApO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2Nvbm5lY3REYXRhYmFzZSA9ICgpID0+IHtcbiAgICBpZiAoIWRiQ29ubmVjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcbn07XG4iXX0=