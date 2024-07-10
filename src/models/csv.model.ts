import mongoose, {Schema} from "mongoose";

export interface ICsv{
    line: string;
}

 const csvSchema = new Schema({
    line: {
        type:String,
        required: true
    }
})

export const csvModel = mongoose.model<ICsv>("csvModel", csvSchema);