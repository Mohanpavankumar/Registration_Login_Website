

async function userContact(req,res){
    try{
        const {email, name, message} = req.body;

        //Checking the credentials
        if(!email){
            throw new Error("Please provide email");
        }
        if(!name){
            throw new Error("Please provide name");
        }
        if(!message){
            throw new Error("Please provide message");
        }

        // Save to database
        const newContact = new contactModel({ email, name, message });
        await newContact.save();

        res.status(200).json({
            message : "Contact details saved successfully!",
            success : true,
            error : false
        })
    }
    catch(error){
        res.json({
            message : error.message || error,
            error : true,
            success : false,
        })
    }
}

module.exports = userContact;