export default function Pesquisa({setPesquisa}){
    return(
        <input type="text" placeholder="Pesquise o nome da pessoa"
            onChange={(e) => setPesquisa(e.target.value)}
        />
    )
}