const data =[
    {Principal: 2500, time: 1.8},
    {Principal :1000, time: 5},
    { Principal: 3000, time:1},
    { Principal: 2000, time: 3}
];
const interestData= data.map(interestCalculator);
   let interestCalculator= (arr) =>{

        let rate ;
        let interest;
            if (arr.Principal >= 2500 && arr.time > 1 && arr.time <3) {
            rate = 3; 
           
            }
            else if (arr.Principal >= 2500 && arr.time >= 3) {
                rate = 4;
               
            }
            else if (arr.Principal <2500 || arr.time <= 1) {
                rate = 2;
                
            }
            else{
                rate = 1
            }
        return(
            interest= (arr.Principal *rate * arr.time)/ 100
        )
    }
    interestCalculator(data);
    