export const setNameSectionstoLoweCase = async ({getSection}) =>{
    const sectionList = await getSection;
    let newSectionList = [];
    let newSectionObj = {};

    if(sectionList){
        sectionList.results.forEach(section => {
            newSectionObj = {name: section.name.toLowerCase()}
            newSectionList.push(newSectionObj);
        });
    }
    return newSectionList;
};
