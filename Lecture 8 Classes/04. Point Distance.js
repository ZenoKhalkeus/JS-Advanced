class Point{
    static distance(first, second){
        let dx = second.x - first.x 
        let dy  = second.y - first.y

        return Math.sqrt(dx ** 2 + dy ** 2)
    }
    constructor (x,y){
        this.x = x;
        this.y = y
    }
}