const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const listingSchema=new Schema({
    title:{
    type:String,
    required:true,
    },

    description:String,
    image:{
      type:  String,
      default:"https://unsplash.com/photos/a-couple-of-boats-floating-on-top-of-a-body-of-water-QbSrPPkLi84",
      set:(v) => v === ""
      ?"https://unsplash.com/photos/a-couple-of-boats-floating-on-top-of-a-body-of-water-QbSrPPkLi84":v,
    },

    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
