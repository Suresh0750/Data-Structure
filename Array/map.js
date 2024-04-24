


    const map = new Map([[1,2],[3,3],[4,5]])  //* its stored value key value pair



    let key  = Object.keys(map)     // * its not normal object

    map.set('question','who are you')  //* key and value 
    map.set(true,'MERN Stack developer')  //* key we can stored any data type
    map.set(true,'MERN developer')  //* key we can stored any data type
    map.set('previously which department','Mechanical')
    map.set('Mechanical',true)

    // map.delete('4','5')     //* delete is not use map side  if you want to delete the entries mention only key inside of the map.delete

    map.get(4)                 //* get the property inside we don't mention string datatype

    map.size                    //* determined the size of object


    map.has("Mechanical")

    console.log(map.get(4))
    console.log(map.get(true))  
    console.log(map.get("who are you"))  //* keep the value we can't access the key but keep the key we can access value

    console.log(map.size); 
    console.log(map.has('Mechanical'));   //*  here mentioning key only 
    console.log(map.has('question'));     //* here we mention key 

    console.log(map)

    map.delete('Mechanical')   //* delete the property

    console.log(map)

    

    map.clear()             //* This method clear the all entries in side on the object

    console.log(map)



    // # new map([[1,2],[2,3]])  if we want to use map we can only use add the value entries format 

    let obj = {
        s : 'suresh',
        l : 'liston',
        p : 'Pranav',
        h : 'Hari'
    }

    let objMap = new Map(Object.entries(obj))  // * normal object convert to the entries format then only we can use new Map otherwise we can't use

    console.log(objMap);


    // * these all only unique values and key if we want to remove repeat element inside of object we can use this method

    let x = [...objMap.keys()]    // * we can copy and assign the key from the Map 

    console.log(x)

    let y = [...objMap.values()]  // * we can copy and assign the value from the Map

    console.log(y);

    let z = [...objMap.entries()]   //* we can copy and assign entire entries value from the Map

    console.log(z);

    console.log(typeof(objMap));

    for(let key of objMap){

        console.log(key)

    }




// # keep the map find out count of repeating elsement

let i = 0

while(i<nums.length){
    
    map.set(nums[i],(map.get(nums[i]) || 0)+1)
    
    i++
    
}

// * seperate key and value from the map

const keyMap = [...map.keys()]
const valuesMap = [...map.values()]

// # keep the set find out unique element 

i= 0

const set1 = new Set()


while(i<nums.length){
    
    set1.add(nums[i])
    i++
}

// * seperate key and value from the set

const keySet = [...set1.keys()]
const valueSet = [...set1.values()]