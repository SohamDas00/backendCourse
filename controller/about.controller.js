export const aboutPage=(req,res)=>{
    res.send("This is about page")
}
export const infoPage=(req,res)=>{
    const user=req.params.username
    res.send(`Hi I'm ${user}`)
}