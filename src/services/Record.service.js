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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordService = void 0;
const Record_model_1 = require("../models/Record.model");
class RecordService {
    FindRecords(startDate, endDate, minCount, maxCount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return Record_model_1.Record.aggregate([
                    {
                        $project: {
                            "key": 1, "value": 1, "createdAt": 1, "totalCount": { "$sum": "$counts" }
                        }
                    },
                    {
                        $match: {
                            "createdAt": { $gte: startDate, $lte: endDate },
                            "totalCount": { $gt: minCount, $lt: maxCount }
                        }
                    }
                ]);
            }
            catch (err) {
                return undefined;
            }
        });
    }
}
exports.RecordService = RecordService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb3JkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWNvcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5REFBNkM7QUFFN0MsTUFBYSxhQUFhO0lBRVQsV0FBVyxDQUFDLFNBQWUsRUFBRSxPQUFhLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjs7WUFDdkYsSUFBSTtnQkFDQSxPQUFPLHFCQUFNLENBQUMsU0FBUyxDQUFDO29CQUNwQjt3QkFDSSxRQUFRLEVBQUU7NEJBQ04sS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQzt5QkFDMUU7cUJBQ0o7b0JBQ0Q7d0JBQ0ksTUFBTSxFQUFFOzRCQUNKLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQzs0QkFDN0MsWUFBWSxFQUFFLEVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFDO3lCQUMvQztxQkFDSjtpQkFDSixDQUFDLENBQUM7YUFDTjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFyQkQsc0NBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uL21vZGVscy9SZWNvcmQubW9kZWwnXG5cbmV4cG9ydCBjbGFzcyBSZWNvcmRTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBhc3luYyBGaW5kUmVjb3JkcyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUsIG1pbkNvdW50OiBudW1iZXIsIG1heENvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBSZWNvcmQuYWdncmVnYXRlKFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiAxLCBcInZhbHVlXCI6IDEsIFwiY3JlYXRlZEF0XCI6IDEsIFwidG90YWxDb3VudFwiOiB7XCIkc3VtXCI6IFwiJGNvdW50c1wifVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICRtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogeyRndGU6IHN0YXJ0RGF0ZSwgJGx0ZTogZW5kRGF0ZX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvdGFsQ291bnRcIjogeyRndDogbWluQ291bnQsICRsdDogbWF4Q291bnR9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19