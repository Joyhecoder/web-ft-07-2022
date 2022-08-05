const getChars = async()=>{
    let charArr = [];
    let pageIndex = 1;
    let resultsArr = [];
    let houseArr= [];
    let resultsHouseArr = []

    do {
        let chars = await fetch(
          `https://www.anapioficeandfire.com/api/characters?page=${pageIndex}&pageSize=50`
        );
        resultsArr = await chars.json();
       

        charArr = [...charArr, ...resultsArr];
        pageIndex++;
      } while (resultsArr.length > 0);
      console.log(charArr);

      let charName = [];
      charArr.forEach(e=>{
        
        charName.push(e.name)
        
      })
      console.log(charName);


    // do{
        let house = await fetch(`https://www.anapioficeandfire.com/api/houses/${pageIndex}`);
        resultsHouseArr = await house.json();
        houseArr = [...houseArr, ...resultsHouseArr]
        pageIndex++;
    // }while(resultsHouseArr.length > 0);
    console.log(houseArr);


    
      

}

getChars()