var svValue = 0;
    var ssValue = 0;
    var sskValue = 0;
    var spValue = 0;
    var scValue = 0;
    var tvValue = 0;
    var tsValue = 0;
    var tskValue = 0;
    var tpValue = 0;
    var tcValue = 0;
    let sv = document.getElementById("s-victory");
    let ss = document.getElementById("s-strength");
    let ssk = document.getElementById("s-skill");
    let sp = document.getElementById("s-progress");
    let sc = document.getElementById("s-commerce");
    let tv = document.getElementById("t-victory");
    let ts = document.getElementById("t-strength");
    let tsk = document.getElementById("t-skill");
    let tp = document.getElementById("t-progress");
    let tc = document.getElementById("t-commerce");
    let ssa = document.getElementById("s-strength-adv");
    let tsa = document.getElementById("t-strength-adv");
    let sta = document.getElementById("s-trade-adv");
    let tta = document.getElementById("t-trade-adv");
    let sska = document.getElementById("s-skill-adv");
    let tska = document.getElementById("t-skill-adv");
    let ssh = document.getElementById("status-bar-scout");
    let tsh = document.getElementById("status-bar-taylor");
    let ssb = document.getElementById("status-color-scout");
    let tsb = document.getElementById("status-color-taylor");
    
    document.onclick = function(e) {
      console.log(e.target.id);
      if (e.target.id == "status-bar-scout") {
        ssb.className = "status-bar-red";
        tsb.className = "status-bar-blue";
      }
      if (e.target.id == "status-bar-taylor") {
        tsb.className = "status-bar-red";
        ssb.className = "status-bar-blue";
      }
    }
    
    document.onkeypress = function(e) {
      e = e || window.event;
    
      console.log(e.keyCode);
    
      switch(e.keyCode) {
    
        // Scabers points
        case(113):
          svValue++;
          sv.innerHTML = svValue;
          break;
        case(97):
          if (svValue > 0) {
            svValue--;
            sv.innerHTML = svValue;
          }
          break;
    
        case(119):
          ssValue++;
          ss.innerHTML = ssValue;
          break;
        case(115):
        if (ssValue > 0) {
          ssValue--;
          ss.innerHTML = ssValue;
        }
        break;
    
        case(101):
          scValue++;
          sc.innerHTML = scValue;
          break;
        case(100):
        if (scValue > 0) {
          scValue--;
          sc.innerHTML = scValue;
        }
        break;
    
        case(114):
          sskValue++;
          ssk.innerHTML = sskValue;
          break;
        case(102):
        if (sskValue > 0) {
          sskValue--;
          ssk.innerHTML = sskValue;
        }
        break;
    
        case(116):
          spValue++;
          sp.innerHTML = spValue;
          break;
        case(103):
        if (spValue > 0) {
          spValue--;
          sp.innerHTML = spValue;
        }
        break;
    
        // Taybers points
        case(91):
          tvValue++;
          tv.innerHTML = tvValue;
          break;
        case(59):
          if (tvValue > 0) {
            tvValue--;
            tv.innerHTML = tvValue;
          }
          break;
    
        case(112):
          tsValue++;
          ts.innerHTML = tsValue;
          break;
        case(108):
        if (tsValue > 0) {
          tsValue--;
          ts.innerHTML = tsValue;
        }
        break;
    
        case(111):
          tcValue++;
          tc.innerHTML = tcValue;
          break;
        case(107):
        if (tcValue > 0) {
          tcValue--;
          tc.innerHTML = tcValue;
        }
        break;
    
        case(105):
          tskValue++;
          tsk.innerHTML = tskValue;
          break;
        case(106):
        if (tskValue > 0) {
          tskValue--;
          tsk.innerHTML = tskValue;
        }
        break;
    
        case(117):
          tpValue++;
          tp.innerHTML = tpValue;
          break;
        case(104):
        if (tpValue > 0) {
          tpValue--;
          tp.innerHTML = tpValue;
        }
        break;
      }
    
    // set text color and advantage token visibility
    if(svValue > tvValue) {
      sv.className = "green";
      tv.className = "red";
    }
    else if(tvValue > svValue) {
      sv.className = "red";
      tv.className = "green";
    }
    else {
      sv.className = "black";
      tv.className = "black";
    }
    
    if(ssValue > tsValue) {
      ss.className = "green";
      ts.className = "red";
      if (ssValue >= 3) {
        ssa.className = "shown";
        tsa.className = "hidden";
      }
      else {
        ssa.className = "hidden";
      }
    }
    else if(tsValue > ssValue) {
      ss.className = "red";
      ts.className = "green";
      if (tsValue >= 3) {
        tsa.className = "shown";
        ssa.className = "hidden";
      }
      else {
        tsa.className = "hidden";
      }
    }
    else {
      ss.className = "black";
      ts.className = "black";
      ssa.className = "hidden";
      tsa.className = "hidden";
    }
    
    if(sskValue > tskValue) {
      ssk.className = "green";
      tsk.className = "red";
      sska.className = "shown";
      tska.className = "hidden";
    }
    else if(tskValue > sskValue) {
      ssk.className = "red";
      tsk.className = "green";
      tska.className = "shown";
      sska.className = "hidden";
    }
    else {
      ssk.className = "black";
      tsk.className = "black";
      tska.className = "hidden";
      sska.className = "hidden";
    }
    
    if(spValue > tpValue) {
      sp.className = "green";
      tp.className = "red";
    }
    else if(tpValue > spValue) {
      sp.className = "red";
      tp.className = "green";
    }
    else {
      sp.className = "black";
      tp.className = "black";
    }
    
    if(scValue > tcValue) {
      sc.className = "green";
      tc.className = "red";
      if (scValue >= 3) {
        sta.className = "shown";
        tta.className = "hidden";
      }
      else {
        sta.className = "hidden";
      }
    }
    else if(tcValue > scValue) {
      sc.className = "red";
      tc.className = "green";
      if (tcValue >= 3) {
        tta.className = "shown";
        sta.className = "hidden";
      }
      else {
        tta.className = "hidden";
      }
    }
    else {
      sc.className = "black";
      tc.className = "black";
      sta.className = "hidden";
      tta.className = "hidden";
    }
    }
    
    // Show options on select click
    document.querySelectorAll('.selected').forEach(selected => {
      selected.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('options-hide');
      });
    });
    
    // Move selected option to selected element
    document.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', function() {
          let selected = option.parentElement.parentElement.firstElementChild; 
          selected.innerHTML = this.innerHTML;
          this.parentElement.classList.add('options-hide');
      });
    });
    
    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
    if (!event.target.matches('.selected')) {
        const dropdowns = document.querySelectorAll('.options');
        dropdowns.forEach(dropdown => dropdown.classList.add('options-hide'));
    }
    });
    
    // Show num-options on num-select click
    document.querySelectorAll('.num-selected').forEach(selected => {
      selected.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('num-options-hide');
      });
    });
    
    // Move selected num-option to num-selected element
    document.querySelectorAll('.num-option').forEach(option => {
      option.addEventListener('click', function() {
          let selected = option.parentElement.parentElement.firstElementChild; 
          selected.innerHTML = this.innerHTML;
          this.parentElement.classList.add('num-options-hide');
      });
    });
    
    // Close the num-select dropdown if clicked outside
    document.addEventListener('click', function(event) {
    if (!event.target.matches('.num-selected')) {
        const dropdowns = document.querySelectorAll('.num-options');
        dropdowns.forEach(dropdown => dropdown.classList.add('num-options-hide'));
    }
    });
    
    // Show Scout's watch-list
    document.addEventListener('click', function(event) {
      if (event.target.matches('#s-show-watch-list')) {
        event.target.classList.add('show-watch-list-hidden');
        document.querySelector('#s-watch-list-inputs').classList.toggle('watch-list-hidden');
      }
    });
    // Show Taylor's watch-list
    document.addEventListener('click', function(event) {
      if (event.target.matches('#t-show-watch-list')) {
        event.target.classList.add('show-watch-list-hidden');
        document.querySelector('#t-watch-list-inputs').classList.toggle('watch-list-hidden');
      }
    });