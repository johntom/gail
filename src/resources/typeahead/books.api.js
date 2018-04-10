export class BooksApi{
    
    constructor(){
        this.simulatedLatency = 500;
    }

    getGenres(){

        // let genres = [ 
        //                 'Art', 
        //                 'Autobiographies', 
        //                 'Drama', 
        //                 'Childrens', 
        //                 'Fantasy', 
        //                 'History', 
        //                 'Mystery', 
        //                 'Romance', 
        //                 'Science', 
        //                 'Science Fiction'
        //             ];
let genres = [
                {id:0,name:'Art'},
                { id:1,name:'Autobiographies'},
                { id:2,name:'Drama'},
                { id:3,name: 'Childrens'},
                { id:4,name: 'Fantasy'},
                { id:5,name: 'History'},
                { id:6,name: 'Mystery'}, 
                { id:7,name: 'Photography'}, 
                { id:8,name: 'Romance'},
                { id:9,name: 'Science'},
                { id:10,name:'Science Fiction'}
                    ];
                    console.log(genres)
        return this.simulateFetch(genres);
    }
    
    simulateFetch(fetchResult){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(fetchResult);
            }, this.simulatedLatency);
        });
    }
}