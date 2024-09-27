import mongoose from "mongoose"
mongoose.connect('mongodb://localhost/doctor_appointment')
const user_table = new mongoose.Schema(
    {
        name:String,
        pass:String
    }
);
export default mongoose.model("user",user_table)