import Users from "../models/Users.js";
import bcrypt from "bcrypt"
import getToken from "../utils/token.js";


// the auth 
export const loginUser = async (req,res)=>{
  try{
        const userName = req.body.userName;
        const pwd= req.body.pwd;

        //check that email exist;
      const user= await Users.findOne({
        userName: userName
      });
  
      if(user){    
        bcrypt.compare(pwd,user.password,async function(err,isPasswordValid){

          // if the password is valid
           if(isPasswordValid){

           const token = await getToken( user._id, res );
           const userToReturn={...user.toJSON(),token};
           // delete the user password as we donot want to return the password
           delete userToReturn.password;
           res.json(userToReturn);// by default status is 200

           }else{
         
              return res.status(403).json("Invalid password or username!");
           }

       });
   }else{
      return res.status(403).json("Invalid password or username!");
   }


  }catch(err){
    res.status(500).json({ error:"Internal Server Error"});
  }


}
export const logOut =  (req,res)=>{
    // res.send("LogOut");
    try {
      res.cookie("jwt","",{maxAge: 0});
      res.status(200).json({message:"Log out sucessfully"});

    } catch (error) {
      res.status(500).json({ error:"Internal Server Error"});
    }
}

export const signUp= async (req,res)=>{
  try{
    // ,userName, pwd, confirmPwd, gender
   const {fullName,userName, pwd, confirmPwd, gender} = req.body
    // console.log(fullName);

    if(pwd!= confirmPwd){
    return res.status(400).json({error:"Password and Confirm Password are not same!"})
    }

    const user = await Users.findOne({userName})
    if(user){
      return res.status(400).json({error:"UserName already exists"})
    }
    // Hash password
    const salt=10;

    bcrypt.hash(pwd, salt, async function(err, hash) {
      // const newUserData =new User({
      //     email: email,
      //     password:hash,           // md5(req.body.password)  // hash function
      //     firstName: firstName,
      //     lastName: lastName,
      //     userName: userName
      
      // });
    
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    
    const newUser = new Users({
			fullName:fullName,
			userName:userName,
			password:hash ,
			gender:gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});
    
    if(newUser){
      getToken(newUser._id, res )
    await newUser.save();
    const userToReturn={...newUser.toJSON()};
    delete userToReturn.password;
  // res.send("Ok")
    res.status(201).json(userToReturn);
    }
    else{
      res.status(400).json({ error:"Internal Server Error"});
    }
    
		// res.status(201).json({
		// 		_id: newUser._id,
		// 		fullName: newUser.fullName,
		// 		username: newUser.userName,
		// 		profilePic: newUser.profilePic,
		// 	});


    })
    

  }catch(error){
    console.log("Error:",error.message);
   res.status(500).json({ error:"Internal Server Error"});
  }

    // res.send("SignUp");
}