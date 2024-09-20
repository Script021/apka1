import './infobox.css'
function InfoBox(){

    const name ='Maciej Wróblewski'
    let date =new Date().toUTCString()
    var time =""

    return <div className="infobox">
        <p>Maciej Wróblewski</p>
        <p>{date}</p>
        <p>13:30</p>
    </div>

}

export default InfoBox

