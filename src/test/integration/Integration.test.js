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
const axios = require('axios');
describe('POST/api/v1/record', () => {
    it('should return records with the status of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        // TODO remove hard coded
        const result = yield axios.post('http://localhost:3000/api/v1/record', {
            "startDate": "2016-12-07",
            "endDate": "2017-12-09",
            "minCount": 300,
            "maxCount": 500
        });
        expect(result.status).toEqual(200);
        expect(result.data).toMatchObject({
            code: 0,
            msg: "SUCCESS"
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb24udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkludGVncmF0aW9uLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ2hDLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSxHQUFTLEVBQUU7UUFDMUQseUJBQXlCO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRTtZQUNuRSxXQUFXLEVBQUUsWUFBWTtZQUN6QixTQUFTLEVBQUUsWUFBWTtZQUN2QixVQUFVLEVBQUUsR0FBRztZQUNmLFVBQVUsRUFBRSxHQUFHO1NBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzlCLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLFNBQVM7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5kZXNjcmliZSgnUE9TVC9hcGkvdjEvcmVjb3JkJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHJlY29yZHMgd2l0aCB0aGUgc3RhdHVzIG9mIDIwMCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gVE9ETyByZW1vdmUgaGFyZCBjb2RlZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3JlY29yZCcsIHtcbiAgICAgICAgICAgIFwic3RhcnREYXRlXCI6IFwiMjAxNi0xMi0wN1wiLFxuICAgICAgICAgICAgXCJlbmREYXRlXCI6IFwiMjAxNy0xMi0wOVwiLFxuICAgICAgICAgICAgXCJtaW5Db3VudFwiOiAzMDAsXG4gICAgICAgICAgICBcIm1heENvdW50XCI6IDUwMFxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KHJlc3VsdC5zdGF0dXMpLnRvRXF1YWwoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3VsdC5kYXRhKS50b01hdGNoT2JqZWN0KHtcbiAgICAgICAgICAgIGNvZGU6IDAsXG4gICAgICAgICAgICBtc2c6IFwiU1VDQ0VTU1wiXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSlcbiJdfQ==