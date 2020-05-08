function shtoLajmin (){
    var title = document.createElement("h3");
    var text = document.createElement("p");
    var titulliPermbajtja = document.getElementById("titulli-new").value="";
    var tekstiPermbajtja = document.getElementById("permbajtja-new").value="";
    if (titulliPermbajtja == "" || tekstiPermbajtja == ""){
    alert ("Nuk ka titull as paragraf");
    return;
    }
    title.append(titulliPermbajtja);
    text.append(tekstiPermbajtja);
    var photo= document.createElement("img");
    photo.src ="UBT-LOGO.png";
    photo.setAttribute("class","foto-lajmi");
    var lajemet = document.getElementsByClassName("form-group");
    if (lajemet.length == 4){
    lajmet[3].parentNode.removeChild(lajmet[3]);
    }
    var lajmi = document.createElement("div");
    lajmi.append(foto);
    lajmi.append(title);
    lajmi.append(text);
    lajmi.setAttribute("class","form-group")

    var data = document.createElement("h6");
    var data = new Date ();
    var koha = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
    data.append(koha);
    lajmi.append(data);
    var lajmetDiv = document.getElementsByClassName("right-side");
    lajmetDiv[0].prepend(lajmi);

}
    function clearfields(){
        document.getElementsById("titulli-new").value="";
        document.getElementsById("permbajtja-new").value="";
    }