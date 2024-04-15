


    const map = new Map([[1,2],[3,3],[4,5]])  //* its stored value key value pair



    let key  = Object.keys(map)     // * its not normal object

    map.set('question','who are you')  //* key and value 
    map.set(true,'MERN Stack developer')  //* key we can stored any data type
    map.set(true,'MERN Stack developer')  //* key we can stored any data type
    map.set('previously which department','Mechanical')
    map.set('Mechanical',true)

    // map.delete('4','5')     //* delete is not use map side

    map.get(4)                 //* get the property inside we don't mention string datatype

    map.size                    //* determined the size of object


    map.has("Mechanical")

    console.log(map.get(4))
    console.log(map.get(true))  
    console.log(map.size); 
    console.log(map.has('Mechanical'));   //*  here mentioning value only 
    console.log(map.has('question'));     //* here we mention key 


    console.log(map)




