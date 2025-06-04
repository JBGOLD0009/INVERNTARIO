const url ="https://inverntario.onrender.com/api/categorias"

 export const obtainCategories = async () => {
    try{
        const resultado = await fetch(url);//then
        const categorias = await resultado.json();//then
        return categorias
    } catch (error) {
        console.error("error");
    }
}