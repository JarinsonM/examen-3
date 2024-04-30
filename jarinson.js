// let nombre = prompt ("hola ingrese su nombre");
// let edad = parseInt( prompt("hola ingrese su edad"));

// edad =>18? alert(`hola ${nombre}, eres menor de edad,tienes ${edad}`): alert(`hola ${nombre}hola eres mayor de edad,tienes ${edad}`) ;

// let a =parseInt(prompt (3));
// let b =parseInt(prompt (3));

// if(a===b){
//     alert("los valores son iguales,ingrese otro valor")
// }else{
//     let mayor = a >b ? a:b;
//     alert("el mayor valor es:"+ mayor);
// }




let alumnos;
let opciones;

do {
  let nombre = prompt("Ingrese el nombre del alumno:");
  let salario = parseFloat(prompt("Ingrese el salario del alumno:"));
  let edad = parseInt(prompt("Ingrese la edad del alumno:"));
  let carrera = parseInt(prompt("Ingrese la carrera del alumno (1: Administración, 2: Derecho, 3: Medicina, 4: Sistemas):"));

  alumnos.push({ nombre, salario, edad, carrera });

 let continuar = prompt("¿Desea ingresar datos de otro alumno? (Sí/No)").toLowerCase();
} while (continuar === 2 || continuar === 2);


if (carreraConMasAlumnos) {
  let contadorCarreras = (0, 0, 0, 0);
  for (let alumno of alumnos) {
    contadorCarreras(alumno.carrera ++ );
  }
  let carrera = contadorCarreras(let.carrera(contadorCarreras));
  
}


if (promedioSalarioAdministracion) {
  let sumaSalarios = 0;
  let contadorAdministracion = 0;
  for (let alumno of alumnos) {
    if (alumno.carrera === 1) {
      sumaSalarios += alumno.salario;
      contadorAdministracion++;
    }
  }
  
}

if (edadMayorSalario) {
  let mayorSalario = 0;
  let edadMayorSalario = 0;
  for (let alumno of alumnos) {
    if (alumno.salario > mayorSalario) {
      mayorSalario = alumno.salario;
      edadMayorSalario = alumno.edad;
    }
  }
  
}

alert("Carrera con más alumnos:", carreraConMasAlumnos());
alert("Promedio de salario de los alumnos de administración:", promedioSalarioAdministracion());
alert("Edad de la persona con mayor salario:", edadMayorSalario());




