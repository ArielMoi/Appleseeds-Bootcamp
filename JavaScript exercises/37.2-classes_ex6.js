class Room{
    constructor(roomID, level, amount, isFree = false){
        this.roomID = roomID;
        this.level = level;
        this.amount = amount;
        this.isFree = isFree;
    }

    isEnough(amountOfPeople){
        return amountOfPeople <= this.amount;
    }

    print(){
        console.log(`room id: ${this.roomID}
        level: ${this.level}
        amount allowed: ${this.amount}
        is free? ${this.isFree}`)
    }

}

let a = new Room(5, 2, 10);
let b = new Room(6, 3, 15);
let c = new Room(7, 4, 5);
console.log(a.isEnough(11))
a.print();

class Hotel{
    constructor(room){
        this.rooms = [room];
    }

    addRoom(roomUser){
        for (let room of this.rooms){
            if (room.roomID == roomUser.roomID){
                return false;
            }
        }
        this.rooms.push(roomUser);
        return true;
    }

    addNewRoom(roomid, level, amount, isFree = false){
        let a = new Room(roomid, level, amount, isFree);

        for (let room of this.rooms){
            if (room.roomID == a.roomID){
                return false;
            }
        }
        this.rooms.push(a);
        return true;
    }

    removeRoom(userRoom){
        let answer = [];
        for (let room of this.rooms){
            if (room.roomID != userRoom.roomID){
                answer.push(room)
            }
        }
        return answer;
    }

    checkFreeRooms(){
        let answer = [];
        for(let room of this.rooms){
            if(room.isFree){
                answer.push(room);
            }
        }
        return answer;
    }

    checkIn(roomid, amountOfGuests){
        for(let room of this.rooms){
            if (room.roomID == roomid){
                if (room.isFree && room.amount >= amountOfGuests){
                    room.isFree = false;
                    return true;
                }
            }
        }
        return false;
    }

    highRoomFree(){
        let roomsByFloor = this.rooms.sort((a, b) => b.level - a.level).filter((a) => a.isFree);
        return roomsByFloor;
    }

    getAllRooms(){
        return this.rooms.sort((a,b) => a.roomID - b.roomID).filter(a => a.isFree);
    }
}

console.log('-----')
let hotel = new Hotel(a);
// console.log(hotel)
console.log(hotel.addRoom(b));
// console.log(hotel)
console.log(hotel.addNewRoom(10, 5, 2, true));
console.log(hotel.addNewRoom(11, 7, 2, true));
console.log(hotel.addNewRoom(12, 3, 2, true));
// console.log(hotel.removeRoom(b))

console.log(hotel, '----------------')
// console.log(hotel.checkIn(10, 4))
// console.log(hotel.checkIn(10, 2))
console.log(hotel.highRoomFree())
console.log(hotel.getAllRooms())