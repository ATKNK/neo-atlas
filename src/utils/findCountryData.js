export function findCountryData(id, data){
    for (const region in data){
        if (data[region][id]){
            return data[region][id];
        }
    }
    return null;
}