const boxes = [
    {l:1, w:1, h:1}, //
    {l:2, w:2, h:2}, //
    {l:2, w:10, h:2}, //
]

console.log(fitsInOneBox(boxes))

function fitsInOneBox(boxes) {
    let fits = false, ll = [], ww = [], hh = []
    //Ordenar cada caja en el array boxes, de menor a mayor
    boxes.sort((box1,box2) => {
        let vol1 = 1
        let vol2 = 1
        let i = 0
        for (let side in box1) {
            vol1 *= box1[side]
            console.log(vol1)
            if (i < 3) {i++} else {i=0; break;}
        }
        let j = 0
        for (let side in box2) {
            vol2 *= box2[side]
            console.log(box2[side])
            console.log(vol2)
            if (j < 3) {j++} else {j=0; break;}
        }
        return vol1 - vol2
    })
    //serparar cada lado de cada caja en arrays respectivos a cada lado
    boxes.map(box => {
        ll.push(box.l)
        console.log(ll)
        ww.push(box.w)
        console.log(ww)
        hh.push(box.h)
        console.log(hh)  
    })
    console.log(ll[0], ll[1], ll[2])
    console.log(ww[0], ww[1], ww[2])
    console.log(hh[0], hh[1], hh[2])
    //comprobar si la caja más chica entra en la siguiente, y repetir hasta terminar de comprobar todas las cajas
    for (let i = 0; i < boxes.length-1; i++) {
        fits = (ll[i] < ll[i+1])?((ww[i] < ww[i+1])?((hh[i] < hh[i+1])?true:false):false):false;
        if (!fits) {return false}
    }
    return true
}

//GPT
function fitsInOneBoxGPT(boxes, packedBox = null) {
    if (boxes.length === 0) {
      return true;
    }
  
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      if (packedBox === null || box.l < packedBox.l && box.w < packedBox.w && box.h < packedBox.h) {
        boxes.splice(i, 1);
        if (fitsInOneBox(boxes, box)) {
          return true;
        }
        boxes.splice(i, 0, box);
      }
    }
    return false;
  }
  
  console.log(fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 2, w: 10, h: 2 }]));

/*
La función fitsInOneBox es una función de búsqueda en profundidad que recibe una lista de cajas y una caja 
empaquetada (que se inicializa en null por defecto). Si la lista de cajas está vacía, la función devuelve 
true, lo que significa que se han empaquetado todas las cajas y se ha encontrado una solución.

Si la lista de cajas no está vacía, la función itera sobre cada caja de la lista y verifica si cumple con 
las condiciones para entrar en la caja empaquetada. Si la caja cumple con las condiciones, la función elimina
la caja de la lista (usando el método splice) y llama a sí misma recursivamente pasando la lista actualizada
y la caja empaquetada. Si la llamada recursiva devuelve true, significa que se ha encontrado una solución y 
la función devuelve true. Si la llamada recursiva devuelve false, significa que no se ha encontrado una solución 
y la función vuelve a agregar la caja a la lista (usando el método splice).

Si ninguna caja cumple con las condiciones para entrar en la caja empaquetada, la función devuelve false, lo que 
significa que no se ha encontrado una solución.
*/