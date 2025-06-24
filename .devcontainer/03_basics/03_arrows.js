//arrows func



const user={
    username:"muskan",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
        //this->current context
        console.log(this); //give object values 
    }
    
}
user.welcomemessage() //run
user.username="sam"
user.welcomemessage() //run
console.log(this); //{}
