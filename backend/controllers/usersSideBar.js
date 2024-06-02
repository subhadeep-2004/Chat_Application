import Users from "../models/Users.js";

export const getUsersSideBar =(req,res)=>{

    try {
        const loggedInUser = req.user._id
        // select will remove the password to get returned
        Users.find({ _id: { $ne: loggedInUser } }).select("-password")
        .then( users => { res.send(users)} )


        // res.send(Alluser)

        // res.send(Alluser)
        
    } catch (error) {
        console.log("Error in getUsers controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}