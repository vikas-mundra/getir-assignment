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
exports.recordControllerV1 = void 0;
const express_1 = __importDefault(require("express"));
const Record_validator_1 = require("../../validators/Record-validator");
const RecordResponse_model_1 = require("../../models/api/response-models/RecordResponse.model");
const http_status_codes_1 = require("http-status-codes");
const Record_service_1 = require("../../services/Record.service");
const router = express_1.default.Router();
exports.recordControllerV1 = router;
const recordService = new Record_service_1.RecordService();
router.post('/record', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recordResponseModel = new RecordResponse_model_1.RecordResponseModel();
    try {
        // Validate Request
        const { isValid, errors } = Record_validator_1.RecordValidator.findRecordValidator(req.body);
        if (!isValid) {
            // Set errors and return
            recordResponseModel.validationError(errors);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(recordResponseModel);
        }
        // Get records from service
        let records = yield recordService.FindRecords(new Date(req.body.startDate), new Date(req.body.endDate), req.body.minCount, req.body.maxCount);
        let result = [];
        // Check records
        if (records !== undefined && records.length > 0) {
            records.forEach((record) => {
                result.push({
                    key: record.key,
                    createdAt: record.createdAt,
                    totalCount: record.totalCount
                });
            });
            // Set records to response model
            recordResponseModel.records = result;
        }
    }
    catch (e) {
        // Set errors and return
        recordResponseModel.serverError();
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(recordResponseModel);
    }
    // Return SUCCESS response with records
    return res.status(http_status_codes_1.StatusCodes.OK).send(recordResponseModel);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb3JkLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWNvcmQuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBa0Q7QUFDbEQsd0VBQWtFO0FBQ2xFLGdHQUEwRjtBQUMxRix5REFBOEM7QUFDOUMsa0VBQTREO0FBRTVELE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUF5Q2Isb0NBQWtCO0FBeENwQyxNQUFNLGFBQWEsR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztBQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUV6RCxNQUFNLG1CQUFtQixHQUFHLElBQUksMENBQW1CLEVBQUUsQ0FBQztJQUV0RCxJQUFJO1FBQ0EsbUJBQW1CO1FBQ25CLE1BQU0sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEdBQUcsa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLHdCQUF3QjtZQUN4QixtQkFBbUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDdEU7UUFDRCwyQkFBMkI7UUFDM0IsSUFBSSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlJLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBZ0I7UUFDaEIsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDUixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7b0JBQ2YsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO29CQUMzQixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7aUJBQ2hDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0gsZ0NBQWdDO1lBQ2hDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDeEM7S0FFSjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1Isd0JBQXdCO1FBQ3hCLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDbEY7SUFDRCx1Q0FBdUM7SUFDdkMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7UmVxdWVzdCwgUmVzcG9uc2V9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQge1JlY29yZFZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycy9SZWNvcmQtdmFsaWRhdG9yJztcbmltcG9ydCB7UmVjb3JkUmVzcG9uc2VNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS9yZXNwb25zZS1tb2RlbHMvUmVjb3JkUmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHtTdGF0dXNDb2Rlc30gZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHtSZWNvcmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvUmVjb3JkLnNlcnZpY2VcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuY29uc3QgcmVjb3JkU2VydmljZSA9IG5ldyBSZWNvcmRTZXJ2aWNlKCk7XG5cbnJvdXRlci5wb3N0KCcvcmVjb3JkJywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXG4gICAgY29uc3QgcmVjb3JkUmVzcG9uc2VNb2RlbCA9IG5ldyBSZWNvcmRSZXNwb25zZU1vZGVsKCk7XG5cbiAgICB0cnkge1xuICAgICAgICAvLyBWYWxpZGF0ZSBSZXF1ZXN0XG4gICAgICAgIGNvbnN0IHtpc1ZhbGlkLCBlcnJvcnN9ID0gUmVjb3JkVmFsaWRhdG9yLmZpbmRSZWNvcmRWYWxpZGF0b3IocmVxLmJvZHkpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgLy8gU2V0IGVycm9ycyBhbmQgcmV0dXJuXG4gICAgICAgICAgICByZWNvcmRSZXNwb25zZU1vZGVsLnZhbGlkYXRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuTk9UX0ZPVU5EKS5zZW5kKHJlY29yZFJlc3BvbnNlTW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCByZWNvcmRzIGZyb20gc2VydmljZVxuICAgICAgICBsZXQgcmVjb3JkcyA9IGF3YWl0IHJlY29yZFNlcnZpY2UuRmluZFJlY29yZHMobmV3IERhdGUocmVxLmJvZHkuc3RhcnREYXRlKSwgbmV3IERhdGUocmVxLmJvZHkuZW5kRGF0ZSksIHJlcS5ib2R5Lm1pbkNvdW50LCByZXEuYm9keS5tYXhDb3VudCk7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgICAgIC8vIENoZWNrIHJlY29yZHNcbiAgICAgICAgaWYgKHJlY29yZHMgIT09IHVuZGVmaW5lZCAmJiByZWNvcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogcmVjb3JkLmtleSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiByZWNvcmQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbENvdW50OiByZWNvcmQudG90YWxDb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTZXQgcmVjb3JkcyB0byByZXNwb25zZSBtb2RlbFxuICAgICAgICAgICAgcmVjb3JkUmVzcG9uc2VNb2RlbC5yZWNvcmRzID0gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFNldCBlcnJvcnMgYW5kIHJldHVyblxuICAgICAgICByZWNvcmRSZXNwb25zZU1vZGVsLnNlcnZlckVycm9yKCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuc2VuZChyZWNvcmRSZXNwb25zZU1vZGVsKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIFNVQ0NFU1MgcmVzcG9uc2Ugd2l0aCByZWNvcmRzXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuT0spLnNlbmQocmVjb3JkUmVzcG9uc2VNb2RlbCk7XG59KTtcblxuZXhwb3J0IHtyb3V0ZXIgYXMgcmVjb3JkQ29udHJvbGxlclYxfVxuIl19