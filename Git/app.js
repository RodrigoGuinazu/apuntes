// Pasos para trabajar con git.

// 1) En la carpeta en la que vamops a trabajar escribimos git . Esto lo que hace es crear un repositorio local

// 2) Para agregar tu identidad al repositorio ecsribimos git config user.name "nombre de usuario en github" y luego git config user.email "mail de github"
// En caso de que trabajemos desde la misma pc y utilizamos la misma cuenta agregamos --global luego de config

// 3) Para conectar el repositorio local con el remoto debemos copiar el url del repositorio creado en github y luego escribir git remote add origin url
// Si queremos chequear que el url que agregamos es correcto escribimos git remote -v

// 4) Para agregar archivos a git debemos escribir git add nombreDelArchivo.extension
// En caso de querer agregar todos los archivos del repositorio escribimos git add 
// Ademas con git status podemos chequear si los archivos fueron actualizados en el repositorio remoto

// 5) Para guardar los cambios hechos en el repositorio escribimos git commit -m "mensaje de cambios"
// Podemos usar el git log para ver todos los cambios realizados

// 6) Para subir todos los archivos una vez que hayamos hecho el git add y el git commit faltaria subirlos, para eso tendriamos que escribir git push origin main

// 7) Para clonar un proyecto por primera vez escribimos git clone url
// Para actualizar los archivos escribimos git pull origin main

// 8) Para ver los cambios realizados en los archivos escribimos git diff nombreDelArchivo.extension

// 9) Para crear una rama escribimos git branch nombreDelBranch

// 10) Para cambiar de rama y trabajar sobre ella debemos escribir git checkout nombreDelBranch

// 11) Para traer actualizaciones de una rama escribimos git pull origin nombreDelBranch

// 12) Para enviar cambios a la rama remota escribimos git push origin nombreDelBranch