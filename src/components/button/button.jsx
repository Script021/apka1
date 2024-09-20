function Button(){

    function handleclick(){
        console.log("Przycisk został naciśnięty")
    }

    return <button onClick={handleclick}>
        Naciśnij mnie
    </button>

}
export default Button