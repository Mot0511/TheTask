isft = true;
isplan = 1;
function add() {
  if (isft){
    tab = '<div class="ft">\
      <button type="button" id="tab" class="tab" name="button">План1</button>\
      <button type="button" class="button" id="rename_bt" onclick="rename()" name="button">\
        <img src="img/pencil.png" alt="">\
      </button>\
    </div>\
    ';
    oldtabs = document.getElementById('tabs').innerHTML;
    document.getElementById('tabs').innerHTML = oldtabs + tab;
    isft = false
eel.newplan('план' + isplan)
isplan++
  }
  else{
    tab = '<div class="t">\
      <button type="button" id="tab" class="tab" name="button">План' + isplan + '</button>\
      <button type="button" class="button" id="rename_bt" onclick="rename()" name="button">\
        <img src="img/pencil.png" alt="">\
      </button>\
    </div>\
    ';
    oldtabs = document.getElementById('tabs').innerHTML;
    document.getElementById('tabs').innerHTML = oldtabs + tab;
    isft = false
    eel.newplan('план' + isplan)
    isplan++
  }


}

isrename = true
function rename() {
  if (isrename){
    document.getElementById('tab1').innerHTML = '<input type="text" id="newname" class="new_name_input" placeholer="введите новое имя">'
    document.getElementById('rename_bt').innerHTML = '<img src="img/save.png">'
    isrename = false
  }
  else{
    newname = document.getElementById('newname').value + '.txt'
    document.getElementById('rename_bt').innerHTML = '<img src="img/pencil.png">'
    document.getElementById('tab1').innerHTML = newname
    eel.savename(newname, 'plan1.txt');
    isrename = true
  }
}
