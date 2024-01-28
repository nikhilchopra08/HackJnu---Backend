const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    userID: { type: String, required: true},
        service: [
            {
                _id: {
                    type: String,
                },
                name: {
                    type: String,
                }
            }
            ],
    account : {type:String},
    phoneNo : {type: String}
    
},{
    timestamps: true,
});

module.exports = mongoose.model("Order" , OrderSchema);