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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const recordSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    counts: {
        type: [Number],
        required: true
    },
    value: {
        type: String,
        required: true
    },
});
recordSchema.statics.build = (attr) => {
    return new Record(attr);
};
const Record = mongoose_1.default.model('records', recordSchema);
exports.Record = Record;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb3JkLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVjb3JkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBMEQ7QUF1QjFELE1BQU0sWUFBWSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUM1QixHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUMzQixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELEdBQUcsRUFBRTtRQUNELElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2QsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBQ0osQ0FBQyxDQUFBO0FBRUYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFhLEVBQUUsRUFBRTtJQUMzQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFrQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFaEYsd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHtTY2hlbWEsIE1vZGVsLCBEb2N1bWVudH0gZnJvbSAnbW9uZ29vc2UnXG5cbmludGVyZmFjZSBJUmVjb3JkIHtcbiAgICBfaWQ6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkIH0sXG4gICAga2V5OiBTdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBEYXRlLFxuICAgIGNvdW50czogW051bWJlcl0sXG4gICAgdmFsdWU6IFN0cmluZ1xufVxuXG5pbnRlcmZhY2UgcmVjb3JkTW9kZWxJbnRlcmZhY2UgZXh0ZW5kcyBNb2RlbDxSZWNvcmREb2M+IHtcbiAgICBidWlsZChhdHRyOiBJUmVjb3JkKTogUmVjb3JkRG9jXG59XG5cbmludGVyZmFjZSBSZWNvcmREb2MgZXh0ZW5kcyBEb2N1bWVudCB7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAga2V5OiBzdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBEYXRlLFxuICAgIGNvdW50czogbnVtYmVyW10sXG4gICAgdmFsdWU6IHN0cmluZ1xuXG59XG5cbmNvbnN0IHJlY29yZFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIF9pZDoge1xuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBrZXk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb3VudHM6IHtcbiAgICAgICAgdHlwZTogW051bWJlcl0sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbn0pXG5cbnJlY29yZFNjaGVtYS5zdGF0aWNzLmJ1aWxkID0gKGF0dHI6IElSZWNvcmQpID0+IHtcbiAgICByZXR1cm4gbmV3IFJlY29yZChhdHRyKVxufVxuXG5jb25zdCBSZWNvcmQgPSBtb25nb29zZS5tb2RlbDxSZWNvcmREb2MsIHJlY29yZE1vZGVsSW50ZXJmYWNlPigncmVjb3JkcycsIHJlY29yZFNjaGVtYSk7XG5cbmV4cG9ydCB7UmVjb3JkLCBJUmVjb3JkfVxuXG4iXX0=