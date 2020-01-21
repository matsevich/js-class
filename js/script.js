task1.onclick = function () {
    const pi = Math.PI;
    const qadrate = '2';
    class Round {
      constructor(_x) {
        this.x = _x;
      }
      get radius() {
        return [this.x];
      }
      set radius(newRadius) {
        [this.x] = [...newRadius];
      }
      get diametr() {
      return [this.x * 2];
      }
      square () {
        return pi * (this.x ** 2);
      }
      length () {
        return pi * r.diametr;
      }
    }
    let r = new Round (10);
    document.write(`Радіус окружності = ${r.radius} мм<br>`);
    document.write(`Площа окружності = ${r.square().toFixed(2)} мм${qadrate.sup()}<br>`);
    document.write(`Довжина окружності = ${r.length().toFixed(2)} мм<br>`);
    document.write(`Діаметр окружності ${r.diametr} мм<br> <hr>`);
    
    r.radius = [20];
    document.write(`Радіус окружності = ${r.radius} мм<br>`);
    document.write(`Площа окружності = ${r.square().toFixed(2)} мм${qadrate.sup()}<br>`);
    document.write(`Довжина окружності = ${r.length().toFixed(2)} мм<br>`);
    document.write(`Діаметр окружності ${r.diametr} мм<br>`);
}

function progress () {
  let x = document.getElementById('progress');
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}
task2.onclick = function () {
  class Marker {
    constructor(c, a) {
      this.color = c;
      this.amount = a;
    }
    get markerOptions() {
      return [this.color, this.amount];
    }
    set markerOptions(newOptions) {
      [this.color, this.amount] = [...newOptions];
    }
    write(str) {
        let t = document.getElementById("content");
        for (let i = 0; i < str.length; i++) {
          if (this.amount != 0) {
            if (str[i] == " ") {
              this.amount += 0.5;
            }
            t.innerHTML += str[i];
            t.style.color = this.color;
            this.amount -= 0.5;
          } else {
            document.write("Need to refill marker");
            break;
          }
        }
    }
  }
    class RefilledMarker extends Marker {
      refill(a) {
        if (a > 100) {
          a = 100;
        } else {
          this.amount += a;
        }
      }
    }
    let marker = new RefilledMarker("green", 10);
    marker.refill(20);
    
    const l = `1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 `;
    marker.write(l);
    //document.body.setAttribute("style", "font-size: 18px; text-align: center;");
    const prog = document.getElementById('pro');
    prog.style.width = marker.amount+'%';
    prog.innerHTML = `<span>${marker.amount}%</span>`;
    prog.style.color = "#fff";
    console.log(marker.amount);

    
    
  
}
