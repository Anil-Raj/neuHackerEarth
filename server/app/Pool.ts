function addMinutes(date:Date, minutes:number) {
    return new Date(date.getTime() + minutes*60000);
}
export default class Pool {
    id:number;
    users:{id:number,score:number}[];
    capacity:number;
    endsIn: Date;

    constructor() {
     let guild =  Math.random()*10;
      this.id = parseInt(((Math.random()*10000)/100).toString());
      this.users  = [];
      this.capacity = 2;
      this.endsIn = addMinutes(new Date(),15)
    }
    canAddMore(){
        return this.capacity > this.users.length;
    }
    addUser(userID:number) {
        if(this.canAddMore()){
            this.users.push({id:userID,score:0});
        }
    }
    updateUser(users:{id:number,score:number}[]){
        this.users = users;
    }
  
  }