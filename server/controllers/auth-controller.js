const home = async (req,res) =>{
try{
    res
    .status(200)
    .send("Home Page using router");
}catch (error){
console.log(error)
}
};


const register = async(req,res)=>{
    try{
        console.log(req.body);
        const data = req.body;
       res.status(200).json({data});
    }catch(error){
       res.status(500).json({msg:"page not found"});
    }
};

module.exports = {home, register}