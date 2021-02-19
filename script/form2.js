//fungsi untuk menghitung akar kuadrat
function quadraticRoots(a,b,c,d, equivalent){
    const roots = document.getElementById("roots");
    const hasil = (d-a)/(b-c);
 
    if((d-a) <0 && equivalent == "<"){
        equivalent = ">";
    }
    else if((d-a) <0 && equivalent == ">"){
        equivalent = "<";
    }
    else if((d-a) <0 && equivalent == "<="){
        equivalent = ">=";
    }
    else if((d-a) <0 && equivalent == ">="){
        equivalent = "<=";
    }
	// console.log(d)
    // console.log(hasil);
    console.log(equivalent);
 
    let ans = "x "+ equivalent + " " + hasil;
    roots.innerHTML = ans;
 
   
}

//fungsi untuk mengubah bentuk persamaan kuadrat
function createQuadraticStr(a,b,c,d,equivalent,str){
	//untuk a
	if(a == 1){
		//hilangkan angkanya
		str = str.replace("a","");
	}
	else if(a == -1){
		//diberi tanda negatif
		str = str.replace("a","-");
	}
	else{
		//biasa
		str = str.replace("a",a);
	}

	//untuk b
	if(b == 0){
		//dihilangkan tanda + dan x
		str = str.replace("+ b","");
	}
	else if(b == 1){
		//dihilangkan angkanya
		str = str.replace("b","");
	}
	else if(b < 0){
		//dinegatifkan dan hilang angkanya
		if(b == -1){
			str = str.replace("+ b","- ");
		}
		//dinegatifkan
		else{
			str = str.replace("+ b","- "+(b/-1));
		}
	}
	else{
		//biasa
		str = str.replace("b",b);
	}

	//untuk c
	if(c == 0){
		str = str.replace("c", c);
	}
	else if(c < 0){
		str = str.replace("+ c","- "+(c/-1));
	}
	else{
		str = str.replace("c",c);
	}

	if(d == 0){
		str = str.replace("d", d);
	}
	else if(d < 0){
		str = str.replace("+ d","- "+(d/-1));
	}
	else{
		str = str.replace("d",d);
	}

	// replace equivalent
	if(equivalent == "<"){
		str = str.replace("<", ">");
	}
	else if(equivalent == ">"){
		str = str.replace("<", "<");
	}
	else if(equivalent == ">="){
		str = str.replace("<", "<=");
	}
	else if(equivalent == "<="){
		str = str.replace("<", ">=");
	}


	return str;
}

//fungsi validasi input
function validateInput(a,b,c,d){
	return !isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d);
}

function find(){
	//koefisien hanya untuk integer
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	let c = parseInt(document.getElementById("c").value);
	let d = parseInt(document.getElementById("d").value);
	let equivalent = document.getElementById("equivalent").value;

	//validasi input dari user
	//jika bukan angka, beri alert
	const notif = document.getElementById("notif");
	if(validateInput(a,b,c, d)){
		if(a != 0){
			//deklarasi variabel
			const quadraticEq = document.getElementById("quadratic_equation");
			const answer = document.getElementById("answer");
			let quadratic_str = "a + bx < cx + d";

			//mengganti tampilan pers. kuadrat di jawaban
			quadratic_str = createQuadraticStr(a,b,c, d,equivalent,quadratic_str);
			quadraticEq.innerHTML = quadratic_str;

			//mencari akar pers. kuadrat
			quadraticRoots(a,b,c, d, equivalent);

			//menampilkan jawaban
			answer.style.display = "block";

		}
		else{
			notif.innerHTML = "Bukan persamaan kuadrat!";
			showModal();
			reset();
		}
	}
	else{
		notif.innerHTML = "Mohon masukan input yang benar, berupa angka!";
		showModal();
	}	
}

//fungsi untuk mereset halaman
function reset(){
	const answer = document.getElementById("answer");
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("c").value = "";
	document.getElementById("d").value = "";
	answer.style.display = "none";
}