"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordValidator = void 0;
// Date validation REGEX YYYY-MM-DD
const DATE_REGEX = "^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$";
const ErrorMessages_1 = require("../utils/ErrorMessages");
class RecordValidator {
    // Validate request body
    static findRecordValidator(recordRequest) {
        const regex = new RegExp(DATE_REGEX);
        const errors = [];
        if (recordRequest.minCount === undefined)
            errors.push(ErrorMessages_1.Errors.MIN_COUNT_REQ);
        if (recordRequest.maxCount === undefined)
            errors.push(ErrorMessages_1.Errors.MAX_COUNT_REQ);
        // minCount and maxCount should be greater than zero and be a number
        if (recordRequest.minCount < 0 || isNaN(Number(recordRequest.minCount)))
            errors.push(ErrorMessages_1.Errors.MIN_COUNT_ERROR);
        if (recordRequest.maxCount < 0 || isNaN(Number(recordRequest.maxCount)))
            errors.push(ErrorMessages_1.Errors.MAX_COUNT_ERROR);
        // Check date fields
        if (recordRequest.startDate) {
            if (!regex.test(recordRequest.startDate.toString()))
                errors.push(ErrorMessages_1.Errors.START_DATE_FORMAT_ERROR);
        }
        else {
            errors.push(ErrorMessages_1.Errors.START_DATE_REQ);
        }
        if (recordRequest.endDate) {
            if (!regex.test(recordRequest.endDate.toString()))
                errors.push(ErrorMessages_1.Errors.END_DATE_FORMAT_ERROR);
        }
        else {
            errors.push(ErrorMessages_1.Errors.END_DATE_REQ);
        }
        // Check errors
        const isValid = errors.length === 0;
        return { isValid, errors };
    }
}
exports.RecordValidator = RecordValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb3JkLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlY29yZC12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsbUNBQW1DO0FBQ25DLE1BQU0sVUFBVSxHQUFHLHVEQUF1RCxDQUFDO0FBRTNFLDBEQUE4QztBQUU5QyxNQUFhLGVBQWU7SUFFeEIsd0JBQXdCO0lBQ3hCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxhQUFxQztRQUM1RCxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsb0VBQW9FO1FBQ3BFLElBQUksYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0csSUFBSSxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU3RyxvQkFBb0I7UUFDcEIsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDcEc7YUFBTTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2hHO2FBQU07WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDbkM7UUFFRCxlQUFlO1FBQ2YsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDcEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUE5QkQsMENBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaW5kUmVjb3JkUmVxdWVzdE1vZGVsfSBmcm9tICcuLi9tb2RlbHMvYXBpL3JlcXVlc3QtbW9kZWxzL1JlY29yZFJlcXVlc3QubW9kZWwnO1xuXG4vLyBEYXRlIHZhbGlkYXRpb24gUkVHRVggWVlZWS1NTS1ERFxuY29uc3QgREFURV9SRUdFWCA9IFwiXlxcXFxkezR9XFxcXC0oMFsxLTldfDFbMDEyXSlcXFxcLSgwWzEtOV18WzEyXVswLTldfDNbMDFdKSRcIjtcblxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuLi91dGlscy9FcnJvck1lc3NhZ2VzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWNvcmRWYWxpZGF0b3Ige1xuXG4gICAgLy8gVmFsaWRhdGUgcmVxdWVzdCBib2R5XG4gICAgc3RhdGljIGZpbmRSZWNvcmRWYWxpZGF0b3IocmVjb3JkUmVxdWVzdDogRmluZFJlY29yZFJlcXVlc3RNb2RlbCkge1xuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoREFURV9SRUdFWCk7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuXG4gICAgICAgIGlmIChyZWNvcmRSZXF1ZXN0Lm1pbkNvdW50ID09PSB1bmRlZmluZWQpIGVycm9ycy5wdXNoKEVycm9ycy5NSU5fQ09VTlRfUkVRKTtcbiAgICAgICAgaWYgKHJlY29yZFJlcXVlc3QubWF4Q291bnQgPT09IHVuZGVmaW5lZCkgZXJyb3JzLnB1c2goRXJyb3JzLk1BWF9DT1VOVF9SRVEpO1xuICAgICAgICAvLyBtaW5Db3VudCBhbmQgbWF4Q291bnQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvIGFuZCBiZSBhIG51bWJlclxuICAgICAgICBpZiAocmVjb3JkUmVxdWVzdC5taW5Db3VudCA8IDAgfHwgaXNOYU4oTnVtYmVyKHJlY29yZFJlcXVlc3QubWluQ291bnQpKSkgZXJyb3JzLnB1c2goRXJyb3JzLk1JTl9DT1VOVF9FUlJPUik7XG4gICAgICAgIGlmIChyZWNvcmRSZXF1ZXN0Lm1heENvdW50IDwgMCB8fCBpc05hTihOdW1iZXIocmVjb3JkUmVxdWVzdC5tYXhDb3VudCkpKSBlcnJvcnMucHVzaChFcnJvcnMuTUFYX0NPVU5UX0VSUk9SKTtcblxuICAgICAgICAvLyBDaGVjayBkYXRlIGZpZWxkc1xuICAgICAgICBpZiAocmVjb3JkUmVxdWVzdC5zdGFydERhdGUpIHtcbiAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChyZWNvcmRSZXF1ZXN0LnN0YXJ0RGF0ZS50b1N0cmluZygpKSkgZXJyb3JzLnB1c2goRXJyb3JzLlNUQVJUX0RBVEVfRk9STUFUX0VSUk9SKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKEVycm9ycy5TVEFSVF9EQVRFX1JFUSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVjb3JkUmVxdWVzdC5lbmREYXRlKSB7XG4gICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QocmVjb3JkUmVxdWVzdC5lbmREYXRlLnRvU3RyaW5nKCkpKSBlcnJvcnMucHVzaChFcnJvcnMuRU5EX0RBVEVfRk9STUFUX0VSUk9SKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKEVycm9ycy5FTkRfREFURV9SRVEpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBlcnJvcnNcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGVycm9ycy5sZW5ndGggPT09IDA7XG4gICAgICAgIHJldHVybiB7aXNWYWxpZCwgZXJyb3JzfTtcbiAgICB9XG59XG4iXX0=