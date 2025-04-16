
import {obtainCategories} from '../apiConnection/ConsumeApi.js'
document.addEventListener("DOMContentLoaded", () => {
    getCategories();
})


async function getCategories(){
    const categoriesObtained = await obtainCategories();
    const container = document.querySelector('tbody')
    categoriesObtained.forEach((category) => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = category        
        const row = document.createElement('tr')
        row.innerHTML =`
        <td>
        ${CategoriaID}
        </td>
         <td>
        ${CategoriaNombre}
        </td>
         <td>
        ${Descripcion}
        </td>
         <td>
        <img src="${Imagen}" width="100px" class"cuenta">
        </td>
        <td>
        <buttton class="btn color3"> Details</buttton>
        </td>
        <td>
        <buttton class="btn color2"> Edit</buttton>
        </td>
        <td>
        <buttton class="btn color5"> Delete</buttton>
        </td>
        `;
        container.appendChild(row)
    });
}