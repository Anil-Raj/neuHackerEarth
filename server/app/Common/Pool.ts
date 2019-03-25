function addMinutes(date:Date, minutes:number) {
    return new Date(date.getTime() + minutes*60000);
}
export default class Pool {
    id:number;
    users:any[];
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
    addUser(user:any) {
        if(this.canAddMore()){
            this.users.push(user);
        }
    }
    updateUser(user:any){
        this.users = this.users.map(u =>u.id == user.id ? user:u);
    }
  
  }