function equation1()
{

    document.getElementById("box").innerHTML = "af = Aaη + Ba χ − Ca (1 − mf)" + "<br>" + "mf(BH − BH) = Am + Bmη^2 + Cm χ";
    document.getElementById("binarySystem").innerHTML = "BH-BH";
}

function equation2() {

    document.getElementById("box").innerHTML = "Mass" + "<br>" + "Spin";
    document.getElementById("binarySystem").innerHTML = "BH-NS";
}

function equation3() {

    document.getElementById("box").innerHTML = "Mass" + "<br>" + "Spin";
    document.getElementById("binarySystem").innerHTML = "NS-NS";
}

const Am = 0.988 ;
const Bm = -0.61 ;
const Cm = -0.042 ;

function calculateMassRatio(m1, m2){
    if(m1<m2){
        return m2 / m1;
    }
    else{
        return m1 / m2;
    }
}

function calculateEta(m1, m2){
    let q = calculateMassRatio(m1, m2);
    let eta = q / ((1 + q) ** 2);   
    return eta;
}

function calculateChi(a1, a2, m1, m2){
    let q = calculateMassRatio(m1, m2);
    let chi = (parseFloat(a1) + parseFloat((a2 * (q ** 2)))) / ((1 + q) * (1 + q)) ;
return chi ;
}

function calculateFinalMass(m1, m2, a1, a2) {
let eta = calculateEta(m1, m2);
    console.log("eta^2 = " + eta ** 2);
let chi = calculateChi(a1, a2, m1, m2);
    console.log("chi = " + chi);
let mf = Am + (Bm * (eta ** 2)) + (Cm * chi);
return mf;
}

function Calculate(){
let primaryMass = document.getElementsByTagName("input").item(0).value;
    let  secondaryMass = document.getElementsByTagName("input").item(1).value;
    let   primarySpin = document.getElementsByTagName("input").item(2).value;
    let  secondarySpin = document.getElementsByTagName("input").item(3).value;
    let finalMass = calculateFinalMass(primaryMass, secondaryMass, primarySpin, secondarySpin);
    return finalMass;
}

function displayResult(){
    let finalMass = Calculate();
    document.getElementById("result").innerHTML = "FINAL MASS(mf) =" + finalMass.toPrecision(6) + "<br>" + "FINAL SPIN(af) = 0.0" ;
}